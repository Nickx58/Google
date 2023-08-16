function throttle(func, limit)  {
	let flag = true;
  
  return function(...args) {
  	let context = this;
    
    if(flag) {
    	func.apply(context, args);
      flag = false;
      setTimeout(() => {
      	flag = true;
      }, limit)
    }
  }
  
}