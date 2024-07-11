import React from "react";
import { Heading, Button, Flex, Spacer, Box } from '@chakra-ui/react'
import EmployeeCard from "./EmployeeCard";
import './style.css'

const EmployeeList = ({ list = [] }) => {
    return (
        <Box className="employeelist">
            <Heading textAlign="center" as="h4" size="md">Employee List</Heading>
            {list.map((user) => {
                return <EmployeeCard key={user.id} name={user.name} />
            })}

        </Box>
    )
};

export default EmployeeList;
