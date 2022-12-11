Array.prototype.myMap = function(callback) {
    const output = [];
    for(let i = 0; i<this.length; i++) {
        output.push(callback(this[i],i,this)); // this[i] -> current element, i -> index, this -> array;
    }
    return output;
}