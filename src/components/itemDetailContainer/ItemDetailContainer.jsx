import React, { useState, useEffect } from 'react'
import getProductos from '../../js/mockApi'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([])
  const {productId} = useParams()
  const productosFiltrados = productos.filter(p => p.id == productId)

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const responseProductos = await getProductos;
        setProductos(responseProductos)
      } catch (error) {
        console.log("error", error)
      }
    }
    fetchProductos()
  }, [])

  return (
    <Flex justifyContent="center" alignItems="center">
      {
        productosFiltrados.map(p => {
          return (
            <div key={p.id}>
            <ItemDetail productos={p} />
            </div>
          )
        })
      }

    </Flex>
  )

}

export default ItemDetailContainer