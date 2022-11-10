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
            if (response.status === 400) {
                return {
                    status: "failed",
                    error_message: data.error.message,
                };
            }
            throw new Error("Http request failed");
        }
        return {
            status: "success",
            url: data.data[0].url,
        };
    } catch (error) {
        console.error("Something went wrong: ", error, error.data);
    }
}

const image = document.querySelector("img");
const searchField = document.querySelector("input");
const seachButton = document.querySelector("button");

async function placeImage(prompt) {
    document.querySelector(".error").textContent = "";
    image.src = "";
    document.querySelector(".img-placeholder").style.display = "block";
    let response = await generateImage(prompt, 1, "1024x1024");
    if (response.status === "failed") {
        document.querySelector(".error").textContent = response.error_message;
    } else if (response.status === "success") {
        image.src = response.url;
    }
    document.querySelector(".img-placeholder").style.display = "none";
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
