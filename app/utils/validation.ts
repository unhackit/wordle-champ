export function validateUsername(username: unknown) {
    if (typeof username !== "string" || username.length < 3) {
        return `Username must be at least 3 characters long`;
    }
}

export function validatePassword(password: unknown) {
    if (typeof password !== "string" || password.length < 6) {
        return `Passwords must be at least 6 characters long`;
    }
}

export function validateCountry(country: unknown) {
    if (typeof country !== "string" || country.length < 4) {
        return `Please select a valid country`;
    }
}
