import {
    Box,
    Text,
    HStack,
    Icon,
    Image,
    VStack,
    Heading,
    Link,
} from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom'
import { FaGithub, FaYoutube, FaGlobe } from 'react-icons/fa'
import { Bloggler, DriveShare, FunChat } from '../assets'

const Images = {
    Bloggler,
    DriveShare,
    FunChat,
}

const SingleProject = props => {
    const { name, description, yt, github, weblink } = props
    return (
        <Box
            maxW={'md'}
            shadow={'sm'}
            bg={'gray.300'}
            p={'2rem'}
            borderRadius={'0.5rem'}
        >
            <VStack>
                <Box maxW={'sm'}>
                    <Image
                        borderRadius={'0.5rem'}
                        objectFit={'cover'}
                        alt={name}
                        src={Images[name]}
                    />
                </Box>

                <HStack alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontSize={'xl'} fontWeight={'bold'}>
                        {name}
                    </Text>
                    <HStack pl={'1rem'} pt={'0.5rem'}>
                        <Link
                            target={'_blank'}
                            rel={'noreferrer'}
                            href={github}
                        >
                            <Icon w={6} h={6} as={FaGithub} />
                        </Link>
                        <Link target={'_blank'} rel={'noreferrer'} href={yt}>
                            <Icon w={6} h={6} as={FaYoutube} />
                        </Link>
                        {weblink ? (
                            <Link
                                target={'_blank'}
                                rel={'noreferrer'}
                                href={weblink}
                            >
                                <Icon w={6} h={6} as={FaGlobe} />
                            </Link>
                        ) : null}
                    </HStack>
                </HStack>
                <Box>{description}</Box>
            </VStack>
        </Box>
    )
}

export default SingleProject
