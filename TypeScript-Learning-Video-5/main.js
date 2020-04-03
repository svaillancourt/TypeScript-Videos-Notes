const a = true;
const person = {
    name: "Stephane of House Doughnut, First of his name, Slayer of Doughnuts, Master of sprinkles",
    id: 3232324,
    likesPineapplesOnPizza: false
};
console.log(person.name.toUpperCase());
console.log(person.likesPineapplesOnPizza);
console.log(person.id);
const personTwo = {
    name: "Shweta of House Hot Sauce, First of her name, Lord of spices, Cosumer of wings, Champion of arguments",
    id: 3232324,
    likesPineapplesOnPizza: true
};
console.log(personTwo.name.toLowerCase());
console.log(personTwo.name.toUpperCase());
console.log(personTwo.likesPineapplesOnPizza);
console.log(personTwo.id);
let aNumber = 2;
let anObject = {
    name: "Jim Halpert",
    id: 3232324,
    likesPineapplesOnPizza: true
};
console.log(anObject.name.toUpperCase());
let anotherPerson = {
    name: "Pam Beesly",
    id: 3232324,
    likesPineapplesOnPizza: true,
    dog: {
        dogName: "Tiny!",
        isHappy: true,
        color: "brown",
        breed: "yoki terrier"
    }
};
console.log(anotherPerson.name.toLowerCase());
console.log(anotherPerson.name.toUpperCase());
console.log(anotherPerson.likesPineapplesOnPizza);
console.log(anotherPerson.id);
console.log(anotherPerson.dog.dogName);
console.log(anotherPerson.dog.breed);
const arr = ["hello", "world", "how", "are", "ya?"];
arr.forEach(element => {
    console.log(element);
});
const numberArray = [];
console.log(numberArray);
let numberOrStringArray;
numberOrStringArray = [29, 97, "Draisaitl", "McDavid"];
for (const elem of numberOrStringArray) {
    console.log(elem);
}
var PizzaToppings;
(function (PizzaToppings) {
    PizzaToppings[PizzaToppings["PINEAPPLE"] = 0] = "PINEAPPLE";
    PizzaToppings[PizzaToppings["PEPPERONI"] = 1] = "PEPPERONI";
    PizzaToppings[PizzaToppings["HAM"] = 2] = "HAM";
    PizzaToppings[PizzaToppings["CHEESE"] = 3] = "CHEESE";
    PizzaToppings[PizzaToppings["TOMATOSAUCE"] = 4] = "TOMATOSAUCE";
    PizzaToppings[PizzaToppings["MUSHROOMS"] = 5] = "MUSHROOMS";
    PizzaToppings[PizzaToppings["DONAIR_MEAT"] = 6] = "DONAIR_MEAT";
})(PizzaToppings || (PizzaToppings = {}));
console.log(PizzaToppings);
console.log(PizzaToppings.CHEESE);
console.log(PizzaToppings.PINEAPPLE);
const myMap = {
    1: "hello!",
    2: "world!",
    3: "third value",
    4: "fourth value",
    4384834: "some other value"
};
console.log(myMap[4384834]);
console.log(myMap[1]);
console.log(myMap[3]);
console.log(myMap[2]);
myMap[9001] = "this value is over nine thousand!!!!!!!!";
console.log(myMap[9001]);
const mapMap = new Map();
mapMap.set("one", "value of one");
mapMap.set("two", "value of two");
mapMap.set("three", "value of three");
console.log(mapMap);
console.log(mapMap.get("three"));
console.log(mapMap.get("two"));
console.log(mapMap.get("one"));
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
console.log(mySet);
mySet.add(8);
mySet.add(3);
console.log(mySet);
//# sourceMappingURL=main.js.map