/*
Share a single global instance throughout our application
With the Singleton Pattern, we restrict the instantiation of certain classes to one single instance.
This single instance is unmodifiable, and can be accessed globally throughout the application.
singleton can be shared globally across multiple files within the application.
The imports of this Singleton all reference the same instance.
*/

let instance;

// 1. Creating the `Counter` class, which contains a `constructor`, `getInstance`, `getCount`, `increment` and `decrement` method.
// Within the constructor, we check to make sure the class hasn't already been instantiated.
class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!");
        }
        this.counter = counter;
        instance = this;
    }

    getCount() {
        return this.counter;
    }

    increment() {
        return ++this.counter;
    }

    decrement() {
        return --this.counter;
    }
}

// 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// This ensures that the newly created instance is not modifiable.
const singletonCounter = Object.freeze(new Counter());

// 3. Exporting the variable as the `default` value within the file to make it globally accessible.
export default singletonCounter;

/*
Tradeoffs

Pros:
Memory: Restricting the instantiation to just one instance could potentially save a lot of memory space.
Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance,
which is referenced throughout the application.

Cons:
Unnecessary: ES2015 Modules are singletons by default. We no longer need to explicitly create singletons to achieve this global,
non-modifiable behavior.



*/