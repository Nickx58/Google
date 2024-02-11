class Circle {
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    getRadius() {
        return this.#radius;
    }
}

const myCircle = new Circle(10);
// myCircle.#radius // give error -> cannot access private field
myCircle.getRadius()
