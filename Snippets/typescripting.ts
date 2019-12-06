export {};
let msg = "yo man";

let begin: boolean = true;
let total: number = 22;
let main: string = "yaya";

let sentance: string = `who are you ${main}
I am root`;

console.log(sentance);

let n: null = null;
let u: undefined = undefined;

let isName: boolean = null;

let list1: number[] = [1, 24, 4];
let list2: Array<number> = [1, 2];

//tuple
let person1: [string, number] = ["md", 22];

//enum..
enum color {
  red,
  blue
}
let c: color = color.red;
console.log(c);

//if unsure about data type use any
let random: any = 10;
random = "hello random";
