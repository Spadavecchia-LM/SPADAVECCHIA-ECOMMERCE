import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/ShoppingCartProvider'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import {
    FormLabel,
    Box,
    Button,
    Flex,
    Input,
    Heading,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,

} from '@chakra-ui/react'
import Swal from 'sweetalert2'

const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)
    const { cartList, clearCart } = useContext(CartContext)

    const total = cartList.reduce((acc, e) => e.price * e.quantity + acc, 0)



    const db = getFirestore()



    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            buyer: {
                nombre, email
            },
            items: {
                ...cartList,
            },
            total,
            orderId: generateOrderId().toString()
        }


        addDoc(orderCollection, order)
        displayAlert(order)

        setTimeout(() => {
            window.location.replace("/")
        }, 2000)
    }

    const displayAlert = (obj) => {
        Swal.fire(
            'Order Placed Succesfully!',
            `your purchase id is: ${obj.orderId} you will be redirected to the home page. `,
            'success'
        )
    }


    const generateOrderId = () => {
        return Math.round(Math.random() * 99999999999)
    }

    const orderCollection = collection(db, "orden")

    return (
        <Flex justifyContent="center" flexDirection="column" gap={10} alignItems="center" width="50%" margin="100px auto">
            <Heading>
                CHECKOUT
            </Heading>
            <Text textAlign="center">
                Complete your personal info to finish your purchase
            </Text>

            <form onSubmit={handleSubmit}>
                <Flex flexDirection="column" gap={10} alignItems="center">
                    <Box>
                        <FormLabel>Name And Last Name </FormLabel>
                        <Input type="text" id="name" placeholder='your name' required onChange={(e) => setNombre(e.target.value)} />
                    </Box>

                    <Box>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" id="email" required placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                    </Box>

                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Your Purchase
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <TableContainer>
                                    <Table>
                                        <Thead>
                                            <Tr>
                                                <Th>Item</Th>
                                                <Th isNumeric>QTY</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {cartList.map(item => {
                                                return (
                                                    <Tr key={item.id}>
                                                        <Td>{item.title}</Td>
                                                        <Td>{item.quantity}</Td>
                                                    </Tr>
                                                )
                                            })}

                                        </Tbody>
                                    </Table>
                                </TableContainer>
                                <Text textAlign="center" color="blue.500">TOTAL: ${total}</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Box>
                        <Button colorScheme='facebook' type="submit">Confirm & Pay</Button>
                    </Box>
                </Flex>

            </form>

        </Flex>
    )
}

export default Form