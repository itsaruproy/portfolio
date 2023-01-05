import React from 'react'
import {
    Heading,
    Box,
    Flex,
    Text,
    Button,
    HStack,
    Link,
} from '@chakra-ui/react'
import { Socials, Tools, Languages } from './'
import { SlDoc, SlCursor } from 'react-icons/sl'
import { CV_URL, EMAIL_ADDR } from '../data'

const AboutMe = () => {
    return (
        <Flex alignItems={'center'} direction={'column'} gap={'1rem'}>
            <Flex gap={'1rem'} direction={'column'}>
                <Heading>Hi, I'm Arup Roy</Heading>
                <Box maxW={'md'}>
                    <Text>
                        I am an Information Technology student at Jadavpur
                        University, Kolkata. I am passionate about building cool
                        web applications and am skilled in technologies such as
                        JavaScript, ReactJS, NodeJS, and MongoDB. I am also
                        interested in cloud computing and am always looking to
                        learn and expand my knowledge in this field. Thank you
                        for visiting my portfolio website, I hope you enjoy
                        exploring my projects!
                    </Text>
                </Box>
                <Box>
                    <HStack gap={'0.5rem'}>
                        <Button leftIcon={<SlDoc />}>
                            <Link
                                href={CV_URL}
                                target={'_blank'}
                                rel="noopener noreferrer"
                            >
                                Download CV
                            </Link>
                        </Button>
                        <Button leftIcon={<SlCursor />}>
                            <Link
                                href={EMAIL_ADDR}
                                target={'_blank'}
                                rel="noopener noreferrer"
                            >
                                Email
                            </Link>
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
