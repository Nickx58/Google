const searchImages = async(query) => {
    const url = new URL('https://api.unsplash.com/search/photos');
    const params = {
        query
    }
    url.search = new URLSearchParams(params).toString();
   const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Client-ID ecf680a62841f3ace68efeb07e075c11b77fb8b5b5e83d6b3b2fbc5d3953974a'
        })
    })
    const data = await response.json();
    return data.results;
}

export default searchImages