if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArgs) {
    const arr = this;
    const length = arr.length;
    const result = new Array(length);
    for (let i = 0; i < length; i++) {
      result[i] = callback.call(thisArgs, arr[i], i, arr);
    }
    return result;
  };
}
