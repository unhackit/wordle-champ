import { createCookie } from "remix";

export const userPrefs = createCookie("user-prefs", {
    maxAge: 604_800, // one week
});
