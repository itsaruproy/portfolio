import React from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
} from 'react-icons/fa'

const Socials = () => {
    return (
        <Box>
            <Text mb={'0.8rem'} fontWeight={'semibold'}>
                Connect with me
            </Text>
            <Flex gap={'1rem'}>
                <Link>
                    <Icon h={6} w={6} as={FaGithub} />
                </Link>
                <Link>
                    <Icon h={6} w={6} as={FaLinkedin} />
                </Link>
                <Link>
                    <Icon h={6} w={6} as={FaTwitter} />
                </Link>
                <Link>
                    <Icon h={6} w={6} as={FaInstagram} />
                </Link>
                <Link>
                    <Icon h={6} w={6} as={FaFacebook} />
                </Link>
            </Flex>
        </Box>
    )
}

export default Socials
