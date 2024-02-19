/* 
Async basic
Async interveiew questions
Implementation
*/

// async always return a promise

{
    async function getHello() {
        return "I can and I will";
    }
    const pData = getHello();
    pData.then(res => console.log(res));

}


{
    const p = new Promise((resolve, reject) => resolve("I can and I will"));

    // await can only be used inside async function
    async function getHello() {
        const resp = await p;
        console.log(resp);
    }
}

// Important concept of the Async Await

{
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved Promise 1');
        }, 2000)
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved Promise 2');
        }, 5000)
    })

    async function getHello() {
        console.log("I can and I will");
        const resp1 = await p1;
        console.log("Hello p1");
        console.log(resp1);

        const resp2 = await p2;
        console.log("Hello p2");
        console.log(resp2);
    }

    getHello();
    // 'I can and I will'
    // 'Hello p1'
    // 'Resolved Promise 1'
    // 'Hello p2'
    // 'Resolved Promise 2'

    /*

Promise Creation:

The JavaScript engine encounters the creation of two promises p1 and p2. However, at this point, 
the callbacks inside these promises (which resolve them) are not executed immediately.
They are scheduled to be executed after the specified timeouts.

Async Function Invocation:

The getHello function is invoked. As this function is marked with the async keyword, it returns a promise automatically.
Execution of Synchronous Code Inside getHello:

The JavaScript engine starts executing the synchronous code inside getHello.
It logs "I can and I will" to the console.
Awaiting Promise p1:

The await keyword is encountered, which causes the JavaScript engine to pause execution of the getHello function.
The engine starts waiting for p1 to resolve. Meanwhile, it allows other asynchronous tasks to execute.
Resolution of Promise p1:

After 5 seconds, the callback function inside p1 resolves the promise with the value 'Resolved Promise 1'.
The JavaScript engine resumes the execution of the getHello function.
It logs "Hello p1" to the console, followed by the resolved value of p1 (resp1), which is 'Resolved Promise 1'.
Awaiting Promise p2:

Next, the await keyword is encountered again, causing the JavaScript engine to pause execution of the getHello function once more.
It waits for p2 to resolve, while allowing other asynchronous tasks to proceed.
Resolution of Promise p2:

After 3 more seconds (total 8 seconds), the callback function inside p2 resolves the promise with the value 'Resolved Promise 2'.
The JavaScript engine resumes the execution of the getHello function again.
It logs "Hello p2" to the console, followed by the resolved value of p1 (resp1),
which is 'Resolved Promise 1'. (Note: It should log resp2 instead of resp1 to show the resolved value of p2)

 */

}