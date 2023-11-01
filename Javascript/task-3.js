/**
 * Given a string s and an integer k, reverse the first k characters for every 2k characters
 *  counting from the start of the string.
 *
 * If there are fewer than k characters left, reverse all of them. If there are less than 2k
 * but * greater than or equal to k characters, then reverse the first k characters
 *  and leave the other as original.
 *
 * @format
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
	let _array = s.split('');
	let _limit = 2 * k;
	const _length = _array.length;

	if (2 * k >= _length) {
		let newS = s;
		newS =
			s.split('').slice(0, k).reverse().join('') +
			s.split('').slice(k, _length).join('');

		return newS;
	} else {
		if (2 * k == _length) _limit = 2 * k;
		else {
			let _count = Math.ceil(_length / (2 * k));
			_limit = _count * k;
			let newS = s;
			for (let index = 0; index < _count; index++) {
				newS =
					newS
						.split('')
						.slice(0, 2 * k * index)
						.join('') +
					s
						.split('')
						.slice(2 * k * index, k * (2 * index + 1))
						.reverse()
						.join('') +
					s
						.split('')
						.slice(k * (2 * index + 1), _length)
						.join('');
			}
			return newS;
		}
	}
};
console.log(reverseStr('abcdefg', 2));
// console.log('abcdefg'.slice(0, 2).split(''));
