function myMemo(fn, context) {
    const cache = {};

    return function (...args) {
        let keys = JSON.stringify(args);
        if (!cache[key]) {
            cache[keys] = fn.call(context || this, ...args);
        }
        return cache[keys];
    }
}

const square = (a, b) => {
    for (let i = 0; i < 10000; i++) {

    }
    return a + b;
}

const memoSquare = myMemo(square);
console.time("First Call");
console.log(memoSquare(5, 4));
console.timeEnd("Firsr call")