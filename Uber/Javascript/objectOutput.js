/* 11)Write a function to get following output from given input
Input
myCars = {
    Nissan: Magnite,
    Tata: Nexon,
    Kia: Sonet
}
output:
{
Nissan: {
  name: Magnite,
  type: 'car'},
Tata: {
  name: Nexon,
  type: 'car'},
Kia: {
  name: Sonet,
  type: 'car'}
}
 */

const myCars = {
    Nissan: 'Magnite',
    Tata: 'Nexon',
    Kia: 'Sonet'
}

function getCar(obj) {
    const newObj = {};

    Object.keys(obj).forEach((car) => {
        newObj[car] = {
            name: obj[car],
            type: 'car'
        }
    })
    return newObj;
}

console.log(getCar(myCars));