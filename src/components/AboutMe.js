import React from 'react'
import { Heading, Box, Flex, Text, Button } from '@chakra-ui/react'
import { Socials, Tools, Languages } from './'
import { SlDoc } from 'react-icons/sl'

const AboutMe = () => {
    return (
        <Flex alignItems={'center'} direction={'column'} gap={'1rem'}>
            <Flex gap={'1rem'} direction={'column'}>
                <Heading>Hi, I'm Arup Roy</Heading>
                <Box maxW={'md'}>
                    <Text>
                        I'm an Information Technology student at Jadavpur
                        University, Kolkata. I love building cool stuff for web
                        using: Javascript, ReactJS, NodeJS, MongoDB
                    </Text>
                </Box>
                <Box>
                    <Button leftIcon={<SlDoc />}>Download CV</Button>
                </Box>
                <Tools />
                <Languages />
                <Socials />
            </Flex>
        </Flex>
    )
}

export default AboutMe
