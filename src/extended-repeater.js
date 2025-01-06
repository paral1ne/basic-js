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
  let string = "";
  for (let i = 0; i < options.repeatTimes; i++) {
    string += `${str}${options.addition}${options.additionSeparator}${options.addition}`;
    if (i < options.repeatTimes - 1) {
      string += options.separator;
    }
  }
  return string;
}

module.exports = {
  repeater,
};
