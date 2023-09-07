import Item from "./Item"
import { Flex } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
const ItemList = ({ productos }) => {
const {categoryId} = useParams()

const productosFiltrados = productos.filter(p => p.category == categoryId)

    return (
        <Flex justifyContent="center" alignItems="center" gap={10} flexWrap="wrap" marginBottom="200px" marginTop="200px">
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
    )
}

export default ItemList