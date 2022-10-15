const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const copyArr = domains
    .map((el) =>
      el
        .split(".")
        .reverse()
        .map((el, i, arr) => {
          return "." + arr.slice(0, i + 1).join(".");
        })
    )
    .flat();

  const res = copyArr.reduce((obj, el) => {
    if (el in obj) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
    return obj;
  }, {});

  return res;
}

module.exports = {
  getDNSStats,
};
