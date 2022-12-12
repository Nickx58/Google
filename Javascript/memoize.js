function memoize(callback) {
  let cache = {};
  function inner(value) {
    if (cache[value]) {
      return cache[value];
    }
    const val = callback(value);
    cache[value] = val;
    return val;
  }
  return inner;
}
