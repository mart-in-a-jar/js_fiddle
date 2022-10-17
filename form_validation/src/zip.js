import { styleError, styleValid } from "./styling";

function zipCheckInline(input, message, country) {
    if (input.validity.patternMismatch) {
        if (input.value.slice(-1) != "-") {
            styleError(input, message);
            message.textContent = "Only numbers allowed";
        }
    } else {
        input.classList.remove("error");
        message.textContent = "";
        if (country.iso2 === "no") {
            const re = /^\d+$/;
            if (input.value.length > 4) {
                styleError(input, message);
                message.textContent = "Should be 4 digits";
            } else if (input.value && !re.test(input.value)) {
                styleError(input, message);
                message.textContent = "Only numbers allowed";
            } else {
                message.textContent = "";
                input.classList.remove("error");
            }
        }
    }
}

function zipCheck(input, message, country) {
    if (input.validity.patternMismatch) {
        styleError(input, message);
        message.textContent = "Only numbers allowed";
        return false;
    } else if (country.iso2 === "no" && input.value) {
        const re = /^\d+$/;
        if (input.value.length != 4) {
            styleError(input, message);
            message.textContent = "Should be 4 digits";
            return false;
        } else if (!re.test(input.value)) {
            styleError(input, message);
            message.textContent = "Only numbers allowed";
            return false;
        } else {
            styleValid(input, message);
            return true;
        }
    } else if (!input.value) {
        styleError(input, message);
        message.textContent = "Required";
        return false;
    } else {
        styleValid(input, message);
        return true;
    }
}

export { zipCheckInline, zipCheck };
