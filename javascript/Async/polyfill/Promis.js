function PromisePolyFill(executor) {
    let onResolve;
    let onReject;
    let fulfilled = false;
    let rejected = false;
    let called = false;
    let value;

    function resolve(v) {
        fulfilled = true;
        value = v;

        if (typeof onResolve === 'function') {
            onResolve(value);
            called = true;
        }
    }

    function reject(reason) {
        rejected = true;
        value = reason;

        if (typeof onReject === 'function') {
            onReject(value);
            called = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;

        if (fulfilled & !called) {
            called = true;
            onResolve(value)
        }
        return this;
    }

    this.catch = function (callback) {
        onReject = callback;

        if (rejected && !called) {
            called = true;
            onReject(value);
        }
        return this;
    }

    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error);
    }
}

const p1 = new PromisePolyFill((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        resolve("I can")
    }, 1000);
    console.log(2);
})

p1.then((data) => {
    console.log(data);
})