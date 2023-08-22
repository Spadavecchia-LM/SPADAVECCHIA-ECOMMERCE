import { Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"


const ItemCount = ({stock, initial}) => {

const [count, setCount] = useState(initial)

const onAdd = () => {
    alert("se agregaron " + count + " items al carrito de compras")
}


    return (
        <>
        <Flex flexDirection="column">
            <Flex justifyContent="space-between" alignItems="center">
                <Button onClick={()=> count > 0 ? setCount(count -1): alert("no puede ser menor a 0")}>-</Button>
                <Text>{count}</Text>
                <Button onClick={()=> count < stock ? setCount(count+1) : alert("no hay mas stock")}>+</Button>
            </Flex>
            <div>
                <Button onClick={()=> onAdd()}>Añadir al carrito</Button>
            </div>
        </Flex>

        </>
    )
}
export default ItemCount