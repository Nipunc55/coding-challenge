/**
 * Given an integer x, return true if x is a
 * palindrome
 * , and false otherwise.
 *
 * @format
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	return x.toString().split('').reverse().join('') == x.toString();
};
let copy = 123;
let reverse = 0;
while (copy > 0) {
	const digit = copy % 10;
	reverse = reverse * 10 + digit;
	copy = ~~(copy / 10);
	console.log(digit);
}
