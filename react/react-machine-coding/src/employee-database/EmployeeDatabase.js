import React, { useState } from "react";
import { Heading, Button, Flex, Spacer, Box, Grid } from '@chakra-ui/react'
import employeeData from "./utils/mock";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";

const EmployeeDatabase = () => {
    const [employeeList, setEmployeeList] = useState(employeeData)
    const [selectedEmployee, setSelectedEmployee] = useState(null)

    const onEmployeeDelete = id => {
        const newList = employeeList.filter(item => item.id !== id);
        setEmployeeList(newList)
    }

    const onEmployeeSelect = id => {
        const employee = employeeList.find(item => item.id === id);
        setSelectedEmployee(employee)
    }
    return (
        <>
            <Flex>
                <Box>
                    <Heading as="h3" size="md">Employee Database Management System</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button colorScheme='teal' size='md'>Add Employee</Button>
                </Box>
            </Flex>
            <Grid templateColumns="40% 60%" gap={0} p={4}>
                <EmployeeList list={employeeList} handleOnClick={onEmployeeDelete} onEmployeeSelect={onEmployeeSelect} />
                <EmployeeDetail selectedEmployee={selectedEmployee} />
            </Grid>
        </>
    )
}

export default EmployeeDatabase;