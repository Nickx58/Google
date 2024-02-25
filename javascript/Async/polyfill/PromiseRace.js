function promiseRace(promises) {
    return new Promise(function (resolve, reject) {
        promises.forEach(function (promise) {
            Promise.resolve(promise).then(resolve, reject)
        })
    })
}

const racePromise1 = new Promise((resolve) => setTimeout(resolve, 2000, 'one'));
const racePromise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'two'));

promiseRace([racePromise1, racePromise2]).then((value) => {
    console.log('Promise.race Result:', value); // Output: 'two'
});