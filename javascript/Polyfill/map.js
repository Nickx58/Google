if(!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback, initialValue) {
        const arr = this;
        const length = arr.length;
        let accumulator = initialValue === undefined ? arr[0] : initialValue;

        for(let i = initialValue === undefined ? 1 : 0 ; i<length; i++) {
            accumulator = callback(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
}