import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let shouldCancel = false;
        const callFetch = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(url);
                const newResponse = await response.json();
                if(shouldCancel) return;
                setData(newResponse);
                setError(null);
            } catch (error) {
                if(shouldCancel) return;
                setError(error);
                setData(null);
            }
            setIsLoading(false);
        }
        callFetch();

        return () => (shouldCancel = true)
    }, [url]);

    return {
        isLoading,
        data,
        error
    }
}

export default useFetch
