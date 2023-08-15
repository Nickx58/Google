function promiseAllSettled(promises) {
  return new Promise(function (resolve, reject) {
    let settledCount = 0;
    const results = new Array(promises.length);

    function checkAllSettled() {
      if (settledCount === promises.length) {
        resolve(results);
      }
    }

    promises.forEach(function (promise, index) {
      Promise.resolve(promise).then(
        function (value) {
          results[index] = { status: "fulfilled", value };
          settledCount++;
          checkAllSettled();
        },
        function (reason) {
          results[index] = { status: "rejected", reason }, 
          settledCount++;
          checkAllSettled();
        }
      );
    });
  });
}

const settledPromise1 = Promise.resolve("fulfilled");
const settledPromise2 = Promise.reject("rejected");

promiseAllSettled([settledPromise1, settledPromise2]).then((results) => {
  console.log("Promise.allSettled Result:", results);
  /* Output: 
  [
    { status: 'fulfilled', value: 'fulfilled' },
    { status: 'rejected', reason: 'rejected' }
  ]
  */
});
