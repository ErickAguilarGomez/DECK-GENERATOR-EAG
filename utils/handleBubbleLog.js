import { objectArray } from "../app.js";
import { bubbleSort, reversedArray } from "./bubbleSort.js";
import { bubbleLog } from "../app.js";
import printReversedArray from "./printReversedArray.js";

export default function handleBubbleLog() {
    bubbleSort(objectArray);
    printReversedArray(reversedArray, bubbleLog);
    objectArray.length = 0;
}
