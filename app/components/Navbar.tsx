import { useState } from "react";
import { Link } from "remix";
import { User } from "~/types/types";

type NavbarProps = {
    user: User;
};

const Navbar = ({ user }: NavbarProps) => {
    const [navbar, setNavbar] = useState<boolean>(false);

    return (
        <>
            <div className="px-4 py-3 fixed top-0 w-full">
                <div className="flex justify-between">
                    <p className="text-white font-courgette text-3xl font-bold">Wordle Champ</p>
                    <div className="cursor-pointer" onClick={() => setNavbar(!navbar)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill={"#fff"} viewBox="0 0 24 24" stroke={"#fff"}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
            </div>
            <div
                className={`w-8/12 md:w-2/4 lg:1/4 xl:w-1/5 h-full fixed top-0 left-0 bg-gray-700 z-30 py-3 px-4 transition-opacity duration-300 ${
                    navbar ? "opacity-100" : "opacity-0 -z-10"
                }`}
            >
                <p className="text-white font-courgette text-3xl font-bold">Wordle Champ</p>
                <div className="h-full w-full flex items-center">
                    <ul>
                        <li className="my-8">
                            <Link
                                reloadDocument
                                className="text-gray-200 cursor-pointer text-2xl hover:underline hover:text-sky-400 "
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="my-8">
                            <Link
                                reloadDocument
                                className="text-gray-200 cursor-pointer text-2xl hover:underline hover:text-sky-400"
                                to="/play"
                            >
                                Play
                            </Link>
                        </li>
                        <li className="my-8">
                            <Link
                                reloadDocument
                                className="text-gray-200 cursor-pointer text-2xl hover:underline hover:text-sky-400"
                                to="/leaderboard"
                            >
                                Leaderboard
                            </Link>
                        </li>
                        <li className="my-8">
                            <Link
                                reloadDocument
                                className="text-gray-200 cursor-pointer text-2xl hover:underline hover:text-sky-400"
                                to={user ? "/logout" : "/login"}
                            >
                                {user ? "Logout" : "Login"}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
