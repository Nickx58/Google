Function.prototype.myBind = function (thisArgs, ...argsArray) {
  const context = this;

  return function (...args) {
    return context.apply(thisArgs, [...argsArray, ...args]);
  };
};
