/*
Implement a function fromPairs(pairs) that transforms a list of key-value pairs into an object.

const pairs = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];

fromPairs(pairs); // => { a: 1, b: 2, c: 3 }

*/

// my solution
export default function fromPairs(pairs) {
    const obj = {};

    for (let i = 0; i < pairs.length; i++) {
        for (let j = 0; j < pairs[i].length - 1; j++) {
            obj[pairs[i][j]] = pairs[i][j + 1];
        }
    }
    return obj;
}

// there solution
export default function fromPairs(pairs) {
    const result = {};

    for (const [key, value] of pairs) {
        result[key] = value;
    }

    return result;
}

export default function fromPairs(pairs) {
    return Object.fromEntries(pairs);
}