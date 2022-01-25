import { useEffect, useState } from "react";
import { Form, Link } from "remix";
import { User } from "~/types/types";
import InfoModal from "./InfoModal";

type NavbarProps = {
    user: User;
};

const Navbar = ({ user }: NavbarProps) => {
    const [navbar, setNavbar] = useState<string | null>("unset");
    const [infoModal, setInfoModal] = useState<string | null>(null);

    useEffect(() => {
        toggleNavbar();
        if (!localStorage.getItem("infoModal")) {
            setInfoModal("show");
            localStorage.setItem("infoModal", "show");
            return;
        }
    }, []);

    const toggleNavbar = () => {
        if (navbar === "unset") {
            setNavbar(null);
            return;
        }
        if (navbar) {
            localStorage.removeItem("isNavbar");
            setNavbar(null);
        } else {
            setNavbar("show");
            localStorage.setItem("isNavbar", "show");
        }
    };

    const toggleInfoModal = () => {
        if (infoModal) {
            setInfoModal(null);
        } else {
            setInfoModal("show");
        }
    };

    return (
        <>
            <div className="px-4 py-3 fixed top-0 w-full z-80 bg-blackbg bg-opacity-90">
                <div className="flex justify-between">
                    <Link to="/" className="text-white font-courgette text-3xl font-bold">
                        Wordle Champ
                    </Link>
                    <div className="flex gap-4 items-center">
                        <i className="text-white font-bold text-xl cursor-pointer" onClick={() => toggleInfoModal()}>
                            ⓘ
                        </i>
                        <div className="cursor-pointer" onClick={() => toggleNavbar()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill={"#fff"}
                                viewBox="0 0 24 24"
                                stroke={"#fff"}
                                onClick={() => toggleNavbar()}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`w-8/12 md:w-2/4 lg:1/4 xl:w-1/5 h-full fixed top-0 left-0 bg-gray-700 z-30 py-3 px-4 transition-opacity duration-300 ${
                    navbar ? "opacity-100" : "opacity-0 -z-10"
                }`}
            >
                <Link to="/" reloadDocument className="text-white font-courgette text-3xl font-bold">
                    Wordle Champ
                </Link>
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
                                to="/versus"
                            >
                                1 vs 1
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
            {infoModal && <InfoModal toggleInfoModal={toggleInfoModal} />}
        </>
    );
};

export default Navbar;
