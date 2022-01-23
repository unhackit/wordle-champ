import Modal from "~/components/Modal";

const Win = () => {
    return (
        <Modal
            icon={"✓"}
            title={"YIPEE!!"}
            message={"Congratulations! You have WON the game!"}
            iconStyle={"text-green-600 text-8xl m-0 p-0"}
        />
    );
};

export default Win;
