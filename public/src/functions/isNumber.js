export function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
