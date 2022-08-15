console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let name = prompt("What is your name?");
console.log("Hello, "+ name);

let faveNum = 3;
let guess = prompt("Guess a number between 1 and 10!");
parseInt (guess);

if (guess < 3) {console.log("You guessed too low!")}
else if (guess > 3) {console.log("You guessed too high!")}
else if (guess == 3) {console.log("Congratulations, you guessed it!")}

let birthMonth =prompt("What is your birth month? Enter 1-12")
parseInt (birthMonth)
if (birthMonth >= 3) console.log ("you were born in ")