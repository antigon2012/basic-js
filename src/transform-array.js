const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const copyOfArr = [...arr];
  const resArr = [];

  for (let i = 0; i < copyOfArr.length; i++) {
    if (typeof copyOfArr[i] === "number") {
      resArr.push(arr[i]);
    } else {
      switch (copyOfArr[i]) {
        case `--discard-next`:
          i = i + 2;
          break;

        case `--discard-prev`:
          if (i === 0) {
            break;
          } else {
            resArr.pop();
          }
          break;

        case `--double-next`:
          if (i === copyOfArr.lastIndexOf(copyOfArr[copyOfArr.length - 1])) {
            break;
          } else {
            resArr.push(copyOfArr[i + 1]);
          }
          break;

        case `--double-prev`:
          if (copyOfArr.indexOf(copyOfArr[i]) === 0) {
            break;
          } else {
            resArr.push(copyOfArr[i - 1]);
          }
          break;

        default:
          resArr.push(copyOfArr[i]);
          break;
      }
    }
  }

  return resArr;
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
