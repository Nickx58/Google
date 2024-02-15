// remove all falsy values from object and array;

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    function check(obj) {
        if (!obj) return false;
        if (typeof obj !== 'object') {
            return obj;
        }
        if (Array.isArray(obj)) {
            const newArr = [];
            for (let i = 0; i < obj.length; i++) {
                const curr = obj[i];
                const resp = check(curr);
                if (resp) {
                    newArr.push(resp)
                }
            }
            return newArr;
        }
        const newObj = {};
        for (const key in obj) {
            const resp = check(obj[key]);
            if (resp) {
                newObj[key] = resp;
            }
        }
        return newObj;
    }
    return check(obj);
};