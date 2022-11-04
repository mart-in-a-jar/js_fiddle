import { api_key } from "./credentials.js";

const baseUrl = "https://api.openai.com/v1";
const headers = new Headers({
    Authorization: `Bearer ${api_key}`,
    "Content-type": "application/json",
});

async function generateImage(prompt, number, size) {
    const body = JSON.stringify({
        prompt: prompt,
        n: number,
        size: size,
    });
    const req = new Request(baseUrl + "/images/generations", {
        method: "POST",
        headers: headers,
        body: body,
    });
    try {
        const response = await fetch(req);
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Http request failed");
        }
        return data.data[0].url;
    } catch (error) {
        console.error("Something went wrong: ", error);
    }
}

const image = document.querySelector("img");
const searchField = document.querySelector("input");
const seachButton = document.querySelector("button");

async function placeImage(prompt) {
    image.src = "";
    image.src = await generateImage(prompt, 1, "1024x1024");
}

searchField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        placeImage(searchField.value);
        // searchField.select();
    }
});

seachButton.addEventListener("click", () => {
    if (searchField.value) {
        placeImage(searchField.value);
    } else {
        searchField.classList.add("warn");
        setTimeout(() => {
            searchField.classList.remove("warn");
        }, 800);
        searchField.focus();
    }
});
