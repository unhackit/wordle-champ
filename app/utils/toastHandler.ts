import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastHandler = (message = "🦄 Wow so easy!", time = 5000) => {
    return toast(message, {
        position: "top-center",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
