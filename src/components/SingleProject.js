import { Box, Button, Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const SingleProject = props => {
    const { name, description, yt, github, weblink } = props
    return (
        <Box>
            <VStack>
                <Heading>{name}</Heading>
                <HStack>
                    <Button>GitHub</Button>
                    <Button>YouTube</Button>
                    <Button>Website</Button>
                </HStack>
                <Box>{description}</Box>
                <HStack>
                    <Box>Tags</Box>
                </HStack>
            </VStack>
        </Box>
    )
}

export default SingleProject
