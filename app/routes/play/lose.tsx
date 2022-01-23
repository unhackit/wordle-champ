import Modal from "~/components/Modal";

const Lose = () => {
    return (
        <Modal icon={"✗"} title={"SORRY!!"} message={"You lost this round! would you retry?"} iconStyle={"text-red-600 text-8xl m-0 p-0"} />
    );
};

export default Lose;
