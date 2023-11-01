/**
 * @format
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
	let profit = 0;
	let left = 0;
	let right = prices.length - 1;
	let minValue = prices[0];

	for (let index = 0; index < prices.length - 1; index++) {
		if (prices[index + 1] < minValue) minValue = prices[index + 1];
		profit = Math.max(prices[index + 1] - minValue, profit);
	}
	return profit;
};
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
