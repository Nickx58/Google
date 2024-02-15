/* 

How to clone object
Deep clone vs shallow 
Polyfill for the deep clone method

*/

function deepClone(obj) {
    const newObj = {};
    for (let key in obj) {
        if (typeof key === 'object' && obj[key] !== null) {
            newObj[key] = deepClone(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

/*
Shallow Clone:
A shallow clone creates a new object that has the same properties as the original object, but the properties themselves are not cloned.
This means that if the original object contains nested objects or arrays,
the shallow clone will still reference those nested objects and arrays.
Changes made to nested objects in the clone will affect the original object, and vice versa
*/

{
    const shallowClone = Object.assign({}, originalObject);
}

{
    const shallowClone = { ...originalObject };
}

/*
A deep clone creates a new object where all properties and nested properties are cloned recursively.
This ensures that changes made to the cloned object or its nested properties do not affect the original object.
*/

{
    const deepClone = JSON.parse(JSON.stringify(originalObject));

}