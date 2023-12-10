/**
 * modify the getMaxValue function to return the max value of entered int array
 *
 * example -
 *          input  -[1,2,3,5]  out put -5
 *
 * @format
 */

/**
 *
 * @param {number[]} array
 * @returns {number}
 */

function getMaxValue(array) {
	let _maxvalue;
	_maxvalue = Math.max(...array);

	return _maxvalue;
}
//without using Math operators
/**
 *
 * @param {number[]} array
 * @returns {number}
 */
function maxValue(array) {
	let maxValue = array[0];
	for (let index = 0; index < array.length; index++) {
		maxValue = maxValue < array[index] ? array[index] : maxValue;
	}
	return maxValue;
}

module.exports = getMaxValue;
