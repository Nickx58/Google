class Bike {
  constructor(type) {
    this.type = type;
  }
  getType() {
    console.log(`I'm a ${this.type} bike`);
  }
}

class Scram extends Bike {
  constructor(type, name) {
    super(type);
    this.name = name;
  }
  sayHello() {
    console.log(`Hi ${this.name} nice to meet you`);
  }
}

const scram = new Scram("ADV", "Scram411");
scram.getType();
scram.sayHello();
