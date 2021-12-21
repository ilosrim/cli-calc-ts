export function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        default:
            return "Invalid ";
    }
}
