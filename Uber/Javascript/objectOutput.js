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

{
  const arr = [
    { id: 1, role: "Developer" },
    { id: 2, role: "Scrum Master" },
    { id: 3, role: "Delivery Manager" },
    { id: 1, role: "Team Leader" },
    { id: 2, role: "Project Coordinator" },
  ];

  function merge(arr) {
    let obj = {};
    // group role by id
    arr.forEach((item) => {
      if (obj[item.id]) {
        obj[item.id] = [item.role, ...obj[item.id]]
      } else {
        obj[item.id] = [item.role];
      }

    })
    let roles = [];
    // convert obj to array of objects
    Object.keys(obj).forEach((item) => {
      roles.push({ id: item, role: obj[item] })
    })
    return roles;
  }
  console.log(merge(arr));
  /*
  output
  [{
  id: "1",
  role: ["Team Leader", "Developer"]
}, {
  id: "2",
  role: ["Project Coordinator", "Scrum Master"]
}, {
  id: "3",
  role: ["Delivery Manager"]
}]
  */
}