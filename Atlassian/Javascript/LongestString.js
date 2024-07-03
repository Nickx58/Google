let stringArr = ["apple", "car", "amazon", "nikhilsharma"];

function longestString(str) {
    let longString = "";
    for (let i = 0; i < str.length; i++) {
        const currentStr = str[i];
        if (currentStr.length > longString.length) {
            longString = currentStr;
        }
    }
    return longString;
}

console.log(longestString(stringArr));