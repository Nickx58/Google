Array.prototype.myReduce = function(callback, initialValue) {
    const acculumator  = initialValue;
    for(let i = 0; i<this.length; i++) {
        if(i === 0 && initialValue === undefined) {
            acculumator = this[i];
        } else {
            acculumator = callback(acculumator, this[i],i,this);
        }
    }
    return acculumator;
}
