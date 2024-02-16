// This keyword in details

// global 

console.log(this) // this will point to the global object

// called with respect to window object

function gFunction() {
    console.log(this);
}

gFunction(); // will point to global this (in Strict Mode it will be undefined)
window.gFunction(); // point to global this aka window object

// called with respect to object

let obj1 = {
    name: "Nikhil",
    age: 29,
    sayHi() {
        console.log(this);
    }
}

obj1.sayHi() // this will point to obj1 object

// called with respect to window by passing reference

const ref = obj1.sayHi;
ref(); // point to global object