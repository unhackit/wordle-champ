module.exports = {
    mode: "jit",
    purge: ["app/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                courgette: ['"Courgette"', "cursive"],
            },
            animation: {
                shake: "shake 1.2s cubic-bezier(.36,.07,.19,.97) both",
            },
            keyframes: {
                shake: {
                    "10%, 90%": {
                        transform: "translate3d(-2px, 0, 0)",
                    },
                    "20%, 80%": {
                        transform: "translate3d(3px, 0, 0)",
                    },
                    "30%, 50%, 70%": {
                        transform: "translate3d(-5px, 0, 0)",
                    },
                    "40%, 60%": {
                        transform: "translate3d(5px, 0, 0)",
                    },
                },
            },
            colors: {
                blackbg: "#1F2028",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
