import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Guess a number between 1 and 10",
    }
]);
if (answer.userNumber === randomNumber) {
    console.log("Congratulations You guessed it right!");
}
else {
    console.log("You guessed wrong! The number was " + randomNumber);
}
