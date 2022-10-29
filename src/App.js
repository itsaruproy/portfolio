import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Header, AboutMe, Socials } from './components'
const App = () => {
    return (
        <Box width={'100%'} minH={'100vh'} bg={'gray.50'}>
            <Container maxW={'container.lg'}>
                <Header />
                <AboutMe />
            </Container>
        </Box>
    )
}

export default App
