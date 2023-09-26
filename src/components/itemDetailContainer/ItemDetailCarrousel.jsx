import { Box, Button, Flex, Icon, Image } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"

const ItemDetailCarrousel = ({ productos }) => {
    const [currentImage, setCurrentImage] = useState(productos.images[0])

    const nextImage = () => {
        if (currentImage === productos.images[0]) {
            setCurrentImage(productos.images[1])
        }
        if (currentImage === productos.images[1]) {
            setCurrentImage(productos.images[2])
        }
        if (currentImage === productos.images[2]) {
            setCurrentImage(productos.images[0])
        }
    }

    const prevImage = () => {
        if (currentImage === productos.images[0]) {
            setCurrentImage(productos.images[2])
        }
        if (currentImage === productos.images[1]) {
            setCurrentImage(productos.images[0])
        }
        if (currentImage === productos.images[2]) {
            setCurrentImage(productos.images[1])
        }
    }

    return (
        <Box>

            <Image
                objectFit='contain'
                maxW={{ base: '100%', sm: '400px' }}
                minH="sm"
                src={currentImage}
                alt={productos.title}
            />
            <Flex justifyContent="center" gap={10}>

                <Button colorScheme='facebook' size='sm' onClick={() => nextImage()}><Icon as={MdArrowBackIos} /></Button>
                <Button colorScheme='facebook' size="sm" onClick={() => prevImage()}><Icon as={MdArrowForwardIos} /></Button>
            </Flex>
        </Box>
    )
}

export default ItemDetailCarrousel