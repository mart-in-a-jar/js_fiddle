import { telephoneInput, numberCheck, numberCheckInline } from "./telephone";
import { emailCheck, emailCheckInline } from "./email";

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
    if (checkEmail() && checkNumber()) {
        console.log("alt ok");
    } else {
        e.preventDefault();
        console.log("noe feil");
    }
    const number = iti.getNumber();
    const countryCode = iti.getSelectedCountryData().dialCode;
    console.log("Landskode: " + countryCode);
    console.log("Nummer: " + number);
    console.log("Nummer clean: " + number.replace(`+${countryCode}`, ""));

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

const emailInput = document.querySelector("#email");
const emailMessage = document.querySelector(".message.email");

function checkEmail() {
    return emailCheck(emailInput, emailMessage);
}
function checkEmailInline() {
    return emailCheckInline(emailInput, emailMessage);
}

emailInput.addEventListener("blur", () => {
    checkEmail();
});
emailInput.addEventListener("input", () => {
    checkEmailInline();
});
