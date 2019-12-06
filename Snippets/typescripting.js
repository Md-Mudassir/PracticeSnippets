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
