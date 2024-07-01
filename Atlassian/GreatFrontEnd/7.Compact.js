/*
Implement a function compact(array) that creates an array with all falsey values removed.
The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).
*/

// my solution
/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
    return array.filter(item => {
        if (item !== undefined || item !== '' || item !== NaN || item !== 0 || item !== false) {
            return item;
        }
    });
}

// there solution
/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i];

        // Skip falsey values
        if (value) {
            result.push(value);
        }
    }

    return result;
}
