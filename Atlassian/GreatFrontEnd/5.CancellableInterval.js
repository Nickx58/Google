/*
Implement a function setCancellableInterval, that acts like setInterval but instead of returning a timer ID,
it returns a function that when called, cancels the interval.
The setCancellableInterval function should have the exact same signature as setInterval:
*/

/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
    const id = setInterval(callback, delay, ...args);
    return () => {
        clearInterval(id);
    }
}