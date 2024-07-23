Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitalValue = initialValue === undefined;
  if (noInitalValue && this.length === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let acc = noInitalValue ? this[0] : initialValue;
  let startingIndex = noInitalValue ? 1 : 0;

  for (let i = startingIndex; i < this.length; i++) {
    acc = callbackFn(acc, this[i], i, this);
  }
  return acc;
};
