import bcrypt from "bcryptjs";
import { createCookieSessionStorage, redirect } from "remix";
import { db } from "./db.server";
const saltRounds = 10;

type LoginForm = {
    username: string;
    password: string;
};

type RegisterForm = {
    username: string;
    password: string;
    country: string;
    countryEmoji: string;
};

export async function register({ username, password, country, countryEmoji }: RegisterForm) {
    const passwordHash = await bcrypt.hash(password, saltRounds);

    let userExists = await db.user.findFirst({
        where: { username },
    });

    if (userExists) {
        return false;
    }

    try {
        const user = await db.user.create({
            data: { username, passwordHash, score: 0, country, countryEmoji },
        });

        return user;
    } catch (error) {
        console.log(error);
    }
}

export async function login({ username, password }: LoginForm) {
    const user = await db.user.findUnique({
        where: { username },
    });

    if (!user) return null;

    const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isCorrectPassword) return null;
    return user;
}

export async function getUser(request: Request) {
    const userId = await getUserId(request);
    if (typeof userId !== "string") {
        return null;
    }

    try {
        const user = await db.user.findUnique({
            where: { id: userId },
        });
        return user;
    } catch {
        throw logout(request);
    }
}

export async function logout(request: Request) {
    const session = await storage.getSession(request.headers.get("Cookie"));
    return redirect("/login", {
        headers: {
            "Set-Cookie": await storage.destroySession(session),
        },
    });
}

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
    throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
    cookie: {
        name: "Wordle_session",
        // normally you want this to be `secure: true`
        // but that doesn't work on localhost for Safari
        // https://web.dev/when-to-use-local-https/
        secure: process.env.NODE_ENV === "production",
        secrets: [sessionSecret],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
    },
});

export async function createUserSession(userId: string, redirectTo: string) {
    const session = await storage.getSession();
    session.set("userId", userId);
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await storage.commitSession(session),
        },
    });
}

export function getUserSession(request: Request) {
    return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
    const session = await getUserSession(request);
    const userId = session.get("userId");
    if (!userId || typeof userId !== "string") return null;
    return userId;
}

export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) {
    const session = await getUserSession(request);
    const userId = session.get("userId");
    if (!userId || typeof userId !== "string") {
        const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
        throw redirect(`/login?${searchParams}`);
    }
    return userId;
}
