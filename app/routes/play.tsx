import { isFullRow, validateEntry } from "~/helpers/validateEntry";
import { useEffect, useRef, useState } from "react";
import { ActionFunction, Link, LoaderFunction, Outlet, redirect, useLoaderData, useSubmit } from "remix";
import Keyboard from "~/components/Keyboard";
import { keyStyle, Response } from "~/types/types";
import { updateScore } from "~/utils/queries.server";
import { getUserId } from "~/utils/session.server";
import { toastHandler } from "~/utils/toastHandler";
import words from "~/words";

export let loader: LoaderFunction = async ({ request }) => {
    let random = Math.floor(Math.random() * 9337);
    let randomWord = words[random].toUpperCase();

    console.log(randomWord);
    return {
        allWords: words,
        wordToGuess: randomWord,
        initialResponse: Array.from({ length: 6 }, (e) =>
            Array.from({ length: 5 }, () => ({ letter: "", className: "text-white bg-blue" }))
        ),
    };
};

export let action: ActionFunction = async ({ request }) => {
    const userId = await getUserId(request);
    let data = await request.formData();
    let status = data.get("status");
    let score = data.get("score");
    let redirectTo = "";

    if (status === "win" && score) {
        if (userId) {
            let updatedScore = await updateScore(userId, +score);
            if (!updatedScore) {
                //throw error here
                return;
            }
        }
        redirectTo = "/play/win";
    }

    if (status === "lose") {
        redirectTo = "/play/lose";
    }

    return redirect(redirectTo);
};

const Play = () => {
    const { allWords, wordToGuess, initialResponse } = useLoaderData();
    const submit = useSubmit();
    const [currentRow, setCurrentRow] = useState(0);
    const [responses, setResponses] = useState<Response[][]>(initialResponse);
    const [wrongGuess, setWrongGuess] = useState<boolean>(false);
    const [keyStyle, setKeyStyle] = useState<keyStyle>({});
    const currentRowRef = useRef(currentRow);

    const getCurrentWord = () => {
        return responses[currentRowRef.current].map((elem) => elem.letter).join("");
    };

    const handleEntry = (letter: string) => {
        let entry = validateEntry(letter);
        if (!entry) {
            return;
        }

        let responseTuple = [...responses];
        let rowWord = getCurrentWord();

        if (entry === "ENTER") {
            validateRow();
            return;
        }

        if (entry === "BACKSPACE") {
            setWrongGuess(false);
            removeLetter();
            return;
        }

        let fullRow = isFullRow(rowWord, 5);

        if (fullRow) return;

        responseTuple[currentRowRef.current][rowWord.length].letter = entry;
        setResponses(responseTuple);
    };

    const removeLetter = () => {
        let word = getCurrentWord();
        if (!word.length) return;
        let responseTuple = [...responses];
        responseTuple[currentRowRef.current][word.length - 1].letter = "";
        setResponses(responseTuple);
    };

    const validateRow = () => {
        let word = getCurrentWord();
        let fullRow = isFullRow(word, 5);
        if (!fullRow) {
            toastHandler("You must enter a 5 letter word", 1000);
            return;
        }
        saveResponse();
    };

    const endGame = async (status: string) => {
        setCurrentRow(0);
        setResponses(Array.from({ length: 6 }, (e) => Array.from({ length: 5 }, () => ({ letter: "", className: "text-white bg-blue" }))));
        setKeyStyle({});
        if (status === "win") {
            submit({ status, score: String(6 - currentRow) }, { method: "post" });
        } else {
            submit({ status }, { method: "post" });
        }
    };

    const markKeys = (obj: keyStyle) => {
        setKeyStyle({ ...keyStyle, ...obj });
    };

    const checkDictionary = (word: string) => {
        if (!allWords.includes(word.toLowerCase())) {
            toastHandler("Word not in dictionary!", 2000);
            setWrongGuess(true);
            return false;
        }
        return true;
    };

    const saveResponse = () => {
        let responseTuple = [...responses];
        let currentWord = getCurrentWord();
        let wordToGuessArray = wordToGuess.split("");
        const keys: keyStyle = {};

        if (!checkDictionary(currentWord)) return false;

        for (let i = 0; i < wordToGuess.length; i++) {
            let word = responseTuple[currentRowRef.current];

            if (word[i].letter === wordToGuess[i]) {
                keys[word[i].letter] = "text-white bg-green-800";
                word[i].className = "text-white bg-green-800";
                wordToGuessArray.splice(i, 1);
            } else if (wordToGuessArray.includes(word[i].letter) && word[i].letter !== wordToGuessArray[i]) {
                keys[word[i].letter] = "text-white bg-yellow-600";
                word[i].className = "text-white bg-yellow-600";
                wordToGuessArray.splice(wordToGuess.indexOf(word[i].letter), 1, "");
            } else {
                word[i].className = "text-white bg-gray-600";
                keys[word[i].letter] = "text-white bg-gray-900";
            }
        }

        markKeys(keys);
        setResponses(responseTuple);
        currentRowRef.current = currentRowRef.current + 1;
        setCurrentRow((c) => c + 1);
        let gameStatus = currentWord === wordToGuess ? "win" : currentRowRef.current === 6 ? "lose" : null;
        if (gameStatus) {
            endGame(gameStatus);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", (e) => handleEntry(e.key));
        return () => {
            document.removeEventListener("keydown", (e) => handleEntry(e.key));
        };
    }, []);

    return (
        <>
            <div className="bg-blackbg h-screen w-screen">
                <div className="h-2/3 w-full flex items-center justify-center">
                    <div>
                        <div className={`grid gap-3 grid-cols-5 grid-rows-5 p-3 ${wrongGuess ? "animate-shake" : null}`}>
                            {responses.map((response, idx) => {
                                return response.map((letter, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={`border-gray-300 border-2 rounded-sm p-4 font-bold text-3xl w-14 h-12 short:h-10 flex items-center justify-center ${letter.className}`}
                                        >
                                            {letter.letter}
                                        </div>
                                    );
                                });
                            })}
                        </div>
                    </div>
                </div>

                <div className=" w-full absolute bottom-8">
                    <Keyboard handleEntry={handleEntry} keyStyle={keyStyle} />
                </div>
                <Outlet />
            </div>
        </>
    );
};

export function ErrorBoundary() {
    return (
        <div className="w-screen h-screen bg-blackbg flex items-center justify-center">
            <div className="text-center">
                <p className="text-white font-bold text-4xl">An error ?! I knew software engineering was not my thing! </p>
                <Link className="text-blue-600 text-2xl underline mt-4 block" to="/play">
                    Go Back
                </Link>
            </div>
        </div>
    );
}

export default Play;
