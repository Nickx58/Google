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