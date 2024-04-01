#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        message: "Enter First Number",
        name: "firstNumber",
        type: "number",
    },
    {
        message: "Enter Second Number",
        name: "secondNumber",
        type: "number",
    },
    {
        message: "Select one of the Operators to perform action",
        name: "operator",
        type: "list",
        choices: [
            "addition (+)",
            "subtraction (-)",
            "multiplication (*)",
            "division (/)",
        ],
    },
]);
// console.log(answers);
if (answers.operator === "addition (+)") {
    console.log("Result: ", answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "subtraction (-)") {
    console.log("Result:", answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "multiplication (*)") {
    console.log("Result:", answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division (/)") {
    console.log("Result:", answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Operator");
}
