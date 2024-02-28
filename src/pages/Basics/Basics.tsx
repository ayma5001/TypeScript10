// TYPESCRIPT AUTOMATICALLY ASSIGNS A TYPE WHEN YOU DEFINE A VARIABLE
let variable = "Hello developers";

variable = "Welcome In This tutorials";

let age = 33;

// EXPLICITLY PROVIDING A TYPE
let numberWithType: number = 40;

numberWithType = 40;

// BASIC TYPES

let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

let list: number[] = [1, 2, 3];
// or
let list: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10]; // OK

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

function warnUser(): void {
  console.log("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
  throw new Error(message);
}

declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK

// MULTIPLE TYPES (UNION TYPES)
let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";
// testStringOrNumber = []

let names = ["john", "jane", "tom"];

names.push("mike");

let numbers = [11, 22, 35];

numbers.push(92);

let testStringArray: string[];

testStringArray = ["one", "two", "three"];

let testNumberArray: number[];

testNumberArray = [12, 55, 23];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, "two", 3];

// FUNCTIONS
let sayHi = () => {
  console.log("Hi, welcome");
};

// sayHi = "hi"

let funcReturnString = (): string => {
  return "Mahmoud";
};

let multiple = (num: number) => {
  return num * 2;
};
let multiple2 = (num: number): number => {
  return num * 2;
};
let multiple3 = (num: number): void => {
  // return num * 2;
  //Do sth but don't return
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum(2, 3);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

// TYPE ALIASES
type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

//FUNCTION SIGNATURES
type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + " times " + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "john",
  age: 43,
  // theme:"pink"
  theme: "dark",
};

//// INTERFACES
// Be aware no equal sign
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
  employeeId: 1,
};

const client: IUser = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
};

// GENERICS

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
const testMe: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<{ id: number }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1 }],
};

const testMe3: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "john" }],
};

const testMe4: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "cat" }],
};

// OBJECTS
let user = {
  username: "john",
  age: 22,
  isAdmin: false,
};

user.username = "jane";
user.age = 29;
user.isAdmin = true;

// user.phone = "+12345678"

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "john",
  age: 23,
  isAdmin: true,
  // phone:"+1234567"
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "jane",
  age: 43,
  isAdmin: false,
  phone: "+1234567",
};

//// ANY TYPES
let testAny: any;

testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, "two", false, []];

let testArray: any[];

testArray = [1, 2, 3, true, "mahmoud"];

//example to F.C Function
import React, { FC } from "react";

type MyComponentProps = {
  message: string;
};

const MyComponent: FC<MyComponentProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default MyComponent;
