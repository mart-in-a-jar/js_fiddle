function styleValid(input, message) {
    input.classList.add("valid");
    input.classList.remove("error");
    message.classList.add("valid");
    message.classList.remove("error");
    message.innerHTML = "&#x2714;";
}

function styleError(input, message) {
    input.classList.remove("valid");
    message.classList.remove("valid");
    input.classList.add("error");
    message.classList.add("error");
}

export { styleValid, styleError };
