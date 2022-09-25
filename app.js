console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let name = prompt("What is your name?");
console.log("Hello, " + name);

let faveNum = 3;
let guess = prompt("Guess a number between 1 and 10!");
parseInt(guess);

if (guess < 3) {
  console.log("You guessed too low!");
} else if (guess > 3) {
  console.log("You guessed too high!");
} else console.log("Congratulations, you guessed it!");

let birthMonth = prompt("What is your birth month? Enter 1-12");

switch (birthMonth) {
  case "1":
  case "2":
  case "3":
    console.log("You were born in Winter!");
    break;
  case "4":
  case "5":
  case "6":
    console.log("You were born in Spring!");
    break;
  case "7":
  case "8":
  case "9":
    console.log("You were born in Summer!");
    break;
  case "10":
  case "11":
  case "12":
    console.log("You were born in Fall!");
    break;
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank Top";
  case "02":
    type = "T-Shirt";
  case "03":
    type = "Long Sleeve";
  case "04":
    type = "Sweat Shirt";
  //default:
    //"Other";
}

console.log(typeId);

switch (colorId) {
  case "BL":
    color = "Black";
  case "BL":
    color = "Blue";
  case "RD":
    color = "Red";
  case "PU":
    color = "Purple";
  //default:
    //color = "White";
}

console.log(colorId);

switch (sizeId) {
  case "S":
    size = "Small";
  case "M":
    size = "Medium";
  case "L":
    size = "Large";
  case "XL":
    size = "Extra Large";
  //default:
    //size = "One Size Fits All";
}

console.log(sizeId);

console.log(`Product: ${size} ${color} ${type}`);
