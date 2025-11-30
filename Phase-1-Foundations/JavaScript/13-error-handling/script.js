try {
	let num = parseInt("abc");
	if (isNaN(num)) throw new Error("Invalid number!");
	console.log("Number:", num);
} catch (error) {
	console.log("Error:", error.message);
} finally {
	console.log("Finally block executed.");
}
