//Array Sorting & finding 2nd largest & smallest 

function GetThreeDigitRandomNumber() {
    return Math.floor(Math.random() * 900 + 100);
  }
//Array of 3 Digit Number
let arrayOf3DigitRandomNumber = new Array();
//Storing array elements
for (let i = 0; i < 10; i++){
    arrayOf3DigitRandomNumber.push(GetThreeDigitRandomNumber());
}
console.log("Ten 3 digits Random numbers are: " + arrayOf3DigitRandomNumber.toString());
console.log("Sorted Array: "+ arrayOf3DigitRandomNumber.sort());
console.log("Second largest after sorting : " + arrayOf3DigitRandomNumber[8]);
console.log("Second smallest after sorting : " + arrayOf3DigitRandomNumber[1]);