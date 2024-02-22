function debounce(fn, limit) {
    let timerID = null;

    return function (...args) {
        const context = this;

        clearTimeout(timerID);

        timerID = setTimeout(() => {
            fn.apply(context, args)
        }, limit)
    }
}