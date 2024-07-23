export default function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

/*
You may be tempted to use func(...args) but this will be lost if callback functions are invoked that way.
Hence we have use Function.prototype.apply()/Function.prototype.call() which allows us to specify this as the first argument.

*/
