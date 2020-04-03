var a = 1;
var b = 1 + 2;
var c = "hello world!";
var anotherOne = 1;
var andAnotherOne = "string";
var var1 = 1;
var stringVar1 = "stringy";
var anotherLetVariableNumber = 1;
anotherLetVariableNumber = 2;
var anotherLetStringVariable = "string original";
anotherLetStringVariable = "changed";
var anotherLetBoolean = true;
anotherLetBoolean = false;
var boolExampleDefined = true;
var numberExampleDefined = 3;
var stringExampleDefined = "string!";
stringExampleDefined = "new string";
var anotherVariable;
anotherVariable = 2;
anotherVariable = "string!";
anotherVariable = false;
var numberExample;
numberExample = 4;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var booleanExample;
booleanExample = true || (true && true);
console.log(booleanExample);
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(4, 3));
var concatenateStrings = function (stringA, stringB) {
    return stringA + stringB;
};
console.log(concatenateStrings("Hello! ", "world!"));
var returnNothingFunction = function (a) {
    console.log(a);
};
var booleanAndOperatorFunction = function (a, b) {
    return a && b;
};
var neverReturnFunction = function () {
    while (true) {
        console.log("never returning! :) ");
    }
};
var functionWithAny = function (a, b) {
    return 98165152521 + "hello" + 4521321254651 + "world??!?!";
};
var functionWithTypeGuards = function (a) {
    if (typeof a === "string") {
        console.log("input is a string data type!");
    }
    else if (typeof a === "number") {
        console.log("input is anumber data type!");
    }
};
var stringVariable = "123";
var fn2 = function (inputNumber) {
    console.log(inputNumber);
};
fn2(+stringVariable);
var numberVariable = 423;
var fn3 = function (inputString) {
    console.log(inputString);
};
fn3(String(numberVariable));
//# sourceMappingURL=main.js.map