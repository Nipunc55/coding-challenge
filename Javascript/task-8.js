/** @format */
/**
 *
 * @param {number} nums
 * @param {number} target
 * @returns
 */
const twoSum = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let numsSort = nums.sort((a, b) => a - b);
	let result = [];

	while (left < right) {
		console.log(left, right);
		const sum = numsSort[left] + numsSort[right];
		if (sum === target) {
			result.push([numsSort[left], numsSort[right]]);
			left++;
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}

	return result; // Return null if no such pair is found
};

// Example usage:
const nums = [1, 5, 6, 2, 7, 11, 10, 9, -5, -3, -10, -1, 15, 20];
const target = 10;
console.log(twoSum(nums, target));
