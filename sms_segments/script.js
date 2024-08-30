// https://twiliodeved.github.io/message-segment-calculator/
import { SegmentedMessage } from "sms-segments-calculator";

const textInput = document.getElementById("sms-body");
const encodingOutput = document.getElementById("encoding");
const segmentOutput = document.getElementById("segments");
const priceOutput = document.getElementById("price");
const img = document.querySelector(".woah");
let changeRate = 10.83;
const smsPrice = 0.0651; // $

let smsBody;
let segmentedMessage;

const getExchangerate = async () => {
    try {
        const res = await fetch(
            "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
        );
        const data = await res.json();
        changeRate = data.usd.nok;
        if (res.ok) {
            console.log(`Exchange rate: ${changeRate}`);
        }
    } catch (error) {
        console.error(error);
    }
};

getExchangerate();

function getPrice(segments) {
    const priceUS = segments * smsPrice;
    const priceNO = priceUS * changeRate;
    return { priceUS, priceNO };
}

textInput.addEventListener("input", () => {
    smsBody = textInput.value;
    segmentedMessage = new SegmentedMessage(smsBody);
    const numberOfSegments = segmentedMessage.segments.length;
    const price = getPrice(numberOfSegments);
    encodingOutput.textContent = segmentedMessage.encodingName;
    segmentOutput.textContent = numberOfSegments;
    priceOutput.textContent = `${Math.round(price.priceNO * 100) / 100}kr ($${Math.round(price.priceUS * 100) / 100})`;
    if (numberOfSegments > 1) {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
});
