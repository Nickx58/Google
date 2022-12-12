function debounce(callback, delay) {
  let timer;
  return function () {
    let args = arguments;
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}
