import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartProvider'
import {Flex, Button} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

const CheckOutButtons = () => {
    const {clearCart} = useContext(CartContext)
  return (
    <Flex justifyContent="center" gap="100px" padding={20}>
        <Button onClick={() => clearCart()} colorScheme='red'>Clear cart.</Button>
        <NavLink to={`/checkout`}><Button colorScheme='green'>Proceed to checkout</Button></NavLink>
    </Flex>
  )
}

export default CheckOutButtons