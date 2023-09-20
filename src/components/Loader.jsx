import React from 'react'
import { Spinner, Flex } from '@chakra-ui/react'

const Loader = () => {
  return (
<Flex height="90vh" width="100vw" alignItems="center" justifyContent="center">
    <Spinner color='red.500' size="xl"/>
</Flex>
  )
}

export default Loader