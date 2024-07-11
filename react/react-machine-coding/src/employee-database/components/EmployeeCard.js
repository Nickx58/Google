import React from "react";
import { Card, CardBody, Text, Button } from '@chakra-ui/react'

const EmployeeCard = ({ name = '', id = '', handleOnClick, onEmployeeSelect }) => {
    return (
        <Card backgroundColor="aliceblue" padding="5px" margin="5px" onClick={() => onEmployeeSelect(id)}>
            <CardBody display="flex" alignItems="center" justifyContent="space-between">
                <Text>{name}</Text>
                <Button colorScheme='teal' variant='ghost' onClick={e => {
                    e.stopPropagation();
                    handleOnClick(id)
                }}>
                    Delete
                </Button>
            </CardBody>
        </Card>
    )
}

export default EmployeeCard;