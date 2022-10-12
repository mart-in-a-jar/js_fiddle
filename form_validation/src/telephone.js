import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";


const telephoneInput = (element) => {

    return intlTelInput(element, {
        utilsScript: "../node_modules/intl-tel-input/build/js/utils.js",
        preferredCountries: [
            "no"
        ]
    });

}


function numberCheckInline(instance, input, message) {
    const error = instance.getValidationError();
    if (instance.isValidNumber()) {
        input.classList.add("valid");
        input.classList.remove("error");
        message.classList.add("valid");
        message.classList.remove("error");
        message.innerHTML = "&#x2714;";
        return true;
    } else {
        input.classList.remove("valid");
        message.classList.remove("valid");
        input.classList.add("error");
        message.classList.add("error");
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
        input.classList.add("valid");
        input.classList.remove("error");
        message.classList.add("valid");
        message.classList.remove("error");
        message.innerHTML = "&#x2714;";
        return true;
    } else {
        input.classList.remove("valid");
        message.classList.remove("valid");
        input.classList.add("error");
        message.classList.add("error");
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


export { telephoneInput, numberCheck, numberCheckInline }