const URL = "https://www.google.com";

fetch(URL).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err)
})

// Promise chainning
{
    const URL = "https://www.google.com";
    fetch(`${URL}/1`).then(function (resp1) {
        console.log('response 1');
        return fetch(`${URL}/2`)
    }).then(function (resp2) {
        console.log('response 2');
        return fetch(`${URL}/3`);
    }).then(function (resp3) {
        console.log('response 3');
    }).catch(function (err) {
        console.log(err)
    })
}

// Promise ALL
{

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P1 success')
        }, 1000)
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P2 success")
        }, 2000)
    })

    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P3 success")
        }, 3000)
    })

    Promise.all([p1, p2, p3]).then((data) => {
        console.log(data);
    }).catch(err => {
        console.log(err)
    })
}

// make a function to resolve promise using recursion
{
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Google")
        }, 1000)
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Amazon")
        }, 2000)
    })

    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Microsoft")
        }, 3000)
    })

    function promiseRec(pro) {
        if (pro.length === 0) {
            return "Provide some function to execute"
        }

        const p = pro.shift();
        p.then((res) => console.log(res)).catch(err => console.error(err));

        promiseRec(pro)

    }

    promiseRec([p1, p2, p3]);
}