#!/usr/bin/env node
console.log("By miss Ayesha")


import inquirer from "inquirer";
const number = await inquirer.prompt([
  { message: "Entre 1st number", type: "number", name: "first" },
  { message: "Entre 2nd number", type: "number", name: "second" },
  {
    massage: "Entre the operation",
    name: "Operation",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
  },
]);

if (number.Operation==="Addition"){
     console.log(`The answer of sum is : ${number.first + number.second}`);
} 
else if (number.Operation==="Subtraction"){
      console.log(`The answer of subtraction is : ${number.first - number.second}`);
}
else if (number.Operation==="Multiplication"){
      console.log(`The answer of product is : ${number.first * number.second}`);
}
else{
      console.log(`The answer of divison is : ${number.first / number.second}`);
}