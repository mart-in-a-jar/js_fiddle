import { telephoneInput } from "./telephone";

const telInput = document.querySelector("#tel");
const telMessage = document.querySelector(".message.telephone");

const iti = telephoneInput(telInput);
const flagContainer = document.querySelector(".iti__flag-container");

const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", (e) => {
    if (!numberCheck()) {
        e.preventDefault();
        console.log("noe feil");
    } else {
        console.log("alt ok");
    }
    const number = iti.getNumber();
    console.log(number);

    if (iti.getValidationError()) {
        console.log("error " + iti.getValidationError());
        console.log(intlTelInputUtils.validationError);
    }
});

function numberCheckInline() {
    const error = iti.getValidationError();
    if (iti.isValidNumber()) {
        telInput.classList.add("valid");
        telInput.classList.remove("error");
        telMessage.classList.add("valid");
        telMessage.classList.remove("error");
        telMessage.innerHTML = "&#x2714;";
        return true;
    } else {
        telInput.classList.remove("valid");
        telMessage.classList.remove("valid");
        telInput.classList.add("error");
        telMessage.classList.add("error");
        if (error === 3) {
            telMessage.textContent = "Number is too long";
        } else {
            telMessage.textContent = "";
            telInput.classList.remove("error");
        }
        return false;
    }
}

function numberCheck() {
    const error = iti.getValidationError();
    if (iti.isValidNumber()) {
        telInput.classList.add("valid");
        telInput.classList.remove("error");
        telMessage.classList.add("valid");
        telMessage.classList.remove("error");
        telMessage.innerHTML = "&#x2714;";
        return true;
    } else {
        telInput.classList.remove("valid");
        telMessage.classList.remove("valid");
        telInput.classList.add("error");
        telMessage.classList.add("error");
        switch (error) {
            case 0:
                telMessage.textContent = "Not a valid number";
                break;
            case 1:
                telMessage.textContent = "Choose a country";
                break;
            case 2:
                telMessage.textContent = "Number is too short";
                break;
            case 3:
                telMessage.textContent = "Number is too long";
                break;
            case -99:
                telMessage.textContent = "Required";
                break;
            default:
                telMessage.textContent = "Something is not right";
                break;
        }
        return false;
    }
}

telInput.addEventListener("input", () => {
    numberCheckInline();
});

telInput.addEventListener("countrychange", () => {
    numberCheckInline();
});

telInput.addEventListener("blur", () => {
    numberCheck();
});
