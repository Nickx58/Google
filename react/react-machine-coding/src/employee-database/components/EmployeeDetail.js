import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import './style.css'

const EmployeeDetail = ({ selectedEmployee }) => {
    return (
        <Box className="employee-detail">
            <Heading textAlign="center">Employee Information</Heading>
            {!selectedEmployee && (
                <Heading mt={'10px'} textAlign={'center'} as={'h4'} size={'small'}>Please select on employee from the list to view detail</Heading>
            )}
            {selectedEmployee && (
                <Box textAlign="center" mt="10px">
                    <Heading size='small' as="h4">Name: {selectedEmployee.name}</Heading>
                    <Heading size='small' as="h4">EMAIL: {selectedEmployee.email}</Heading>
                    <Heading size='small' as="h4">Website: {selectedEmployee.website}</Heading>
                </Box>
            )}
        </Box>
    )
}

export default EmployeeDetail;
