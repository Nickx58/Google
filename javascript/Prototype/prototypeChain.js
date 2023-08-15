function Animal(name) {
  this.name = name;
}

Animal.prototype.play = function () {
  console.log(`${this.name} is playing `);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("bark bark");
};

const sheru = new Dog("Sheru", "labradog");

sheru.play();
sheru.bark();

class Animal {
  constructor(name) {
    this.name = name;
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("bark bark");
  }
}

const sheru = new Dog("Sheru", "labradog");
sheru.play();
sheru.bark();
