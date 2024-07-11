import React from "react";
import { Card, CardBody, Text, Button } from '@chakra-ui/react'

const EmployeeCard = ({ name = '' }) => {
    return (
        <Card backgroundColor="aliceblue" padding="5px" margin="5px">
            <CardBody display="flex" alignItems="center" justifyContent="space-between">
                <Text>{name}</Text>
                <Button colorScheme='teal' variant='ghost'>
                    Delete
                </Button>
            </CardBody>
        </Card>
    )
}

export default EmployeeCard;