import * as readline from "readline";

const menuString = `
Task Management System
q. Quit
`;
export default function showMenu(onQuit: () => void): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  function displayMenu(): void {
    console.log(menuString);
    rl.question("Choose an option: ", handleMenu);
  }
  function handleMenu(choice: string): void {
    switch (choice.trim().toLowerCase()) {
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
  displayMenu();
}
