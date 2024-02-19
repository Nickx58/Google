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