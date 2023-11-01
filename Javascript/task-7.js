/**
 * @format
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
	if (numRows >= s.length || numRows) return s;
	let row = [];
	let d = numRows - 1;
	let direction = -1;
	let result = [];
	for (let i = 0; i < s.length; i++) {
		if (i < numRows) row[i] = [s[i]];
		else {
			d = d + direction;
			row[d].push(s[i]);

			if (d == 0) {
				direction = 1;
			} else if (d == numRows - 1) {
				direction = -1;
			}
		}
	}
	for (let index = 0; index < row.length; index++) {
		// row[index].join('');

		result.push(row[index].join(''));
	}
	return result.join('');
};
console.log(convert('M', 1));
