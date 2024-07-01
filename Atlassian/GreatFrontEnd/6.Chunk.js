/*
Lodash's Chunk method
Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array.
*/

export default function chunk(array, size = 1) {
    if (!Array.isArray(array) || size < 1) {
        return [];
    }

    const result = [];

    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return chunk;
}