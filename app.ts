import inquirer from "inquirer";
interface answerType {
userId: string;
userPin: number;
accountType: string;
transactionType: string;
amount: number;
}
const answer: answerType = await inquirer.prompt([
{type: "input", name: "userId", message: "Please enter your ID"},

{type: "number", name: "userPin", message: "Please enter your PIN"},

{type: "list", name: "accountType", message: "Please select your account type", 
choices: ["savings", "current"]},

{type: "list", name: "transactionType", 
message: "Please select your transaction type", 
choices: ["deposit", "withdrawal"], when(answers) {return answers.accountType},},
{type: "list", name: "amount", choices: [1000, 5000, 10000, 100000], 
message: "select amount", when(answers) {return answers.transactionType == "deposit";}},

{type: "list", name: "amount", choices: [1000, 5000, 10000, 100000], 
message: "select amount", when(answers) {return answers.transactionType == "withdrawal";},},
]);
if (answer.userId && answer.userPin) {const balance = Math.floor(Math.random()*100000);
    console.log("Previous balance", balance)
    const enteredAmount = answer.amount;
    if(balance >= enteredAmount) {const remainingBalance = balance - enteredAmount;
        console.log("your Remaining balance is", remainingBalance)
    } else {console.log("insufficient balance")}}