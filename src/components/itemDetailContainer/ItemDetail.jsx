import { Stack, Card, CardBody, Image,CardFooter, Heading, Text, Flex} from '@chakra-ui/react'
import React from 'react'
import ItemCount from "../itemListContainer/ItemCount"
const ItemDetail = ({productos}) => {

  return (
    <>
           <Card maxW='sm' key={productos.id} >
            <CardBody>
                <Image
                    src={productos.imageUrl}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    height="200px"
                    width="200px"
                    margin="0 auto"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{productos.title}</Heading>
                    <Text fontSize="md">{productos.description}</Text>
                    <Text fontSize="3xl" color="blue.700">${productos.price}</Text>
                </Stack>
            </CardBody>
            <CardFooter>
              <ItemCount initial={productos.initial} stock={productos.stock}/>
            </CardFooter>
            <Flex justifyContent="flex-end">
                <Text fontSize="xs" color="blue.400">Stock: {productos.stock}u.</Text>
              </Flex>
        </Card>
    </>
  )
}

export default ItemDetail