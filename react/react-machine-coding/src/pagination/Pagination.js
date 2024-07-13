import React, { useState, useEffect } from "react";
import { Box, Grid, Card, CardBody, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchProducts = async () => {
        const resp = await fetch('https://dummyjson.com/products?limit=100');
        const data = await resp.json();

        if (data && data.products) {
            setProducts(data.products);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [page])

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
            setPage(selectedPage)
        }
    }

    return (
        <Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={2} padding={10}>
                {products.length > 0 && products.slice(page * 10 - 10, page * 10).map((item) => {
                    return (
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    height={200}
                                    src={item.thumbnail}
                                    alt={item.title}
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{item.title}</Heading>
                                    <Text>
                                        {item.description}
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    )
                })}
            </Grid>
            {products.length > 0 && (
                <Box textAlign={'center'}>
                    <Button onClick={() => selectPageHandler(page - 1)} margin={5}>Prev</Button>
                    {[...Array(products.length / 10)].map((_, i) => {
                        return <Button key={i} style={{ color: page === i + 1 && 'red' }} margin={1} onClick={() => selectPageHandler(i + 1)}>{i + 1}</Button>
                    })}
                    <Button onClick={() => selectPageHandler(page + 1)} margin={5}>Next</Button>
                </Box>
            )}
        </Box>
    )
}

export default Pagination;
