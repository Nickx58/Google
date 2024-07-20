function countNumber(collection) {
    let count = 0;

    if (!collection.length) {
        return count;
    }

    for (let i = 0; i < collection.length; i++) {
        const curr = collection[i];
        if (typeof curr === 'number') {
            count++;
        } else if (Array.isArray(curr)) {
            count += countNumber(curr);
        }
    }
    return count;
}

console.log(countNumber([1, [2], "2", [3, [4, 5]]]));
