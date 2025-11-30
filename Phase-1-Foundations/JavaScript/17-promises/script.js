const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const success = true;
		if (success) {
			resolve("Promise fulfilled!");
		} else {
			reject("Promise rejected!");
		}
	}, 2000);
});

myPromise
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.error(error);
	});
