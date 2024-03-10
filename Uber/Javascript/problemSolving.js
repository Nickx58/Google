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

{
    /*
    Add all the numbers in the string
    const str = "AB_12_CD_23_EF_30"
    */
    const str = "AB_12_CD_23_EF_30"

    const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    function addNumber(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            if (numArr.includes(str[i])) {
                let n = parseInt(str[i])
                sum += n;
            }
        }
        return sum;
    }

    console.log(addNumber(str));
}

{
    // javascript coding question   Input: “today is monday” Outptut: “Today Is Monday”  
    const str = "today is monday";

    function strCase(str) {
        let arr = str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i].split('');
            temp[0] = temp[0].toUpperCase();
            let a = temp.join('');
            arr[i] = a;
        }
        return arr.join(' ');
    }
}

{
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }
    function collectStrings(obj) {
        let arr = [];

        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                let ans = collectStrings(obj[key]);
                arr.push(...ans);
            } else {
                arr.push(obj[key]);
            }
        }
        return arr;
    }
    const result = collectStrings(obj);
    console.log(result); // ['foo', 'bar', 'baz']
}