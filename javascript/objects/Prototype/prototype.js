function Animal(name) {
    this.name = name;
}

Animal.prototype.play = function () {
    console.log(`${this.name} can play`);
}

const leo = new Animal("Leo");
leo.play();

// class Syntax
{
    class Animal {
        constructor(name) {
            this.name = name
        }

        play() {
            console.log(`${this.name} can play`);
        }
    }
    const leo = new Animal('leo');
    leo.play();
}