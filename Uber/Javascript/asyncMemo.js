// How can I implement memoize method on an async function in JavaScript?

function memoAsync(asynFunc) {
    const cache = new Map();

    return async function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = await asynFunc(...args);
        cache.set(key, result);
        return result;
    }
}

const fetchData = async (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url, 'fetch data')
        }, 2000)
    })
}

const cachedFunc = memoAsync(fetchData);
cachedFunc('aa').then((data) => console.log(data));