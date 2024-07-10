// Implement a function objectMap(obj, fn) to return a new object containing the results of calling a
//provided function on every value in the object. The function fn is called with a single argument,
//the value that is being mapped/transformed.

const double = (x) => x * 2;
objectMap({ foo: 1, bar: 2 }, double); // => { foo: 2, bar: 4}

/**
 * @param {Object} obj
 * @param {Function} fn
 * @returns Object
 */
export default function objectMap(obj, fn) {
    const result = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = fn.call(obj, obj[key]);
        }
    }
    return result;
}