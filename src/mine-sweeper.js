const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mineSweeperMatrix = [];

  matrix.forEach((el, i) => {
    let sum = 0;
    let row = [];
    for (let j = 0; j < el.length; j++) {
      sum = 0;
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j - 1]) {
          sum++;
        }
        if (matrix[i - 1][j]) {
          sum++;
        }
        if (matrix[i - 1][j + 1]) {
          sum++;
        }
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j - 1]) {
          sum++;
        }
        if (matrix[i + 1][j]) {
          sum++;
        }
        if (matrix[i + 1][j + 1]) {
          sum++;
        }
      }
      if (matrix[i][j - 1]) {
        sum++;
      }
      if (matrix[i][j + 1]) {
        sum++;
      }
      row.push(sum);
    }
    mineSweeperMatrix.push(row);
  });
  return mineSweeperMatrix;
}

module.exports = {
  minesweeper,
};
