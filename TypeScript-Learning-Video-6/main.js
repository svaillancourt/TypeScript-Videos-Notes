let myArray = ['W', 1, 'u', 2, 'T', 3, 'a', 4, 'n', 5, 'g'];
for (let i = 0; i < myArray.length; i++) {
    console.log(`find the magic word ${myArray[i]} in my array!`);
}
;
function addition([numOne, numTwo]) {
    let sum = numOne + numTwo;
    console.log(sum);
}
;
addition([5, 8]);
let myArray3 = [1, 2, 3, 4, 'b'];
console.log(...myArray);
function signIn(signInMessage, ...names) {
    console.log(signInMessage + " " + names.join(", ") + ".");
}
function signIn2(signInMessage, ...names) {
    console.log(signInMessage + " " + names.join(", ") + ".");
}
function familyTracker(firstName, lastName = "Vaillancourt") {
    console.log(`${firstName} is a member of the ${lastName} family.`);
}
;
familyTracker('Stephane', 'Gambino');
familyTracker('Stephane');
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}
let myRectangle = new Rectangle(20, 10);
console.log(myRectangle.area);
class Addition {
    static calcSum() {
        return this.numOne + this.numTwo;
    }
}
Addition.numOne = 8;
Addition.numTwo = 2;
console.log(Addition.calcSum());
class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}
;
const rectObject = new Rectangle2(1, 3);
console.log(rectObject.area);
const rectObject2 = new Rectangle(1, 3);
console.log(rectObject2.width);
const printTrianglePoints = (trianglePoints) => {
    console.log(trianglePoints.pointA, trianglePoints.pointB, trianglePoints.pointC);
};
//# sourceMappingURL=main.js.map