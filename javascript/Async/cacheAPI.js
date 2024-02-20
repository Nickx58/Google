export async function cachedFetch(url) {
    const cacheKey = JSON.stringify({ url });

    setTimeout(() => {
        localStorage.removeItem(cacheKey);
    }, 5000)

    const cachedResponse = localStorage.getItem(cacheKey);
    if (cachedResponse) {
        return JSON.parse(cachedResponse);
    } else {
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify(data));
        return data;
    }
}