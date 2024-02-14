/* 
In this file we will add general method of the object
Like how to iterate over object. Add property or answer any tricky question
*/

let user = {
    name: 'Nikhil',
    age: 29
}

for(let key in user) {
    console.log(key);
    console.log(user[key])
}