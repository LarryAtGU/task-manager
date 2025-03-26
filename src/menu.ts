import * as readline from "readline";
import { addTask, listTasks, completeTask } from "./model";
const menuString = `
Task Management System
a. Add Task
c. Complete Task
l. List Tasks
q. Quit
`;
export default function showMenu(onQuit: () => void): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  function handleMenu(choice: string): void {
    switch (choice.trim().toLowerCase()) {
      case "a":
        rl.question("Please input task title: ", (input: string) => {
          addTask(input);
          console.log("New Task added.");
          displayMenu();
        });
        break;
      case "c":
        rl.question("Please input task id: ", (input: string) => {
          const taskId = parseInt(input);
          const result = completeTask(taskId);
          if (result) {
            console.log("Task completed successfully.");
          } else {
            console.log("Fail to complete task");
          }
          displayMenu();
        });
        break;
      case "l":
        const tasks = listTasks();
        console.table(tasks);
        displayMenu();
        break;

      case "q":
        rl.close();
        onQuit();
        break;
      default:
        console.log("Invalid option, please try again.");
        displayMenu();
        break;
    }
  }
  function displayMenu(): void {
    console.log(menuString);
    rl.question("Choose an option: ", handleMenu);
  }

  displayMenu();
}
