function once(func) {
    let alreadyCalled = false;
    let result;
  
    return function (...args) {
      if (!alreadyCalled) {
        result = func.apply(this, args);
        alreadyCalled = true;
      }
      return result;
    };
  }
  
  // Example usage
  function myFunction() {
    console.log("Function called");
    return 42;
  }
  
  const myFunctionOnce = once(myFunction);
  
  console.log(myFunctionOnce()); // Outputs: Function called \n 42
  console.log(myFunctionOnce()); // Outputs: 42
  