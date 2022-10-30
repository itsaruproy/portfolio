import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Projects as MyProjects } from '../data'
import { SingleProject } from './'

const Projects = () => {
    return (
        <Flex alignItems={'center'} direction={'column'} gap={'1rem'}>
            {MyProjects.map((project, index) => {
                return <SingleProject key={index} {...project} />
            })}
        </Flex>
    )
}

export default Projects
