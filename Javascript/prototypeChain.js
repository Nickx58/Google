function Animal(name) {
  this.name = name;
}

Animal.prototype.play = function () {
  console.log(`${this.name} can play`);
};

function Dog(name, type) {
  Animal.call(this, name);
  this.type = type;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log("woaf");
};

Dog.prototype.constructor = Dog;

const sheru = new Dog("Sher", "Dog");

sheru.bark();
sheru.play();

// class Way

class Animal {
  constructor(name) {
    this.name = name;
  }

  play() {
    console.log(`${this.name} can play`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log("woaf");
  }
}

const sheru = new Dog("sheru", "labradog");
sheru.bark();
sheru.play();
