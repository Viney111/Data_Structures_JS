//Storing 3 Digit Number in Array & finding smallest & largest.

function getThreeDigitRandomNumber() {
    return Math.floor(Math.random() * 900 + 100);
  }
// Array
let arrayOfElements = new Array();
//Storing elements in array
for (let i = 0; i < 10; i++){
    arrayOfElements[i] = getThreeDigitRandomNumber();
}
console.log("Numbers are "+ arrayOfElements);