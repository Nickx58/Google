import { Box, Heading, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce";

const DebounceSearch = () => {
    const [query, setQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

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
            const result = await fetch(`https://rickandmortyapi.com/api/character/?name=${val}`);
            const data = await result.json();
            if (data) {
                console.log(data);
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    useEffect(() => {
        if (searchQuery) {
            console.log(`Searching for ${searchQuery}`);
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
        </Box>
    );
}

export default DebounceSearch;
