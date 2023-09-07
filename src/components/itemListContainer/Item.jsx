import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Button, CardFooter} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <Card maxW='sm' >
            <CardBody>
                <Image
                    src={producto.imageUrl}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    height="200px"
                    width="200px"
                    margin="0 auto"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{producto.title}</Heading>
                    <Button colorScheme='blue'><NavLink to={`/product/${producto.id}`}>More details</NavLink></Button>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default Item