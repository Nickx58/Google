// Implement a custom Array function, Array.prototype.square()
// which creates a new array with the results of squaring every element within the array the .square() method is called on.

/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray[i] = this[i] * this[i];
    }
    return newArray;
};