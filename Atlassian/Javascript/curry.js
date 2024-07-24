{
  // curry variation
  const curry = () => {
    let total = 0;

    return function (num = 0) {
      total += num;
      return total;
    };
  };

  const sum = curry();
  console.log(sum(4));
  console.log(sum(4));
}

{
  // accepting argument and sum it
  const curry = (...args) => {
    const storage = [...args];

    if (args.length === 0) {
      return 0;
    }

    const temp = function (...nextArgs) {
      storage.push(...nextArgs);

      if (nextArgs.length === 0) {
        return storage.reduce((a, b) => a + b, 0);
      } else {
        return temp;
      }
    };
    return temp;
  };

  const t = curry(10)(30)();
  console.log(t);
}

{
  // accepting a function
  const sum = (a, b, c, d) => {
    return a + b + c + d;
  };

  const curry = (fn) => {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function (...args2) {
          return curried(...args, ...args2);
        };
      }
    };
  };

  let cu = curry(sum);
  console.log(cu(10, 20, 30, 40));
  console.log(cu(10)(20, 30)(40));
}
