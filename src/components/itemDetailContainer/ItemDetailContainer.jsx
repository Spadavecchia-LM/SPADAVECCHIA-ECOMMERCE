import ItemDetail from './ItemDetail'
import { Flex} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs,getFirestore} from "firebase/firestore"
import Skeleton from '../SkeletonLoader'


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([])
  const {productId} = useParams()
 
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "products")
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProductos(docs)
    })
  }, [])

  console.log(productos)

  const productoFiltrado = productos.filter(p => p.id == productId)

  return (
    
    <Flex justifyContent="center" alignItems="center">
      {
        productoFiltrado.length > 0 ?
        productoFiltrado.map(p => {
          return (
            <div key={p.id}>
            <ItemDetail productos={p} />
            </div>
          )
        })
        : <Skeleton/>
      }

    </Flex>
    )

}

export default ItemDetailContainer