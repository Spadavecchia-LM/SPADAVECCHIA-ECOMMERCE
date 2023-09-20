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
  Flex,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import CheckOutButtons from './CheckOutButtons'


//si el carrito es mayor a 0 muestro los items cargados, si no mensaje que diga "el carrito esta vacio"
const Cart = () => {
  const { cartList,deleteItem } = useContext(CartContext)
  return (
    <>
      {cartList.length > 0 ?
        cartList.map(item => {
          return (
            <TableContainer key={item.id}>
              <Table variant="striped" colorScheme='blue' size="sm">
                <Thead>
                  <Tr>
                    <Th>Product ID</Th>
                    <Th>DESCRIPTION</Th>
                    <Th isNumeric>QTY</Th>
                    <Th isNumeric>TOTAL</Th>
                    <Th>DELETE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>#{item.id}</Td>
                    <Td>{item.title}</Td>
                    <Td isNumeric>{item.quantity}</Td>
                    <Td isNumeric>${item.quantity * item.price}</Td>
                    <Td><Button onClick={() => deleteItem(item.id)} colorScheme='red'>X</Button></Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            
          )
          
        })
        : <h3>The cart is empty. <NavLink to={`/`}><Button size="sm" colorScheme='red'>Back to Home</Button></NavLink> </h3>}
         {cartList.length > 0 ? <CheckOutButtons/> : ""}
    </>
  )
}

export default Cart