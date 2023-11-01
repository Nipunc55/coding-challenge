/** @format */

// const reverseString = (word) => {
// 	let reversWord = [];
// 	for (let index = word.length; index >= 0; index--) {
// 		reversWord.push(word[index]);
// 	}
// 	return reversWord.join('');
// };

const reverseString = (word) => {
	return word.split('').reverse().join('');
};
console.log(reverseString('nipun'));
