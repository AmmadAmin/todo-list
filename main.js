#! /usr/bin/enc node
import chalk from "chalk";
import inquirer from "inquirer";
let todoList = [];
let condition = true;
console.log(chalk.blue.bold(chalk.magenta("\n \t welcome ammad111-todo- list Application\n")));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("Enter task to be added:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.green(`${addTask.task} has been added successly`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: "false"
        }
    ]);
    condition = addMoreTask.addmore;
}
console.log("your updated todo-list:", todoList);
