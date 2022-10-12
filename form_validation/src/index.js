import { telephoneInput, numberCheck, numberCheckInline } from "./telephone";

const telInput = document.querySelector("#tel");
const telMessage = document.querySelector(".message.telephone");

const iti = telephoneInput(telInput);
function checkNumber() {
    return numberCheck(iti, telInput, telMessage);
}
function checkNumberInline() {
    return numberCheckInline(iti, telInput, telMessage);
}

const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", (e) => {
    if (!checkNumber()) {
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

telInput.addEventListener("input", () => {
    checkNumberInline();
});

telInput.addEventListener("countrychange", () => {
    checkNumberInline();
});

telInput.addEventListener("blur", () => {
    checkNumber();
});
