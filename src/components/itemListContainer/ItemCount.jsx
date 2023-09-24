import { Button, Flex, Text,useToast } from "@chakra-ui/react"
import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../../context/ShoppingCartProvider"


const ItemCount = ({ stock, initial, item }) => {
    const toast = useToast()
    const { addToCart } = useContext(CartContext)
    const [count, setCount] = useState(initial)

    const onAdd = () => {
            addToCart(item, count)
            toast({
                title: `${count > 1 ? "items" : "item"} added`,
                description: `You succesfully added ${count} ${count > 1 ? "items" : "item"} to your cart `,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
    }


    return (
        <>
            <Flex alignItems="center" gap={5} padding={5}>
                <Flex justifyContent="center" alignItems="center" gap={5} border="1px solid black">
                    <Button onClick={() => count > 0 ? setCount(count - 1) : alert("no puede ser menor a 0")} size="sm" backgroundColor="transparent">-</Button>
                    <Text>{count}</Text>
                    <Button onClick={() => count < stock ? setCount(count + 1) : alert("no hay mas stock")} size="sm" backgroundColor="transparent">+</Button>
                </Flex>
                <div>
                    <Button onClick={() => onAdd()} colorScheme="green" size="sm">Add to cart</Button>
                </div>
            </Flex>

        </>
    )
}
export default ItemCount