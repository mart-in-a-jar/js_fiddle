const ceasarCipher = (string, mode, n = 1) => {
    if (
        typeof string !== "string" ||
        (mode !== "encipher" && mode !== "decipher") ||
        isNaN(n)
    ) {
        throw new Error("Invalid parameters");
    }
    function shiftCharacter(char) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        char = char.toLowerCase();
        if (mode === "encipher") {
            return alphabet[(alphabet.search(char) + n) % 26];
        } else if (mode === "decipher") {
            return alphabet[(alphabet.search(char) - n + 26 * n) % 26];
        }
    }

    function isUpperCase(char) {
        return char === char.toUpperCase();
    }

    let re = /[a-zA-Z]/;

    let newString = "";

    for (let char of string) {
        if (re.test(char)) {
            let newChar = shiftCharacter(char);
            if (isUpperCase(char)) newChar = newChar.toUpperCase();
            newString += newChar;
        } else {
            newString += char;
        }
    }

    return newString;
};

export { ceasarCipher };
