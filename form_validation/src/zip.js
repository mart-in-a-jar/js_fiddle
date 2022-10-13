import { styleError } from "./styling";

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
            console.log(re.test(input.value));
            if (input.value.length > 4) {
                styleError(input, message);
                message.textContent = "Max 4 digits";
            } else if (!re.test(input.value)) {
                styleError(input, message);
                message.textContent = "Only numbers allowed";
            } else {
                message.textContent = "";
                input.classList.remove("error");
            }
        }
    }
}

// check on blur, submit and country change
function zipCheck(input, message, country) {

}

export { zipCheckInline, zipCheck };
