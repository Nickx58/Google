import React from "react";
import { Heading, Box } from '@chakra-ui/react'
import EmployeeCard from "./EmployeeCard";
import './style.css'

const EmployeeList = ({ list = [], handleOnClick, onEmployeeSelect }) => {
    return (
        <Box className="employeelist">
            <Heading textAlign="center" as="h4" size="md">Employee List</Heading>
            {list.map((user) => {
                return <EmployeeCard key={user.id} name={user.name} id={user.id} handleOnClick={handleOnClick} onEmployeeSelect={onEmployeeSelect} />
            })}

        </Box>
    )
};

export default EmployeeList;
