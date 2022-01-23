import { Link } from "remix";
import { ModalProps } from "~/types/types";

const Modal = ({ icon, title, message, iconStyle }: ModalProps) => {
    return (
        <div className="w-screen h-screen bg-black bg-opacity-80 fixed z-20 top-0 left-0 flex items-center justify-center">
            <div className="w-11/12 lg:w-1/3 h-1/3 bg-white rounded-xl  px-5 flex items-center relative justify-center text-black">
                <div className="text-center">
                    <i className={iconStyle}>{icon}</i>
                    <p className="text-4xl font-bold m-0 p-0">{title}</p>
                    <p className="text-xl my-4 ">{message}</p>
                    <div className="flex items-center justify-around mt-8">
                        <Link to="/play" reloadDocument className="text-blue-600 hover:underline text-lg">
                            Restart Game
                        </Link>
                        <Link to="/leaderboard" reloadDocument className="text-blue-600 hover:underline text-lg">
                            View Leaderboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
