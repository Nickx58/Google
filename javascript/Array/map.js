if (!Array.prototype.map) {
    Array.prototype.myMap = function (callback, thisArgs) {
        const arr = this;
        const size = arr.length;

        let result = new Array(size);

        for (let i = 0; i < size; i++) {
            result[i] = callback.call(thisArgs, arr[i], i, arr);
        }
        return result;
    }
}