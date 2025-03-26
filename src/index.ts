import showMenu from "./menu";
const welcomeString = `
**************************************************
**  Welcome to the Task Management System       **
**  Empowering your productivity since 2025     **
**************************************************
`;
const goodbyeString = `
******************************************************
**  Thank you for using our Task Management System. **
**  We look forward to assisting you again soon!    **
******************************************************
`;
function welcome() {
  console.log(welcomeString);
}

function goodbye() {
  console.log(goodbyeString);
}

welcome();
showMenu(goodbye);
