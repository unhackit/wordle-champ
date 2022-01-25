import {
    ActionFunction,
    Links,
    LinksFunction,
    LiveReload,
    LoaderFunction,
    Meta,
    Outlet,
    redirect,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import { ToastContainer } from "react-toastify";
import toastStyles from "./global.css";
import Navbar from "./components/Navbar";
import { getUser } from "./utils/session.server";
import { User } from "./types/types";
import { userPrefs } from "./cookies";

export const meta: MetaFunction = () => {
    return {
        title: "WORDLE CHAMP - Built with Remix!",
        description: "Do you have what it takes to compete globally? Play now!",
    };
};

export const links: LinksFunction | any = () => {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },
        { rel: "stylesheet", href: toastStyles },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Courgette&display=swap",
        },
        {
            rel: "preconnect",
            crossOrigin: "true",
            href: "https://kit.fontawesome.com/36afc40636.js",
        },
    ];
};

export const loader: LoaderFunction = async ({ request }) => {
    let user = await getUser(request);
    return user;
};

export default function App() {
    const user: User = useLoaderData();

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />

                <Meta />
                <Links />
            </head>
            <body>
                <Navbar user={user} />
                <ToastContainer />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
