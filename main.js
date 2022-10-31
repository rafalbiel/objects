"use strict";

// const newUser = {
// 	name: "rafal",
// 	surname: "biel",
// 	age: 45,

// 	car: {
// 		brand: "VW",
// 		color: "black",
// 		year: 2019,
// 		sound() {
// 			console.log("brum brum");
// 		},
// 	},
// };
// console.log(newUser.age);
// console.log(newUser.car.color);

// console.log(
// 	`${newUser.name} jeździ $ autem marki ${newUser.car.brand} w kolorze ${newUser.car.color}`
// );
// newUser.car.sound();

// newUser.country = "Polska";
// newUser["fav-movie"] = "Matrix";

// const dogName = "Rina";
// const age = 4;
// const dog = {
// 	name: dogName,
// 	age: age,
// };
// delete dog.age;

// const user = {
// 	name: "Maja",
// 	test() {
// 		console.log(name);
// 	},
// };

// class User1 {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// User1.prototype.country = "Polska";

// User1.prototype.hello = function () {
// 	console.log(`użytkownik ma na imię ${this.name} i ma ${this.age} lat`);
// };

// const newUser1 = new User1("Jola", 46);
// const newUser2 = new User1("Antek", 15);
// newUser1.hello();
// newUser2.hello();
// const newUser3 = new User1("Rafał", 45);
// newUser3.hello();
// const newUser4 = new User1("Maja", 17);

// function User2(number) {
// 	this.jakisNumer = number;
// 	this.test = function () {
// 		console.log("jestem sobie metodą w obiekcie");
// 	};
// }
// User2.prototype.test = function () {
// 	console.log("jestem poza obiektem");
// };

// const newUser5 = new User2(554);
// console.log(newUser5.test());

// console.log(newUser5.jakisNumer.toString());

// console.log(String());
// console.log(Number());
// console.log(Boolean());
// console.log(Array());
// console.log(Object());

// const nowyString = new String("elo");
// const nowyString2 = "elo";
// console.log(nowyString);
// console.log(nowyString2.charAt(1));

// const paragraph = document.querySelector("p");
// const button1 = document.querySelector(".btn1");
// const button2 = document.querySelector(".btn2");
// const button3 = document.querySelector(".btn3");

// class Food {
// 	constructor(dishName, dishPrice) {
// 		this.dishName = dishName;
// 		this.dishPrice = dishPrice;
// 		this.displayer = function () {
// 			paragraph.innerText = `${this.dishName} kosztuje ${this.dishPrice}`;
// 		};
// 	}
// }

// const newFood1 = new Food("bigos", 20);
// const newFood2 = new Food("pierogi", 15);
// const newFood3 = new Food("flaczki", 25);

// button1.addEventListener("click", function () {
// 	newFood1.displayer();
// });
// button2.addEventListener("click", function () {
// 	newFood2.displayer();
// });
// button3.addEventListener("click", function () {
// 	newFood3.displayer();
// });

// const person = {
// 	name: "Maja",
// 	age: 17,
// 	sex: "female",
// 	"hair-color": "burgund",
// };

// console.log(person["hair-color"]);

// const cars = ["audi", "skoda", "VW"];
// for (const car of cars) {
// 	console.log(car);
// }

// for (const data in person) {
// 	console.log(data + " " + person[data]);
// }

// const colors = ["red", "green", "blue"];
// for (const color of colors) {
// 	console.log(color);
// }

// function Food5(name) {
// 	this.name = name;
// }

// const zupa = new Food5("rosol");
// const drugie = new Food5("schabowy");
// console.log(zupa);
// console.log(drugie);

// const movie = {
// 	title: "Leon",
// };

// const showMovie = function (price, cinema) {
// 	console.log(this);
// 	console.log(`Film: ${this.title}, bilet: ${price} pln, kino ${cinema}`);
// };

// showMovie.call(movie, 50, "Cinema City");

function Movie(title, year) {
	this.title = title;
	this.year = year;
}

function ActionMovie(title, year) {
	Movie.call(this, title, year);
	this.category = "Akcja";
}

function Comedy(title, year) {
	Movie.call(this, title, year);
	this.category = "Komedia";
}

const newMovie = new ActionMovie("Leon", 2000);
const newMovie2 = new Comedy("Wild Wild West", 2005);

// function User(name) {
// 	this.name = name;
// }

// const newUser = new User("Adam");
// const newUser2 = new User("Jola");
// const newUser3 = new User("Maja");
// const newUser4 = new User("Antek");
// const newUser5 = new User("Rafał");

// console.log(newUser.name);
// console.log(newUser2.name);
// console.log(newUser3.name);
// console.log(newUser4.name);
// console.log(newUser5.name);

function add(...args) {
	let results = 0;
	for (let index = 0; index < args.length; index++) {
		results = results + args[index];
	}
	return results;
}
const score = add.apply(null, [1, 2, 3, 4, 5]);
console.log(score);

const car1 = {
	name: "Ferrari",
};

const car2 = {
	name: "Audi",
};

const car3 = {
	name: "Nissan",
};

function showName() {
	console.log(this.name);
}

showName.bind(car1)();
showName.bind(car2)();
showName.bind(car3)();
