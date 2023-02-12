module.exports = function check(str, bracketsConfig) {
  const opens = Object.fromEntries(bracketsConfig);
  const stack = [];
  let leftBr = bracketsConfig.map((x) => x[0]);

  for (let i = 0; str.length > i; i++) {
    const char = str[i];
    if (leftBr.includes(char)) {
      if (char == opens[stack[stack.length - 1]]) stack.pop();
      else stack.push(char);
    } else if (char == opens[stack[stack.length - 1]]) stack.pop(char);
      else return false;
  }
  return !stack.length;
};
