const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split("");
  let arrOfNum = [];

  for (let i = 0; i < arr.length; i++) {
    let num = [...arr];
    num.splice(i, 1);
    let x = num.join("");
    arrOfNum.push(+x);
  }
  return arrOfNum.sort((a, b) => a - b).pop();
}

module.exports = {
  deleteDigit,
};
