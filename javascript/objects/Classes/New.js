/*
The new keyword does 4 things
1. Creates an empty object
2. Sets the keyword this to be that object
3. Return the object-return this.
4. Creates a link to the object prototype
*/

function Dog(name, age) {
    this.name = name;
    this.age = age;
}

const sheru = new Dog('sheru', 10)