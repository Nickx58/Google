const user = {
    name: "Nikhil",
}

function sayName(n) {
    console.log(`Hello ${this.name} you can do it ${n}`);
}

Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== 'function') {
        throw new Error('This is not callable');
    }
    if (!Array.isArray(args)) {
        throw new Error('Args must be an array');
    }

    context.fn = this;
    context.fn(...args)
}

sayName.myApply(user, ['soon'])