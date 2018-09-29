module.exports = function check(str, bracketsConfig) {
  // your solution
  const length = str.length;
  const stack = [];
  const bracketsArr = [...bracketsConfig];
  const openBracketArr = [];
  const closeBracketArr = [];

  if (length % 2 !== 0) {
    return false;
  }

  bracketsArr.forEach(b => {
    openBracketArr.push(b[0]);
    closeBracketArr.push(b[1]);
  });

  for (let i = 0; i < length; i++) {
    if (openBracketArr.includes(str[i])) {
      if (closeBracketArr.includes(str[i]) && stack.includes(str[i])) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }

    else if (closeBracketArr.includes(str[i]) && stack[stack.length - 1] === openBracketArr[closeBracketArr.indexOf(str[i])]) {
      stack.pop();
    }
  }

  return stack.length === 0;
}
