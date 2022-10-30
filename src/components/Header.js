import React from 'react'
import { Flex, Box, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box width={'100%'} py={'1rem'}>
            <Flex justifyContent={'space-between'}>
                <Text>ARUP</Text>
                <Flex gap={'1rem'}>
                    <Link to={'/projects'}>
                        <Button>Projects</Button>
                    </Link>
                    <Link to={'/'}>
                        <Button>About Me</Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header
