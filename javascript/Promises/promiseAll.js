function allPromise(promises) {
}

function fn1() {
}

function fn2() {
}

allPromise([fn1(), fn2()]).then((response) => {
  console.log(response);
});