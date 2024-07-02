/*
Implement a function findIndex(array, predicate, [fromIndex=0]) that takes an array of values,
a function predicate, and an optional fromIndex number argument,
and returns the index of the first element in the array that satisfies the provided testing function predicate.

*/

export default function findIndex(array, predicate, fromIndex = 0) {
    const length = array.length;
    const index = fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);
    for (let i = index; i < array.length; i++) {
        const number = predicate(array[i], i, array);
        if (number) {
            return i;
        }
    }
    return -1;
}