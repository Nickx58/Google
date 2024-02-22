// curring in js
// example f(a,b) -> f(a)(b)

{
    function f(a) {
        return function (b) {
            console.log(a, b);
        }
    }

    console.log(f(1)(2));
}

// sum (2)(6)(1);
{
    function sum(a) {
        return function (b) {
            return function (c) {
                return a + b + c
            }
        }
    }
}

// evaluate("sum")(4)(2) = 6
// evaluate("multiplye")(4)(2) = 8;

{
    function evaluate(operation) {
        return function (a) {
            return function (b) {
                if (operation === 'sum') {
                    return a + b;
                } else if (operation === 'multiply') {
                    return a * b
                }
            }
        }
    }
}

// infinite currying -> sum(1)(2)(3).....(n);

{
    function add(a) {
        return function (b) {
            if (b) return add(a + b);
            return a;
        }
    }
    add(1)(2)();
}

// convert a normal func into curry func fn(a,b) -> fn(a)(b);
{
    function curry(func) {
        return function curriedFn(...args) {
            if (args.length >= func.length) {
                return func(...args);
            } else {
                return function (...next) {
                    return curriedFn(...args, ...next)
                }
            }
        }
    }
}