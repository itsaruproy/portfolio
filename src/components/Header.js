import React from 'react'
import { Flex, Box, Button, Link, Text } from '@chakra-ui/react'

const Header = () => {
    return (
        <Box width={'100%'} py={'1rem'}>
            <Flex justifyContent={'space-between'}>
                <Text>ARUP</Text>
                <Flex gap={'1rem'}>
                    <Link>
                        <Button>Projects</Button>
                    </Link>
                    <Link>
                        <Button>About Me</Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header
