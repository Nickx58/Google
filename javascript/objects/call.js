const user = {
    name: "Nikhil",
}

function sayName(n) {
    console.log(`Hello ${this.name} you can do it ${n}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Its not callable');
    }
    context.fn = this;
    context.fn(...args);
}

sayName.myCall(user, 'soon')