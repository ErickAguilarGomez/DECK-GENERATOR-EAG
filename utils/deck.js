import { objectArray } from "../app.js";
import { arrayOfNumbers } from "../app.js";
import printDeck1 from "./printDeck1.js";

export  const deck = (array, arr2, userLength) => {
    for (let i = 0; i < userLength; i++) {
        let newObject = {
            number: array[Math.floor(Math.random() * array.length)],
            icon: arr2[Math.floor(Math.random() * arr2.length)]
        };
        arrayOfNumbers.push(newObject);
        objectArray.push(newObject);
    }
    printDeck1(arrayOfNumbers, original);
    return arrayOfNumbers;
};