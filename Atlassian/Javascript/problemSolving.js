{
  const input = {
    A: (a, b, c) => a + b + c,
    B: (a, b, c) => a - b - c,
    C: (a, b, c) => a * b - c,
    D: {
      E: (a, b, c) => a * b * c,
    },
  };

  const compute = (input, a, b, c) => {
    const temp = {};
    for (let i in input) {
      const key = input[i];
      if (typeof key === "object") {
        temp[i] = compute(key, a, b, c);
      } else {
        const val = key(a, b, c);
        temp[i] = val;
      }
    }
    return temp;
  };

  console.log(compute(input, 1, 1, 1));
  /*
  {
    A: 1,
    B: -1,
    C: 0,
    D: {
        E: 1
    }
  }

  */
}
