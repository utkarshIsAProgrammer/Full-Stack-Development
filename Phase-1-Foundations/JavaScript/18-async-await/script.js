async function example() {
	console.log("Starting...");
	let result = await new Promise((resolve) => {
		setTimeout(() => resolve("Operation completed"), 1000);
	});
	console.log(result);
	console.log("Done!");
}

example();
