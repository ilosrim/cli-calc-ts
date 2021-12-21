import { question } from "readline-sync";
import { calculate } from "./calculate.js";
import { isNumber } from "./isNumber.js";
import { isOperator } from "./isOperator.js";

type Operator = "+" | "-" | "*" | "/";

export function main(): void {
  const firstStr: string = question("Enter first number: \n");
  const operator: string = question("Enter operator: \n");
  const secondStr: string = question("Enter second number: \n");

  const validInputs: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

  if (validInputs) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("\nInvalid input\n");
    main();
  }
}
