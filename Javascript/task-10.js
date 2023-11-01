/**
 * @format
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
	return (
		nums
			.sort((a, b) => a - b)
			.filter((value, index, array) => index == array.indexOf(value)).length !=
		nums.length
	);
};
console.log(containsDuplicate([1, 2, 3, 2, 2, 5]));
