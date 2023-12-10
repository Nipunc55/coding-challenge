/** @format */

const productExceptSelf = function (nums) {
	const n = nums.length;
	const answer = new Array(n);
	answer[0] = 1;

	// Calculate prefix products
	for (let i = 1; i < n; i++) {
		answer[i] = answer[i - 1] * nums[i - 1];
	}
	// console.log(answer);

	let suffixProduct = 1;
	// Calculate suffix products and multiply with prefix products
	for (let i = n - 1; i >= 0; i--) {
		answer[i] *= suffixProduct;
		suffixProduct *= nums[i];
	}
	// console.log(answer);
	return answer;
};

// Example usage:
const nums = [1, 2, 3, 4];
// productExceptSelf(nums);
console.log(nums.filter((number) => number >= 2)); // Output: [24,12,8,6]
