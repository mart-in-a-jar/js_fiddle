// https://twiliodeved.github.io/message-segment-calculator/
import { SegmentedMessage } from "sms-segments-calculator";

const textInput = document.getElementById("sms-body");
const amountInput = document.querySelector("#amount");
const encodingOutput = document.getElementById("encoding");
const segmentOutput = document.getElementById("segments");
const priceOutput = document.getElementById("price");
const totalPriceOutput = document.getElementById("price-total");
const img = document.querySelector(".woah");
let changeRate = 10.83;
const smsPrice = 0.0651; // $
let price;

let smsBody;
let segmentedMessage;

const numberFormat = new Intl.NumberFormat("no-NO");

const getExchangerate = async () => {
    try {
        const res = await fetch(
            "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
        );
        const data = await res.json();
        if (res.ok && data.usd.nok && data.usd.nok !== changeRate) {
            changeRate = data.usd.nok;
            updatePrice();
            updatePriceTotal();
            console.log(`Exchange rate: ${changeRate}`);
        }
    } catch (error) {
        console.error(error);
    }
};

getExchangerate();
document.addEventListener("DOMContentLoaded", () => {
    updatePrice();
    updatePriceTotal();
});

function getPrice(segments) {
    const priceUS = segments * smsPrice;
    const priceNO = priceUS * changeRate;
    return { priceUS, priceNO };
}

const updatePrice = () => {
    smsBody = textInput.value;
    segmentedMessage = new SegmentedMessage(smsBody);
    const numberOfSegments = segmentedMessage.segments.length;
    price = getPrice(numberOfSegments);
    encodingOutput.textContent = segmentedMessage.encodingName;
    segmentOutput.textContent = numberOfSegments;
    priceOutput.textContent = `${Math.round(price.priceNO * 100) / 100}kr ($${Math.round(price.priceUS * 100) / 100})`;
    if (numberOfSegments > 1) {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
};

const updatePriceTotal = () => {
    const amount = +amountInput.value;
    totalPriceOutput.textContent = `${numberFormat.format(Math.round(price.priceNO * amount * 100) / 100)}kr ($${numberFormat.format(Math.round(price.priceUS * amount * 100) / 100)})`;
};

textInput.addEventListener("input", () => {
    updatePrice();
    updatePriceTotal();
});

amountInput.addEventListener("input", () => {
    updatePriceTotal();
});
