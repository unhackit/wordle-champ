import { MetaFunction } from "@remix-run/react/routeModules";
import { LoaderFunction, useLoaderData, Link } from "remix";
import { getUser } from "~/utils/session.server";

export const meta: MetaFunction = () => {
    return {
        title: "WORDLE CHAMP - Built with Remix!",
        description: "Do you have what it takes to compete globally? Play now!",
    };
};

export let loader: LoaderFunction = async ({ request }) => {
    let user = await getUser(request);
    console.log(user);

    return user;
};

export default function Index() {
    const user = useLoaderData();
    return (
        <>
            <div className="bg-blackbg h-screen w-screen">
                <div className="flex items-center justify-center h-full w-full">
                    <div>
                        <h3 className="text-white text-3xl md:text-5xl font-bold text-center">WORDLE CHAMP</h3>
                        {!user ? (
                            <p className="text-white text-lg text-center mt-4 break-words">
                                Do you have what it takes to compete globally? <br />
                                <Link to="/register" className="text-sky-400 cursor-pointer">
                                    Sign up
                                </Link>{" "}
                                to appear on the global leaderboard
                            </p>
                        ) : (
                            <p className="text-white text-lg text-center mt-4">
                                Welcome <span className="text-blue-400">{user.username}</span>, you current have {user.score} points. You
                                can do better!
                            </p>
                        )}

                        <div className="my-8 flex justify-evenly">
                            <Link
                                to="/play"
                                className="bg-blue-600 text-white text-md md:text-xl w-1/3 rounded-lg py-3 text-center cursor-pointer"
                            >
                                Play
                            </Link>
                            <Link
                                to="/leaderboard"
                                className="bg-blue-600 text-white text-md md:text-xl w-1/3 rounded-lg py-3 text-center cursor-pointer"
                            >
                                Leaderboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
