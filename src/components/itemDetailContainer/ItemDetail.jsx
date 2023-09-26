import { Card, Stack, CardBody, Text, Heading, CardFooter, Box, Button, Flex } from "@chakra-ui/react"
import ItemCount from "../itemListContainer/ItemCount"
import { NavLink } from "react-router-dom"
import ItemDetailCarrousel from "./ItemDetailCarrousel"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/ShoppingCartProvider"

const ItemDetail = ({ productos }) => {

  const { isInCart } = useContext(CartContext)
  const [isMounted, setIsMounted] = useState(null)

  useEffect(() => {

    isInCart(productos.id) ? setIsMounted(false) : setIsMounted(true)

  }, [isInCart, productos.id])



  return (


    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        maxW="4xl"
        boxShadow="base"
      >
        <ItemDetailCarrousel productos={productos} />

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

            {isMounted ? <ItemCount stock={productos.stock} initial={productos.initial} item={productos} /> : <Flex gap={5}><Button onClick={() => setIsMounted(true)} colorScheme="facebook" size="sm">Add more</Button><NavLink to={`/cart`}><Button size="sm" colorScheme="orange">View Cart</Button></NavLink></Flex>}
            <NavLink to={`/category/${productos.category}`}><Button size="sm" color="white" backgroundColor="black">Continue Shopping</Button></NavLink>
          
          </CardFooter>
        </Stack>
      </Card>

    </>
  )
}

export default ItemDetail