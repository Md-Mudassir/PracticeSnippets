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

// let variable1: unknown = 10(variable1 as string).toLowerCase();

//does'nt initialize type unless initialized
let a;
a = 11;

//automatically sets the type when initialized
let b = 33;

//supports intellisense
let multi: number | boolean; //union type
multi = 2;
multi = false;

//no intellisense supports
let anytyp: any; // type inference
anytyp = 33;

//? can be an optional param
function add(num1: number, num2?: number): number {
  return num1 + num2;
}
console.log(add(5, 3));

interface Person {
  firstName: string;
  lastName: string;
}

function name(person: Person) {
  console.log(person.firstName);
}
