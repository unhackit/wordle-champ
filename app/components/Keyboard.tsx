const letters = "Q,W,E,R,T,Y,U,I,O,P A,S,D,F,G,H,J,K,L Enter,Z,X,C,V,B,N,M,CLR";

interface Props {
    addLetter: (arg0: string) => void;
    keyStyle: {
        [key: string]: string;
    };
}

const Keyboard = (props: Props) => {
    return (
        <div className="p-2">
            {letters.split(" ").map((row) => (
                <div className="flex items-center justify-center" key={row}>
                    {row.split(",").map((letter) => {
                        return (
                            <span
                                onClick={() => props.addLetter(letter)}
                                className={`border-2 border-gray-300 rounded-sm w-14 h-12 flex items-center justify-center mx-1 my-2 cursor-pointer ${props.keyStyle[letter]}`}
                                key={letter}
                            >
                                {letter === "CLR" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                                        />
                                    </svg>
                                ) : (
                                    letter
                                )}
                            </span>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;
