import {Card, Image, Stack, CardBody, Text, Heading, CardFooter,Box, Button} from "@chakra-ui/react"
import ItemCount from "../itemListContainer/ItemCount"
import { NavLink } from "react-router-dom"

const ItemDetail = ({productos}) => {


  

  return (
    <>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    maxW="4xl"
    boxShadow="base"
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '400px' }}
      src={productos.imageUrl}
      alt={productos.title}
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>{productos.title}</Heading>
  
        <Box py='2'>
         {productos.description}
        </Box>
        <Text color="blue.600" textAlign="right" fontSize="5xl">$ {productos.price}</Text>
        <Text color="blackAlpha.500" textAlign="right" fontSize="xl" textDecoration="line-through">$ {productos.price * 1.25}</Text>

      </CardBody>
  
      <CardFooter justifyContent="space-around" alignItems="center">
      
        <ItemCount stock={productos.stock} initial={productos.initial} item={productos}/>
       
    <NavLink to={`/category/${productos.category}`}><Button color="white" backgroundColor="black">Continue Shopping</Button></NavLink>
      </CardFooter>
    </Stack>
  </Card>
 
    </>
  )
}

export default ItemDetail