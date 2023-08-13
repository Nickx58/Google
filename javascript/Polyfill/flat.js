function flat(arr, depth = 1) {
    let newArray = [];
    for(let item of arr) {
      if(Array.isArray(item) && depth > 0) {
        const flatted = flat(item, depth - 1);
        for(const items of flatted) {
          newArray.push(items)
        }
      } else {
        newArray.push(item);
      }
    }
    return newArray;
  }