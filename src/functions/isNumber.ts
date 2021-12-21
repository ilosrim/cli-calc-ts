export function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}
