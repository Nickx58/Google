function deepClone(object) {
  let newObject = {};
  for (let key in object) {
    if (object[key] === "object" && object[key] !== null) {
      newObject[key] = deepClone(object[key]);
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}
