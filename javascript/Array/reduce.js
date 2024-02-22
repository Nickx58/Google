if (!Array.prototype.reduce) {
    Array.prototype.myReduce = function (callback, initialValue) {
        let arr = this;
        let size = arr.length;
        let accumulator = initialValue === undefined ? arr[0] : initialValue;

        for (let i = initialValue === undefined ? 1 : 0; i < size; i++) {
            accumulator = callback(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
}