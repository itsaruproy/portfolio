import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaNodeJs } from 'react-icons/fa'
import { SiJava, SiJavascript } from 'react-icons/si'
import { CIcon, CppIcon } from '../icons'

const Languages = () => {
    return (
        <Box>
            <Text mb={'0.8rem'} fontWeight={'semibold'}>
                Programming Languages
            </Text>
            <Flex gap={'1rem'}>
                <Icon h={10} w={10} mr={'-1rem'} as={CIcon} />
                <Icon h={7} w={7} mt={'-2px'} as={CppIcon} />
                <Icon h={6} w={6} as={FaNodeJs} />
                <Icon h={6} w={6} as={SiJava} />
                <Icon h={6} w={6} as={SiJavascript} />
            </Flex>
        </Box>
    )
}

export default Languages
