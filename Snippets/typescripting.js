"use strict";
exports.__esModule = true;
var msg = "yo man";
var begin = true;
var total = 22;
var main = "yaya";
var sentance = "who are you " + main + "\nI am root";
console.log(sentance);
var n = null;
var u = undefined;
var isName = null;
var list1 = [1, 24, 4];
var list2 = [1, 2];
//tuple
var person1 = ["md", 22];
//enum..
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
})(color || (color = {}));
var c = color.red;
console.log(c);
//if unsure about data type use any
var random = 10;
random = "hello random";
// let variable1: unknown = 10(variable1 as string).toLowerCase();
//does'nt initialize type unless initialized
var a;
a = 11;
//automatically sets the type when initialized
var b = 33;
//supports intellisense
var multi; //union type
multi = 2;
multi = false;
//no intellisense supports
var anytyp; // type inference
anytyp = 33;
//? can be an optional param
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 3));
function name(person) {
    console.log(person.firstName);
}
