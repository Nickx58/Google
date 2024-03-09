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

{
    /*
[{
  count: 2,
  victim: "React"
}, {
  count: 1,
  victim: "Angular"
}, {
  count: 2,
  victim: "Php"
}, {
  count: 1,
  victim: "Vue"
}]
    */
    const arr = [
        {
            tech: 'React', vulnerability: true
        }, {
            tech: 'Angular', vulnerability: true
        },
        {
            tech: 'React', vulnerability: false
        },
        {
            tech: 'Php', vulnerability: false
        },
        {
            tech: 'Vue', vulnerability: true
        },
        {
            tech: 'Php', vulnerability: false
        }
    ]

    function returnCount(arr) {
        const obj = {};
        arr.forEach((el) => {
            const key = el.tech;
            if (el.tech) {
                obj[key] = (obj[key] || 0) + 1;
            } else {
                obj[key] = (obj[key] || 0) + 1;
            }
        })
        const n = [];
        Object.keys(obj).map((item) => {
            n.push({ victim: item, count: obj[item] });
        })
        return n;
    }

    console.log(returnCount(arr));

}