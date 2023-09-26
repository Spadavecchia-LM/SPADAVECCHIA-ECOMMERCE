import React from 'react'
import { SkeletonCircle, SkeletonText, Flex, Box } from '@chakra-ui/react'


const SkeletonLoader = () => {
    return (
        <Flex height="90vh" width="100vw" alignItems="center" justifyContent="center">
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='20' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='10' width="400px" />
            </Box>
        </Flex>
    )
}

export default SkeletonLoader