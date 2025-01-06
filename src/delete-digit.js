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
  let toStr = String(n);
  let number = 0;
  for (let i = 0; i < toStr.length; i++) {
    let newNum = toStr.slice(0, n) + toStr(slice(n + 1, toStr.length));
  }
}

module.exports = {
  deleteDigit,
};
