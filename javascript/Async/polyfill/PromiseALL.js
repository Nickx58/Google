function PromiseAll(promises) {
    return new Promise(function (resolve, reject) {
        let settledCount = 0;
        let results = new Array(promises.length);

        promises.forEach(function (promise, index) {
            Promise.resolve(promise).then(function (result) {
                results[index] = result;
                settledCount++;

                if (settledCount === promises.length) {
                    resolve(results)
                }
            }, reject);
        });
    });
};

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 2));
const promise3 = Promise.resolve(3);

PromiseAll([promise1, promise2, promise3]).then((values) => {
    console.log('Promise.all Result:', values); // Output: [1, 2, 3]
});