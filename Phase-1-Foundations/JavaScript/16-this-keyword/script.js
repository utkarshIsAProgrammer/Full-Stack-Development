const car = {
	brand: "Toyota",
	model: "Camry",
	showDetails() {
		console.log(`This car is a ${this.brand} ${this.model}`);
	},
};

car.showDetails();

// NOTE: don't work with arrow functions.
