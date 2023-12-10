/** @format */

async function timeLimit() {
	wait().then((data) => {
		console.log(data);
	});
	console.log('_____---------______');
}

async function wait() {
	return new Promise(async (resolve, reject) => {
		setTimeout(() => {
			resolve('succes');
		}, 1000);
	});
}

timeLimit();
