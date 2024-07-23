{
  // Resolved example.
  const p0 = Promise.resolve(3);
  const p1 = 42;
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 100);
  });

  function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
      let results = [];

      let resolved = iterable.length;

      if (resolve === 0) {
        resolve(results);
        return;
      }

      iterable.forEach(async (item, index) => {
        try {
          const result = await item;
          results[index] = result;

          resolved -= 1;

          if (resolved === 0) {
            resolve(results);
          }
        } catch (error) {
          reject(error);
        }
      });
    });
  }
  promiseAll([p0, p1, p2]).then((result) => console.log(result));
}

{
  /**
   * @param {Array} iterable
   * @return {Promise<Array>}
   */
  function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
      const results = new Array(iterable.length);
      let unresolved = iterable.length;

      if (unresolved === 0) {
        resolve(results);
        return;
      }

      iterable.forEach(async (item, index) => {
        try {
          const value = await item;
          results[index] = value;
          unresolved -= 1;

          if (unresolved === 0) {
            resolve(results);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }
}
