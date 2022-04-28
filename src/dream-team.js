const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let sortedArr = members.filter((el) => {
    if (typeof el === "string") {
      return el;
    }
  });

  const membersReduced = sortedArr.reduce((acc, el) => {
    el = el.trim();
    acc.push(el[0].toUpperCase());

    return acc;
  }, []);

  return membersReduced.sort().join("");
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam,
};
