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

/*
One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”,
whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
*/
{

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

// The call structuredClone(object) clones the object with all nested properties.

let clone = structuredClone(user);
}