function curry(callback) {
  // Write your code here.
  const curriedCallback = (...args) => {
    if (args.length === 0) {
      return callback();
    }

    return (...otherArgs) => {
      if (otherArgs.length === 0) {
        return callback(...args);
      }
      return curriedCallback(...args, ...otherArgs);
    };
  };
  return curriedCallback;
}

const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);

const curriedSum = curry(sum);

curriedSum(); // 0
curriedSum(1)(); // 1
curriedSum(1)(2)(); //3
