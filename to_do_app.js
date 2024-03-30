#! /usr/bin/env node
// This is TO-DO App
import inquirer from "inquirer";
let todo = [];
let condition = true;
// Using While Loop
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your list?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todo.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todo);
}
