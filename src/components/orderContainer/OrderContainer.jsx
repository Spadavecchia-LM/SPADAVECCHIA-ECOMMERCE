import React, { useState, useEffect } from 'react'
import {collection, getDocs,getFirestore} from "firebase/firestore"
import Order from './Order'
import { Box, Flex , Heading,Spinner} from '@chakra-ui/react'

const OrderContainer = () => {
const [orders,setOrders] = useState([])

useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "orden")
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setOrders(docs)
    })
  }, [])


  return (
    
    <Flex flexDirection="column" margin={10}>
        {orders.length > 0 ? 
    orders.map(o => {
        <Heading>Your orders</Heading>
        return(
            <div key={o.orderId}>
                <Order o={o}/>
            </div>
        )
    })
    :
    <Flex width="100vw" height="90vh" justifyContent="center" alignItems="center"><Spinner/><Box>Loading orders...</Box></Flex>
}
    </Flex>
    
 
    
    
  )
}

export default OrderContainer