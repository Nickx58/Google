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

Dog.prototype.play = function() {
    return `${this.name} can bark wolf wolf`;
}

const sheru = new Dog('sheru', 10)

const grandParent = {
    greet() {
        return 'Hello'
    }
}

const parent = {
    sing() {
        return 'LALA'
    },
    __proto__: grandParent
}

const child = {
    __proto__: parent
}