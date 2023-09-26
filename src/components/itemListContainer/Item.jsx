import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Button, Text, Flex, CardFooter } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <Card maxW='sm' boxShadow="base" minH="md" minW="sm">
            <CardBody>
                <Image
                    src={producto.images[0]}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    height="200px"
                    width="200px"
                    margin="0 auto"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' textAlign="center">{producto.title}</Heading>
                </Stack>
            </CardBody>
            <CardFooter justifyContent="space-around" alignItems="center" >
                    <Text fontSize="md" color="blue.700">${producto.price}</Text>
                    <NavLink to={`/product/${producto.id}`}><Button color="white" backgroundColor="black">More details</Button></NavLink>
            </CardFooter>
        </Card>
    )
}

export default Item