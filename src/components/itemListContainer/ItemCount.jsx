import { Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"


const ItemCount = ({stock, initial}) => {

const [count, setCount] = useState(initial)

const onAdd = () => {
    alert("se agregaron " + count + " items al carrito de compras")
}


    return (
        <>
        <Flex  alignItems="center" gap={5} padding={5}>
            <Flex justifyContent="center" alignItems="center" gap={5}>
                <Button onClick={()=> count > 0 ? setCount(count -1): alert("no puede ser menor a 0")} size="sm" colorScheme="blue">-</Button>
                <Text>{count}</Text>
                <Button onClick={()=> count < stock ? setCount(count+1) : alert("no hay mas stock")} size="sm" colorScheme="blue">+</Button>
            </Flex>
            <div>
                <Button onClick={()=> onAdd()} colorScheme="green" size="sm">Add to cart</Button>
            </div>
        </Flex>

        </>
    )
}
export default ItemCount