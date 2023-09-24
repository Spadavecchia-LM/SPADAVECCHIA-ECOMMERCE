import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartProvider'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  TableContainer,
  Button,
  Flex,
  Image,
  Heading,
  
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import CheckOutButtons from './CheckOutButtons'


//si el carrito es mayor a 0 muestro los items cargados, si no mensaje que diga "el carrito esta vacio"
const Cart = () => {
  const { cartList,deleteItem } = useContext(CartContext)
  const total = cartList.reduce((acc,e) => e.price * e.quantity + acc,0)
  return (
    <>
      {cartList.length > 0 ?
            <TableContainer padding={10}>
              <Table  size="sm">
                <Thead>
                  <Tr>
                    <Th>Product ID</Th>
                    <Th>DESCRIPTION</Th>
                    <Th isNumeric>QTY</Th>
                    <Th isNumeric>Unit Price</Th>
                    <Th isNumeric>TOTAL</Th>
                    <Th>DELETE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                    {cartList.map(item => {
                      return (
                        <Tr key={item.id}>
                        <Td>#{item.id}</Td>
                        <Td>{item.title}</Td>
                        <Td isNumeric>{item.quantity}</Td>
                        <Td isNumeric>${item.price}</Td>
                        <Td isNumeric>${item.quantity * item.price}</Td>
                        <Td><Button onClick={() => deleteItem(item.id)} colorScheme='red'>X</Button></Td>
                        </Tr>
                      )
                    })}
                </Tbody>
              </Table>
            </TableContainer>
            
          
          
        
        : <Flex justifyContent="center" gap={10} alignItems="center" flexDirection="column" height="90vh">
          <Image  
          objectFit="contain"
          boxSize="300px"
          src='https://res.cloudinary.com/leoms96/image/upload/v1695575448/LS-MOTOSTORE/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912_zrctgd_mxgjlp.png'/>
          <Heading>Your cart is empty!</Heading>
          <Text fontSize="18px" color="blackAlpha.700">It seems that there is no items in your cart. <NavLink to={`/`}><Button size="sm" colorScheme='red'>Back to Home</Button></NavLink> </Text>
          </Flex>}
          {cartList.length > 0 ? <Text textAlign="center" fontSize="4xl" margin={10}>Your current total is: $ {total}</Text> : ""}
         {cartList.length > 0 ? <CheckOutButtons/> : ""}
    </>
  )
}

export default Cart