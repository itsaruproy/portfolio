import React from 'react'
import { Heading, Box, Flex, Text, Button, HStack } from '@chakra-ui/react'
import { Socials, Tools, Languages } from './'
import { SlDoc, SlCursor } from 'react-icons/sl'

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
                    <HStack gap={'0.5rem'}>
                        <Button leftIcon={<SlDoc />}>
                            <a
                                href={
                                    'https://drive.google.com/file/d/1YIs7SQ-HV6mrR_AMlzIVHEBj9X_S_HWA/view?usp=sharing'
                                }
                            >
                                Download CV
                            </a>
                        </Button>
                        <Button leftIcon={<SlCursor />}>
                            <a href={'mailto:itsaruproy@gmail.com'}>Email</a>
                        </Button>
                    </HStack>
                </Box>
                <Tools />
                <Languages />
                <Socials />
            </Flex>
        </Flex>
    )
}

export default AboutMe
