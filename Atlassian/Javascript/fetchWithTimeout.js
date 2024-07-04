async function fetchWithTimeout(url, duration) {
    // create a abort controller instance
    const controller = new AbortController();
    const { signal } = controller;

    // setup a timeout to abort the call
    const timer = setTimeout(() => controller.abort(), duration);

    try {
        const response = await fetch(url, { signal });

        // clear the timeout if the request is successful
        clearTimeout(timer);

        // check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        // cleartimeout in case of error
        clearTimeout(timer);
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        } else {
            throw error;
        }
    }
}

// usage

fetchWithTimeout('url', 1000).then(data => console.log(data)).catch(err => console.log(err));