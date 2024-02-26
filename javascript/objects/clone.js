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
{
    function deepClone(obj) {
        if (typeof obj !== 'object' || obj === null) {
            // If obj is not an object or is null, return the obj itself
            return obj;
        }

        // Create a new object or array to hold the cloned values
        const clonedObj = Array.isArray(obj) ? [] : {};

        // Iterate over the keys of the original object
        for (let key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                // Check if the key is an array
                const clonedKey = Array.isArray(key) ? [...key] : key;

                // Check if the value is a function
                if (typeof obj[key] === 'function') {
                    // Clone functions by redefining them
                    clonedObj[clonedKey] = obj[key].bind({});
                } else {
                    // Recursively clone nested objects and arrays
                    clonedObj[clonedKey] = deepClone(obj[key]);
                }
            }
        }

        return clonedObj;
    }

    // Example usage:
    const originalObj = {
        name: "Ni",
        hobbies: ["bike", "car"],
        sayHello() {
            console.log(this.name);
        },
        nested: {
            last: "sharma"
        }
    };

    const clonedObj = deepClone(originalObj);
    console.log(clonedObj);

}