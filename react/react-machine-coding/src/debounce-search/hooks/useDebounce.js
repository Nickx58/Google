import { useRef, useCallback } from "react";

const useDebounce = (fn, delay) => {
    const timer = useRef(null);

    const debounceFunction = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }, [fn, delay]);

    return debounceFunction;
}

export default useDebounce;
