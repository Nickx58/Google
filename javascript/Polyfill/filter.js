if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArgs) {
    const arr = this;
    const length = arr.length;
    const result = [];

    for (let i = 0; i < length; i++) {
      if (callback.call(thisArgs, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  };
}
