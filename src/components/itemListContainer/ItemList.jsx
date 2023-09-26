import Item from "./Item"
import { Flex, Heading, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import React from "react"


const ItemList = ({ productos }) => {
    
const {categoryId} = useParams()

const productosFiltrados = productos.filter(p => p.category == categoryId)

    return (
        <>
        <Flex  className="productsHero" boxShadow="base" flexDirection="column" alignItems="center" justifyContent="center" color="white" textShadow="2xl"  height="500px">
        <Heading size="4xl">{categoryId == 1 ? "PARTS & ACCESORIES" : "CLOTHING & GEAR"}</Heading>
        <Text backgroundColor="black" padding={1}>25% off in all the store!</Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center" gap={100} flexWrap="wrap" marginBottom="200px" marginTop="200px">
            {productosFiltrados.map(producto => {
                return (
                    <div key={producto.id}>
                    <Item 
                        producto={producto}
                    />
                    </div>
                )
            })}
        </Flex>
        </>
    )
}

export default React.memo(ItemList)