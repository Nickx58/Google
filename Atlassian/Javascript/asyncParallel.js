function createAsync() {
    const value = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value < 4) {
                reject(value);
            } else {
                resolve(value);
            }
        }, value * 1000);
    })
}

const tasks = [
    createAsync(),
    createAsync(),
    createAsync(),
    createAsync(),
    createAsync()
]

function parallelAsynce(tasks, callback) {
    let completed = 0;
    let results = [];
    let errors = [];

    tasks.forEach((task) => {
        task.then((val) => results.push(val))
            .catch((err) => errors.push(err))
            .finally(() => {
                completed++;
                if (completed === tasks.length) {
                    callback(errors, results);
                }
            })
    })
}

parallelAsynce(tasks, (error, results) => {
    console.error(error);
    console.log(results);
})