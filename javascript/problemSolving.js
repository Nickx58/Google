{
    function MyNumber(value) {
        if (!(this instanceof MyNumber)) {
            return new MyNumber(value);
        }
        this.value = value;
    }

    MyNumber.prototype.addTwo = function () {
        this.value += 2;
        return this;
    };

    MyNumber.prototype.addThree = function () {
        this.value += 3;
        return this;
    };

    MyNumber.prototype.print = function () {
        console.log(this.value);
        return this;
    };

    // Usage
    MyNumber(10).addTwo().addThree().print(); // Outputs: 15

}