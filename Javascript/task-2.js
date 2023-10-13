/** @format */
/* Write a function that takes an object as an argument 
and returns the number of properties present in the object. */
/**
 *
 * @param {object} obj
 * @returns {number}
 */
function countProperties(obj) {
	_count = 0;
	_count = Object.keys(obj).length;
	return _count;
}

module.exports = countProperties;
