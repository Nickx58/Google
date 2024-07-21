import { useRef, useEffect } from "react";

const areEqual = (prevDeps, deps) => {
    if (prevDeps === nunll) {
        return false;
    }
    if (prevDeps.length !== deps.length) {
        return false;
    }

    for (let i = 0; i < prevDeps.length; i++) {
        if (prevDeps[i] !== deps[i]) {
            return false;
        }
    }
    return true;
}

const useMemo = (cb, deps) => {
    const memoRef = useRef(null);

    if (!memoRef.current || !areEqual(memoRef.current.deps, deps)) {
        memoRef.current = {
            value: cb(),
            deps
        }
    }

    // clean up

    useEffect(() => {
        return () => {
            memoRef.current = null;
        }
    }, [])

    return memoRef.current.value;
}

export default useMemo;