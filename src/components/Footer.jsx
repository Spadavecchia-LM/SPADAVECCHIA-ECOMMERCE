import { Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex height="100px" backgroundColor="blackAlpha.900" alignItems="center" justifyContent="center">
      <Heading color="whiteAlpha.900" size="md">All rights reserved.©️ made by <a href="https://github.com/Spadavecchia-LM" target='no_blank'>Leonardo Spadavecchia</a></Heading>
    </Flex>
  )
}

export default Footer