import { question } from "readline-sync";
import { calculate } from "./calculate.js";
import { isNumber } from "./isNumber.js";
import { isOperator } from "./isOperator.js";
export function main() {
    const firstStr = question("Enter first number: \n");
    const operator = question("Enter operator: \n");
    const secondStr = question("Enter second number: \n");
    const validInputs = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInputs) {
        const firstNum = parseInt(firstStr);
        const secondNum = parseInt(secondStr);
        const result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("\nInvalid input\n");
        main();
    }
}
