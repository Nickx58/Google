if (!Array.prototype.filter) {
    Array.prototype.myFilter = function (callback, thisArgs) {
        const arr = this;
        const size = arr.length;

        const result = [];

        for (let i = 0; i < size; i++) {
            if (callback.call(thisArgs, arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}