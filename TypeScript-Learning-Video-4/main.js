var unionTypesFunction = function (a) {
    if (typeof a === "string") {
        console.log("You passed in a string into this function!");
    }
    else if (typeof a === "number") {
        console.log("You passed in a number into the function!");
    }
};
unionTypesFunction("a");
unionTypesFunction(2);
var literalTypesFunction = function (a) {
    console.log("This is a literal type!");
};
literalTypesFunction("literally");
var literallyReturningLiteralsFunction = function () {
    return "literally";
};
console.log(literallyReturningLiteralsFunction());
var unionTypeLiterals = function (a) {
    return 5;
};
function stringsAndNumbersFunctionExample1(a, b) {
    return "a" + 1;
}
;
console.log(stringsAndNumbersFunctionExample1("dingus", 8));
function stringsAndNumbersFunctionExample(a, b) {
    if (typeof a === "string") {
        console.log("You passed in a string into this function!");
    }
    else if (typeof a === "number") {
        console.log("You passed in a number into the function!");
    }
}
stringsAndNumbersFunctionExample("wu-tang", 7);
stringsAndNumbersFunctionExample(7, "wu-tang");
var unionTypeLiterals2 = function (a) {
    return 5;
};
console.log(unionTypeLiterals2(true));
console.log(unionTypeLiterals2(4));
console.log(unionTypeLiterals2(2));
console.log(unionTypeLiterals2("well now!"));
function moreTypeAliasingExamples(a, b, c) {
    return false;
}
console.log(moreTypeAliasingExamples(2, true, "well now!"));
console.log(moreTypeAliasingExamples("well now!", "well now!", true));
console.log(moreTypeAliasingExamples(true, true, true));
console.log(moreTypeAliasingExamples(2, 2, 2));
var basicConsoleDotLogFunction = function () { return console.log("hello I am the function! watch for me in the empty brackets!"); };
var basicConsoleDotLogFunction2 = function () { return console.log("hello I am the function! watch for me in the empty brackets!"); };
var basicConsoleDotLogFunction3 = function () { return console.log("hello I am the function! watch for me in the empty brackets!"); };
basicConsoleDotLogFunction();
var functionAcceptingAnotherFunctionInArguments = function (callback) {
    callback();
};
functionAcceptingAnotherFunctionInArguments(basicConsoleDotLogFunction);
var functionReturningBasicFunction = function () {
    return function (a) {
        console.log("This function was printed!");
        console.log(a);
        return 5;
    };
};
console.log(functionReturningBasicFunction()("i can put whatever i want as long as its a string!"));
var functionTakingOneFunctionAsAnArgumentAndReturningAnotherFunction = function (aString, callback) {
    var closureConst = callback(aString);
    return function (callbackString) {
        return closureConst + callbackString;
    };
};
console.log(functionTakingOneFunctionAsAnArgumentAndReturningAnotherFunction("Hello ", function (a) {
    return a;
})("world! :D"));
function anyFunction(a, b) {
    a = 2;
    a = {};
    a = "554554";
    a = +a;
    b = 8;
    b = { objectProperty: " ok Then" };
    var c = +a + " " + b.objectProperty;
    return c;
}
console.log(anyFunction("lol", "anything!!!!!"));
console.log(anyFunction(4, 8));
console.log(anyFunction("derp", true));
//# sourceMappingURL=main.js.map