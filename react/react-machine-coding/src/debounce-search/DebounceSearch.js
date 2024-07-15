import { Box, Heading, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce";
import './style.css'

const DebounceSearch = () => {
    const [query, setQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const debouncedSearch = useDebounce((query) => {
        setSearchQuery(query);
    }, 1000);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        debouncedSearch(value);
    };

    const fetchData = async (val) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${val}`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.results) {
                    setResults(data.results);
                }
            } else {
                if (response.status === 404) {
                    setError('No Result Found')
                }
            }
        } catch (error) {
            setError('Please try again later');
        }
    }

    useEffect(() => {
        if (searchQuery) {
            fetchData(searchQuery)
        }
    }, [searchQuery]);

    return (
        <Box>
            <Heading>
                Search With Debounce
            </Heading>
            <Input
                type="text"
                placeholder="Search Character"
                value={query}
                onChange={handleChange}
            />
            {error && <div>{error}</div>}
            {results.length > 0 && (
                <div className="search-result">
                    {results.map((result) => {
                        return (
                            <div key={result.id}>
                                <p style={{ textAlign: "center" }}>{result.name}</p>
                                <img src={result.image} alt={result.name} />
                            </div>
                        )
                    })}
                </div>
            )}
        </Box>
    );
}

export default DebounceSearch;
