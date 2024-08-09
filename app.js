import handleBubbleLog from "./utils/handleBubbleLog.js";
import { deck } from "./utils/deck.js";


export const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
export const symbols = ["♠", "♥", "♣", "♦"];
export const draw = document.querySelector("#draw");
export const sort = document.querySelector("#sort");
export const input = document.querySelector("input");
export const original = document.querySelector("#original");
export const bubbleLog = document.querySelector("#bubbleLog");
export let arrayOfNumbers = [];
export const objectArray = [];
export let totalLength = 0;

const handleInput = (e) => {
  totalLength = e.target.value;
};

const handleDraw = () => {
  deck(number, symbols, totalLength);
  totalLength = "";
  input.value = totalLength;
  arrayOfNumbers = [];
};

input.addEventListener("input", handleInput);
draw.addEventListener("click", handleDraw);
sort.addEventListener("click", handleBubbleLog);
