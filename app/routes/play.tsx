import { useState } from "react";
import { ActionFunction, Link, LoaderFunction, Outlet, redirect, useLoaderData, useSubmit } from "remix";
import type { Words } from "@prisma/client";
import { db } from "~/utils/db.server";
import Keyboard from "~/components/Keyboard";
import { keyStyle, Response } from "~/types/types";
import { updateScore } from "~/utils/queries.server";
import { getUserId } from "~/utils/session.server";
import { toastHandler } from "~/utils/toastHandler";

type LoaderData = { words: Array<Words> };
export let loader: LoaderFunction = async ({ request }) => {
    //TODO => return only one random word from DB
    //TODO => REMOVE number from word schema
    const data: LoaderData = {
        words: await db.words.findMany(),
    };

    let formattedWords = data.words.map((word) => word.word);

    let random = Math.floor(Math.random() * 9337);
    console.log(formattedWords.length);
    let randomWord = formattedWords[random].toUpperCase();

    console.log(randomWord);
    return {
        allWords: formattedWords,
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

    const getCurrentWord = () => {
        return responses[currentRow].map((elem) => elem.letter).join("");
    };

    const addLetter = (letter: string) => {
        let responseTuple = [...responses];
        let rowWord = getCurrentWord();

        if (letter.toLowerCase() === "enter") {
            saveEntry();
            return;
        }

        if (letter.toLowerCase() === "clr") {
            setWrongGuess(false);
            removeLetter();
            return;
        }

        let validated = validateEntry(rowWord);
        if (!validated) return;

        responseTuple[currentRow][rowWord.length].letter = letter;
        setResponses(responseTuple);
    };

    const removeLetter = () => {
        let word = getCurrentWord();
        if (word.length === 0) {
            return;
        }
        let responseTuple = [...responses];
        responseTuple[currentRow][word.length - 1].letter = "";
        setResponses(responseTuple);
    };

    const validateEntry = (rowWord: string) => {
        if (rowWord.length === 5) {
            return false;
        }
        return true;
    };

    const saveEntry = () => {
        let validated = saveResponse();
        if (!validated) {
            return;
        }
        setCurrentRow((c) => c + 1);
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
        const keys: keyStyle = {};

        if (currentWord.length < 5) {
            return false;
        }

        if (!checkDictionary(currentWord)) return false;

        for (let i = 0; i < wordToGuess.length; i++) {
            let word = responseTuple[currentRow];

            if (wordToGuess.includes(word[i].letter) && word[i].letter !== wordToGuess[i]) {
                keys[word[i].letter] = "text-white bg-yellow-600";
                word[i].className = "text-white bg-yellow-600";
            } else if (word[i].letter === wordToGuess[i]) {
                keys[word[i].letter] = "text-white bg-green-800";
                word[i].className = "text-white bg-green-800";
            } else {
                word[i].className = "text-white bg-gray-600";
                keys[word[i].letter] = "text-white bg-gray-900";
            }
        }

        markKeys(keys);
        setResponses(responseTuple);
        //check if word matches word
        let gameStatus = currentWord === wordToGuess ? "win" : currentRow === 5 ? "lose" : null;
        if (gameStatus) {
            endGame(gameStatus);
        }

        return true;
    };

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
                    <Keyboard addLetter={addLetter} keyStyle={keyStyle} />
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
