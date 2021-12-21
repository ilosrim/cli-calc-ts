type Operator = "+" | "-" | "*" | "/";

export function calculate(
  firstNum: number,
  operator: Operator,
  secondNum: number
) {
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
