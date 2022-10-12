import { styleError, styleValid } from "./styling";

function emailCheck(input, message) {
    if (input.validity.valid) {
        styleValid(input, message);
        return true;
    } else {
        styleError(input, message);
        if (input.value.trim() === "") {
            message.textContent = "Required";
        } else if (input.validity.typeMismatch) {
            message.textContent = "Not a valid email address";
        }
    }
}

function emailCheckInline(input, message) {
    if (input.validity.valid) {
        styleValid(input, message);
    } else {
        styleError(input, message);
        message.textContent = "";
        input.classList.remove("error");
    }
}

export { emailCheck, emailCheckInline };
