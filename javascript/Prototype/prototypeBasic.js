function createBike(name, modal) {
    this.name = name;
    this.modal = modal;
}

const newBike = new createBike('Scram', '411');

createBike.prototype.logName = function() {
    console.log(this.name);
}

newBike.logName();

// New Syntax
// Class Based

class Bike {
    constructor(name, modal) {
        this.name = name;
        this.modal = modal;
    }

    logName() {
        console.log(this.name);
    }
}

const scram = new Bike('Himalayan', '450')
scram.logName();