import { ActionFunction, Form, json, Link } from "remix";
import { ActionData } from "~/types/types";
import { createUserSession, login } from "~/utils/session.server";
import { validatePassword, validateUsername } from "~/utils/validation";

const badRequest = (data: ActionData) => json(data, { status: 400 });

export let action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");

    if (typeof username !== "string" || typeof password !== "string") {
        return badRequest({
            formError: `Form not submitted correctly.`,
        });
    }

    const fields = { username, password };
    const fieldErrors = {
        username: validateUsername(username),
        password: validatePassword(password),
    };

    if (Object.values(fieldErrors).some(Boolean)) return badRequest({ fieldErrors, fields });

    const user = await login({ username, password });
    console.log({ user });
    if (!user) {
        return {
            fields,
            formError: `Username/Password combination is incorrect`,
        };
    }
    return createUserSession(user.id, "/play");
};

const Login = () => {
    return (
        <>
            <div className="bg-blackbg h-screen w-screen">
                <div className="h-full w-full flex items-center justify-center">
                    <div className="bg-white w-11/12 md:w-2/4 lg:w-1/3 min-h-3/5 p-8 short:h-3/4 rounded-lg flex items-center justify-center">
                        <Form method="post" className="w-full" autoComplete="off">
                            <legend className="text-xl font-bold">Log in</legend>
                            <div className="my-6">
                                <label className="block text-xl">Username</label>
                                <input
                                    autoComplete="off"
                                    autoCorrect="off"
                                    name="username"
                                    placeholder="Enter Username"
                                    className="p-4 rounded-md w-full border-blackbg border-solid border-2 bg-transparent text-lg"
                                />
                            </div>
                            <div className="my-6">
                                <label className="block text-xl">Password</label>
                                <input
                                    name="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    className="p-4 rounded-md w-full border-blackbg border-solid border-2 bg-transparent text-lg"
                                />
                            </div>
                            <div className="text-right">
                                <button className="bg-sky-500 px-5 py-3 rounded-md text-white text-center cursor-pointer w-2/4 text-sm md:text-lg">
                                    Submit
                                </button>
                            </div>
                            <p className="text-center py-6">
                                Don't have an account ?{" "}
                                <Link to="/register" className="text-sky-500 underline cursor-pointer">
                                    Register
                                </Link>
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
