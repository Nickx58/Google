function Animal(name, energy) {
    this.name = name;
    this.energy = energy;
}

Animal.prototype.play = function() {
    console.log(this.name+ " is playing");
}

const tom = new Animal("Tommy", 100)

// class base version
class Animals {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    play() {
        console.log(this.name+ " is playing");
    }
}

const tom2 = new Animal("Tommy", 100);

tom2.play();