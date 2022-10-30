import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Header, AboutMe, Projects } from './components'
import { BrowserRouter, Route } from 'react-router-dom'
const App = () => {
    return (
        <Box width={'100%'} minH={'100vh'} bg={'gray.50'}>
            <Container maxW={'container.lg'}>
                <BrowserRouter>
                    <Header />
                    <Route exact path={'/'} component={AboutMe} />
                    <Route exact path={'/projects'} component={Projects} />
                </BrowserRouter>
            </Container>
        </Box>
    )
}

export default App
