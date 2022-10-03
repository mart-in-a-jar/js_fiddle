// https://twiliodeved.github.io/message-segment-calculator/
import { SegmentedMessage } from "sms-segments-calculator";

const textInput = document.getElementById("sms-body");
const encodingOutput = document.getElementById("encoding");
const segmentOutput = document.getElementById("segments");
const priceOutput = document.getElementById("price");
const changeRate = 10.83;
const smsPrice = 0.062; // $

let smsBody;
let segmentedMessage;

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
    priceOutput.textContent =
        `${Math.round(price.priceNO * 100) / 100}kr / $${Math.round(price.priceUS * 100) / 100}`;
    console.log(price);
});
