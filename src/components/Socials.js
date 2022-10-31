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
import { contacts } from '../data'
const { github, linkedin, twitter, instagram, facebook } = contacts

const Socials = () => {
    return (
        <Box>
            <Text mb={'0.8rem'} fontWeight={'semibold'}>
                Connect with me
            </Text>
            <Flex gap={'1rem'}>
                <Link href={github} target={'_blank'} rel="noopener noreferrer">
                    <Icon h={6} w={6} as={FaGithub} />
                </Link>
                <Link
                    href={linkedin}
                    target={'_blank'}
                    rel="noopener noreferrer"
                >
                    <Icon h={6} w={6} as={FaLinkedin} />
                </Link>
                <Link
                    href={twitter}
                    target={'_blank'}
                    rel="noopener noreferrer"
                >
                    <Icon h={6} w={6} as={FaTwitter} />
                </Link>
                <Link
                    href={instagram}
                    target={'_blank'}
                    rel="noopener noreferrer"
                >
                    <Icon h={6} w={6} as={FaInstagram} />
                </Link>
                <Link
                    href={facebook}
                    target={'_blank'}
                    rel="noopener noreferrer"
                >
                    <Icon h={6} w={6} as={FaFacebook} />
                </Link>
            </Flex>
        </Box>
    )
}

export default Socials
