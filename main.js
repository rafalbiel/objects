const newUser = {
	name: "rafal",
	surname: "biel",
	age: 45,

	car: {
		brand: "VW",
		color: "black",
		year: 2019,
        sound (){
            console.log('brum brum');
        }
	},
};
console.log(newUser.age);
console.log(newUser.car.color);

console.log(
	`${newUser.name} jeździ $ autem marki ${newUser.car.brand} w kolorze ${newUser.car.color}`
);
newUser.car.sound()

newUser.country = 'Polska';
newUser['fav-movie']='Matrix';


const dogName = 'Rina';
const age = 4;
const dog={
    name: dogName,
    age: age
};
delete dog.age;


const user = {
    name: 'Maja',
    test(){
        console.log(name);
    }
}