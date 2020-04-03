const a = 1; // this has a type when you define it! ( number in this instance._
// you know this type AS YOU CODE IT)

// When you have dymnamically typed, the type of the variable can changed much more fluidly.

const b = 1 + 2;
const c = "hello world!";

var anotherOne = 1; // cannot redefine a var. hovering over it will tell you what the variable is. i.e. a number, string, boolean

// anotherOne = "string";
// anotherOne = {};
// anotherOne = true;

var andAnotherOne = "string"; // these types were INFERRED based on this assignment of this data to the variable!

const var1 = 1;
// var1 = 323;

const stringVar1 = "stringy";

let anotherLetVariableNumber = 1;
anotherLetVariableNumber = 2;

let anotherLetStringVariable = "string original";
anotherLetStringVariable = "changed";

let anotherLetBoolean = true;
anotherLetBoolean = false;

// what if we deinfe the type??

let boolExampleDefined: boolean = true;

let numberExampleDefined: number = 3;

let stringExampleDefined: string = "string!";
stringExampleDefined = "new string";

// stringExampleDefined = 2; // NOT ALLOWED!

// why exactly are we not using type inference?? same result...
// Do you tust the TypeScript complier..? You should...

// One edge case...
let anotherVariable; // NO DATA ASSIGNED. How can type inference work?
anotherVariable = 2;
anotherVariable = "string!";
anotherVariable = false;

let numberExample: number;

// numberExample = "string" // NOT ALLOWED!!!
numberExample = 4;

for (let i = 0; i < 10; i++) {
  //0 1 2 3 4 5 6 7 8 9
  console.log(i);
}

let booleanExample: boolean;
booleanExample = true || (true && true);
console.log(booleanExample);

// Functions and data types! TIMESTAMP 20:20

//Numbers
function addNumbers(a: number, b: number): number {
  // METHOD SIGNATURE
  return a + b;
}

console.log(addNumbers(4, 3));

var concatenateStrings = (stringA: string, stringB: string): string => {
  return stringA + stringB; // Concat strings
};

console.log(concatenateStrings("Hello! ", "world!"));

// Let's say we want a method that will not return a value. VOid

var returnNothingFunction = (a: string): void => {
  console.log(a);
};

//booleans

const booleanAndOperatorFunction = (a: boolean, b: boolean) => {
  return a && b;
};

// Let's say a method will NEVER return. It returns NEVER.

var neverReturnFunction = (): never => {
  while (true) {
    // infinite while loop! There are a few fringe cases where you'd maube want to use this...
    console.log("never returning! :) ");
  }
};

// any ...
// controversial
// indicates potential design failure, or lack of knowledge of union types, etc. Usually....

var functionWithAny = (a: any, b: any): any => {
  return 98165152521 + "hello" + 4521321254651 + "world??!?!";
};

// Let's talk type GUARDS and type CASTING.

var functionWithTypeGuards = (a: any): void => {
  if (typeof a === "string") { // this typeguard is the "typeof a === 'string'"
      console.log("input is a string data type!")
  } else if (typeof a === "number") { // this typeguard is the "typeof a === 'number'"
    console.log("input is anumber data type!");
  }
};

// Typeguards are ... mostly something that belongs in a meseum at this point. For the most case.
// Avoids having to check things manually

// Type casting!
// this should is review TIMESTAMP 30:00

let stringVariable = "123";

const fn2 = (inputNumber: number) => {
    console.log(inputNumber);
}

fn2(+stringVariable); // won't accept! needs a number! Cast it! with +

const numberVariable = 423;
const fn3 = (inputString: string) => {
    console.log(inputString);
}

fn3(String(numberVariable)); // won't accept! needs a number! Cast it! with String! 

