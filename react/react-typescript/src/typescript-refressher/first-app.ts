/* eslint-disable @typescript-eslint/no-unused-vars */
// Types in TypeScript

let userName: string;
userName = "Nikhil";

let userID: string | number = 'ac';

let hobbies: Array<string>;
//let hobbies: string[];
hobbies = ["Cricket", "Riding"]

// function type

function add(a: number, b: number) : number {
    return a+b;
}

function calculate(a:number, b:number, calc:(a:number,b:number) => number): void {
    calc(a,b);
}

calculate(5,10,add);