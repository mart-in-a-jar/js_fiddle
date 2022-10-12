import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { styleError, styleValid } from "./styling";

const telephoneInput = (element) => {
    return intlTelInput(element, {
        utilsScript: "../node_modules/intl-tel-input/build/js/utils.js",
        preferredCountries: ["no"],
    });
};

function numberCheckInline(instance, input, message) {
    const error = instance.getValidationError();
    if (instance.isValidNumber()) {
        styleValid(input, message);
        return true;
    } else {
        styleError(input, message);
        if (error === 3) {
            message.textContent = "Number is too long";
        } else {
            message.textContent = "";
            input.classList.remove("error");
        }
        return false;
    }
}

function numberCheck(instance, input, message) {
    const error = instance.getValidationError();
    if (instance.isValidNumber()) {
        styleValid(input, message);
        return true;
    } else {
        styleError(input, message);
        switch (error) {
            case 0:
                message.textContent = "Not a valid number";
                break;
            case 1:
                message.textContent = "Choose a country";
                break;
            case 2:
                message.textContent = "Number is too short";
                break;
            case 3:
                message.textContent = "Number is too long";
                break;
            case 5:
                message.textContent = "Invalid length";
                break;
            case -99:
                message.textContent = "Required";
                break;
            default:
                message.textContent = "Something is not right";
                break;
        }
        return false;
    }
}

export { telephoneInput, numberCheck, numberCheckInline };
