const newUser = {
	name: "rafal",
	surname: "biel",
	age: 45,

	car: {
		brand: "VW",
		color: "black",
		year: 2019,
		sound() {
			console.log("brum brum");
		},
	},
};
console.log(newUser.age);
console.log(newUser.car.color);

console.log(
	`${newUser.name} jeździ $ autem marki ${newUser.car.brand} w kolorze ${newUser.car.color}`
);
newUser.car.sound();

newUser.country = "Polska";
newUser["fav-movie"] = "Matrix";

const dogName = "Rina";
const age = 4;
const dog = {
	name: dogName,
	age: age,
};
delete dog.age;

const user = {
	name: "Maja",
	test() {
		console.log(name);
	},
};

class User1 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

User1.prototype.country = "Polska";

User1.prototype.hello = function () {
	console.log(`użytkownik ma na imię ${this.name} i ma ${this.age} lat`);
};

const newUser1 = new User1("Jola", 46);
const newUser2 = new User1("Antek", 15);
newUser1.hello();
newUser2.hello();
const newUser3 = new User1("Rafał", 45);
newUser3.hello();
const newUser4 = new User1("Maja", 17);

function User2(number) {
	this.jakisNumer = number;
	this.test = function () {
		console.log("jestem sobie metodą w obiekcie");
	};
}
User2.prototype.test = function () {
	console.log("jestem poza obiektem");
};



const newUser5 = new User2(554);
console.log(newUser5.test());




console.log(newUser5.jakisNumer.toString());


// console.log(String());
console.log(Number());
console.log(Boolean());
console.log(Array());
console.log(Object());

const nowyString = new String('elo');
const nowyString2 = 'elo'
console.log(nowyString);
console.log(nowyString2.charAt(1));

