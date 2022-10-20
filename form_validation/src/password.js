import { styleError, styleValid } from "./styling";

function passCheckInline(pass, confirm, message, confirmMessage) {
    if (pass.validity.patternMismatch) {
        if (pass.value.length < 8) {
            message.textContent = "Min 8 characters";
            styleError(pass, message);
            pass.classList.remove("error");
        }
        const regSpecialChar = /[@$!%*?&]/;
        if (!regSpecialChar.test(pass.value)) {
            message.textContent = "Min one special character (@$!%*?&)";
            styleError(pass, message);
            pass.classList.remove("error");
        }
        const regUpperCase = /[A-Z]/;
        if (!regUpperCase.test(pass.value)) {
            message.textContent = "Min one uppercase letter";
            styleError(pass, message);
            pass.classList.remove("error");
        }
        const regLowerCase = /[a-z]/;
        if (!regLowerCase.test(pass.value)) {
            message.textContent = "Min one lowercase letter";
            styleError(pass, message);
            pass.classList.remove("error");
        }
        const regNumber = /\d/;
        if (!regNumber.test(pass.value)) {
            message.textContent = "Min one number";
            styleError(pass, message);
            pass.classList.remove("error");
        }
    } else if (pass.value === "") {
        message.textContent = "";
    } else {
        styleValid(pass, message);
    }
    if (confirm.value && pass.value != confirm.value) {
        styleError(confirm, confirmMessage);
        confirm.classList.remove("error");
        confirmMessage.textContent = "The passwords do not match";
    } else {
        confirmMessage.textContent = "";
    }
    displayEyeIcon(pass);
}

function passConfirmCheckInline(pass, confirm, message) {
    if (
        confirm.value === pass.value &&
        passCheck(pass, document.querySelector(".message.pass"))
    ) {
        styleValid(confirm, message);
    } else {
        message.textContent = "";
    }
    displayEyeIcon(confirm);
}

function passCheck(pass, message) {
    if (pass.validity.patternMismatch) {
        styleError(pass, message);
        message.textContent = "Password does not meet the criteria";
        // if (pass.value.length < 8) {
        //     message.textContent = "Min 8 characters";
        // }
        // const regUpperCase = /[A-Z]/;
        // if (!regUpperCase.test(pass.value)) {
        //     message.textContent = "Min one uppercase letter";
        // }
        // const regLowerCase = /[a-z]/;
        // if (!regLowerCase.test(pass.value)) {
        //     message.textContent = "Min one lowercase letter";
        // }
        // const regNumber = /\d/;
        // if (!regNumber.test(pass.value)) {
        //     message.textContent = "Min one number";
        // }
        // const regSpecialChar = /[@$!%*?&]/;
        // if (!regSpecialChar.test(pass.value)) {
        //     message.textContent = "Min one special character (@$!%*?&)";
        // }
        return false;
    } else if (pass.value === "") {
        styleError(pass, message);
        message.textContent = "Required";
        return false;
    } else {
        styleValid(pass, message);
        return true;
    }
}

function passConfirmCheck(pass, confirm, message, passMessage) {
    if (confirm.value && confirm.value === pass.value) {
        if (passCheck(pass, passMessage)) {
            styleValid(confirm, message);
            return true;
        } else {
            styleError(confirm, message);
            message.textContent = "";
            return false;
        }
    } else if (!confirm.value) {
        styleError(confirm, message);
        message.textContent = "Required";
    } else {
        styleError(confirm, message);
        message.textContent = "The passwords do not match";
        return false;
    }
}

function displayEyeIcon(input) {
    const eyeWrapper = input.nextElementSibling;
    if (input.value) {
        if (!eyeWrapper.classList.contains("active")) {
            eyeWrapper.classList.add("active");
        }
    } else {
        if (eyeWrapper.classList.contains("active")) {
            eyeWrapper.classList.remove("active");
            if (input.type === "text") {
                const eye = eyeWrapper.querySelector(".fa-eye");
                const eyeClosed = eyeWrapper.querySelector(".fa-eye-slash");
                input.type = "password";
                eye.classList.add("active");
                eyeClosed.classList.remove("active");
            }
        }
    }
}

export { passCheckInline, passConfirmCheckInline, passCheck, passConfirmCheck };

document.querySelector(".pass .icon").addEventListener("click", showPassword);

function showPassword() {
    const input = this.previousElementSibling;
    const iconOpen = this.querySelector(".fa-eye");
    const iconClosed = this.querySelector(".fa-eye-slash");

    input.type = input.type === "password" ? "text" : "password";
    iconOpen.classList.toggle("active");
    iconClosed.classList.toggle("active");
    input.focus();
}

// Only show when holding
document
    .querySelector(".pass-confirm .icon")
    .addEventListener("mousedown", holdToShowPassword);

function holdToShowPassword(e) {
    const input = this.previousElementSibling;
    const iconOpen = this.querySelector(".fa-eye");
    const iconClosed = this.querySelector(".fa-eye-slash");
    if (e.buttons === 1) {
        input.type = "text";
        iconOpen.classList.remove("active");
        iconClosed.classList.add("active");

        document
            .querySelector(".pass-confirm .icon")
            .addEventListener("mouseup", hidePassword);

        document.addEventListener("mousemove", hidePasswordOnDrag);
    }

    function hidePassword() {
        const iconOpen = this.querySelector(".fa-eye");
        const iconClosed = this.querySelector(".fa-eye-slash");
        iconOpen.classList.add("active");
        iconClosed.classList.remove("active");
        input.type = "password";
        document.removeEventListener("mousemove", hidePasswordOnDrag);
        input.focus();
    }

    function hidePasswordOnDrag(e) {
        const iconOpen = input.nextElementSibling.querySelector(".fa-eye");
        const iconClosed =
            input.nextElementSibling.querySelector(".fa-eye-slash");
        if (e.target.nodeName != "svg" && e.target.nodeName != "path") {
            iconOpen.classList.add("active");
            iconClosed.classList.remove("active");
            input.type = "password";
            document.removeEventListener("mousemove", hidePasswordOnDrag);
            input.focus();
        }
    }
}
