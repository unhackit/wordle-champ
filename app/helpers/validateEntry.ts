import words from "~/words";

const ALPHABETS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "BACKSPACE",
    "ENTER",
];

export const validateEntry = (letter: string) => {
    if (!letter) {
        return false;
    }

    if (!ALPHABETS.includes(letter.toUpperCase())) {
        return false;
    }

    return letter.toUpperCase();
};

export const isFullRow = (word: string, length: number) => {
    if (!word || !word.length) {
        return false;
    }
    return word.length === length;
};
