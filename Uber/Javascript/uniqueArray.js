const cars = {
    car1: ["santro", "i20", "maruti"],
    car2: ["i20", "virtus", "polo", "santro"],
}

function getUnique(obj) {
    let newArr = [];

    Object.keys(obj).map((car) => {
        obj[car].map((el) => {
            newArr.push(el);
        })
    })
    const unique = {};
    return newArr.filter((car) => {
        if (unique[car]) {
            return false;
        }
        unique[car] = true;
        return true;
    })
}

console.log(getUnique(cars)); // ["santro", "i20", "maruti", "virtus", "polo"]

// using set 
{
    const cars = {
        car1: ["santro", "i20", "maruti"],
        car2: ["i20", "virtus", "polo", "santro"],
    }

    function getUnique(obj) {
        let newArr = [];

        Object.keys(obj).map((car) => {
            obj[car].map((el) => {
                newArr.push(el);
            })
        })
        const unique = [...new Set(newArr)];
        return unique;
    }
}