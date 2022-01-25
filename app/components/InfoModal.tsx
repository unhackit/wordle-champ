type InfoProps = {
    setInfoModal: (arg0: boolean) => void;
};

const InfoModal = ({ setInfoModal }: InfoProps) => {
    return (
        <div className="w-screen h-screen bg-black bg-opacity-80 fixed z-50 top-0 left-0 flex items-center justify-center">
            <div className="w-11/12 lg:w-1/3 min-h-1/3 bg-blackbg rounded-xl  px-5 py-6 flex items-center relative justify-center text-black">
                <i className="absolute top-4 right-4 text-4xl font-bold text-gray-200 cursor-pointer" onClick={() => setInfoModal(false)}>
                    {"✗"}
                </i>

                <div className="text-center">
                    <p className="text-xl md:text-2xl lg:text-4xl font-bold m-0 p-0 text-white">How To Play</p>
                    <p className="text-white my-6 text-md md:text-lg">You MUST guess the correct word in 6 tries</p>
                    <p className="text-white my-6 text-md md:text-lg">
                        Each word contains 5 letters which you should input with the onscreen keyboard, after which you must hit the enter
                        key
                    </p>
                    <p className="text-white my-6 text-md md:text-lg">
                        You will start at 6 points, and a point will get deducted for every word you guess wrongly
                    </p>
                    <p className="my-4 text-lg md:text-2xl text-white font-bold">HINTS</p>
                    <div className="flex items-center gap-2 mb-4">
                        <div
                            className={`border-gray-300 border-2 rounded-sm p-4 font-bold text-3xl w-14 h-12 short:h-10 flex items-center justify-center text-white bg-green-800`}
                        >
                            W
                        </div>
                        <p className="text-white">The letter is correct and in the right position</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <div
                            className={`border-gray-300 border-2 rounded-sm p-4 font-bold text-3xl w-14 h-12 short:h-10 flex items-center justify-center text-white bg-yellow-600`}
                        >
                            W
                        </div>
                        <p className="text-white">The letter is correct and in the wrong position</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <div
                            className={`border-gray-300 border-2 rounded-sm p-4 font-bold text-3xl w-14 h-12 short:h-10 flex items-center justify-center text-white bg-gray-900`}
                        >
                            W
                        </div>
                        <p className="text-white">The letter is NOT part of the word</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
