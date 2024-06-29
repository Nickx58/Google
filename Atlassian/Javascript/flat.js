let array = [1, [2, 3], 4, [5, 6, [7, 8, 9]], 10];

function flatArray(arr, newArray = []) {
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flatArray(item, newArray);
        } else {
            newArray.push(item);
        }
    });
    return newArray;
}

console.log(flatArray(array));