/** @format */

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 7, 5, 3, 5];

// Sorting numbers
const sortedNumbers = arr
	.sort((a, b) => a - b)
	.filter((value, index, array) => array.indexOf(value) === index);

// .map((i, pos) => ({ val: i, pos: pos }))
// .sort((a, b) => a.val - b.val || a.pos - b.pos)
// .slice(-(arr.length - 5))
// .sort((a, b) => a.pos - b.pos)
// .map((i) => i.val);
// console.log(find_total(arr));
function find_total(my_numbers) {
	let _score = 0;

	my_numbers.forEach((number) => {
		// if(number%2==0)_score +1;
		// if(number %2==1 && number != 5)_score+3;
		if (number == 5) _score = _score + 1;
	});
	return _score;
}
const fetchData = () =>
	new Promise((r) => setTimeout(() => r(Date.now()), 100));

const data = fetchData().then((value) => console.log(value));
console.log(data.toString());
