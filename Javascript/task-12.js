/** @format */
function sameSquared(arr1, arr2) {
	if (!arr1 || !arr2) return false;
	if (arr1.length !== arr2.length) return false;

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	console.log(frequencyCounter1);

	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true; // moved the return statement outside of the loop
}

// sameSquared([1, 2, 3], [1, 3, 9]);
let data = { error: false, message: '' };

data = { error: true, message: 'amount is requred' };
x('1', { ...data, user_id: 'nipun' });
function x(string, obj) {
	const { error, message, user_id } = obj;
	console.log(string, error, message, user_id);
}
