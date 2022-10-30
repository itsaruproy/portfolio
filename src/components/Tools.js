import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaDatabase } from 'react-icons/fa'
import { SiVisualstudiocode, SiLinux } from 'react-icons/si'

const Tools = () => {
    return (
        <Box>
            <Text mb={'0.8rem'} fontWeight={'semibold'}>
                Tools and Technologies I use
            </Text>
            <Flex gap={'1rem'}>
                <Icon h={6} w={6} as={FaHtml5} />
                <Icon h={6} w={6} as={FaCss3} />
                <Icon h={6} w={6} as={FaReact} />
                <Icon h={6} w={6} as={FaNodeJs} />
                <Icon h={6} w={6} as={FaDatabase} />
                <Icon h={6} w={6} as={SiVisualstudiocode} />
                <Icon h={6} w={6} as={SiLinux} />
            </Flex>
        </Box>
    )
}

export default Tools
