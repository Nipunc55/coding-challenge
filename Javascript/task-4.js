/** @format */

function maxSubarraySum(arr, n) {
	if (n > arr.length) {
		return null;
	}

	let maxSum = 0;
	let tempSum = 0;

	// Compute sum of the first window
	for (let i = 0; i < n; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;

	// Slide the window and update maxSum as necessary
	for (let i = n; i < arr.length; i++) {
		tempSum = tempSum - arr[i - n] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}

// Example usage:
const array = [1, 2, 5, 2, 8, 1, 5];
const number = 2;
console.log(maxSubarraySum(array, number)); // Output: 10
