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

async function sequentialAsync(tasks) {
    const results = [];
    const errors = [];
    for (const task of tasks) {
        try {
            const result = await task;
            results.push(result);
        } catch (error) {
            errors.push(error);
        }
    }
    return { results, errors };
}

(async () => {
    const outcome = await sequentialAsync(tasks);
    console.log("Results:", outcome.results);
    console.error("Errors:", outcome.errors);
})();
