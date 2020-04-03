"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myExports_1 = require("./myExports");
console.log(myExports_1.myText);
const classExport_1 = require("./classExport");
const square = new classExport_1.Square(3, 10);
console.log(square.getHeight());
console.log(square.getWidth());
console.log(square.getArea());
var CaseChange;
(function (CaseChange) {
    function upperCase(myString) {
        return myString.toUpperCase();
    }
    CaseChange.upperCase = upperCase;
    function lowerCase(myString) {
        return myString.toLowerCase();
    }
    CaseChange.lowerCase = lowerCase;
})(CaseChange || (CaseChange = {}));
console.log(CaseChange.lowerCase("THIS IS UPPERCASE BEFORE NAMESPACE METHOD"));
console.log(CaseChange.upperCase("this is lowercase before the namespace method is used on it!"));
//# sourceMappingURL=main.js.map