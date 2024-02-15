const user = {
    name: "Nikhil",
}

function sayName(n) {
    console.log(`Hello ${this.name} you can do it ${n}`);
}

Function.prototype.myBind = function(context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Its not callable');
    }
    context.fn = this;
    return function(...newArgs) {
        return context.fn(...newArgs,...args)
    }
}

const b = sayName.myBind(user, 'soon')
b();