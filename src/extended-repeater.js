const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resArr = [];
  let value = typeof str === "string" ? str : String(str);
  let repeatTimes = options.repeatTimes,
    separator = options.separator,
    addition =
      typeof options.addition === "string"
        ? options.addition
        : String(options.addition),
    additionRepeatTimes = options.additionRepeatTimes,
    additionSeparator = options.additionSeparator;

  if (repeatTimes !== 0 || repeatTimes !== undefined) {
    for (let i = 0; i < repeatTimes; i++) {
      resArr.push(str);
      resArr.push(separator ? separator : "+");
    }
  }
  if (addition !== undefined) {
    if (additionRepeatTimes !== undefined && !isNaN(additionRepeatTimes)) {
      if (additionRepeatTimes > 0) {
        let additionRepeat = `${addition}`;
        for (let j = 0; j < additionRepeatTimes - 1; j++) {
          let sep = additionSeparator ? additionSeparator : "|";
          additionRepeat += `${sep}${addition}`;
        }
        for (let l = 0; l < resArr.length; l++) {
          if (resArr[l] === value) {
            resArr.splice(l + 1, 0, additionRepeat);
          }
        }
      } else {
        for (let k = 0; k < resArr.length; k++) {
          if (resArr[k] === value) {
            resArr.splice(k + 1, 0, addition);
          }
        }
      }
    }
  }
  resArr.splice(resArr.length - 1, 1);
  return resArr.join("");
}

module.exports = {
  repeater,
};
