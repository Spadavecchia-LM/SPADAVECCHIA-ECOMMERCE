import React, { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartProvider'
import { Text } from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import Loader from './Loader'

const Form = () => {
const [nombre,setNombre] = useState("")
const [email, setEmail] = useState("")
const [orderId, setOrderId] = useState(null)
const {cartList, clearCart} = useContext(CartContext)

const total = cartList.reduce((acc,e) => e.price * e.quantity + acc,0)

const db = getFirestore()

console.log(total)

const handleSubmit = (e) => {
    e.preventDefault()
    nombre === "" ? alert("nombre esta vacio") : alert(`Gracias por tu compra ${nombre}`)
    email === "" ? alert("email esta vacio") : alert(`te llegara una notificacion al mail: ${email}`)

    addDoc(orderCollection,order).then(({ id }) => setOrderId(id))

    clearCart()

    
    setTimeout(()=> {
window.location.replace("/")
    },2000)
}
const order = {
    buyer:{
        nombre,email
    },
    items:{
        ...cartList,
    },total
}

const orderCollection = collection(db, "orden")

  return (
   <>
   <form onSubmit={handleSubmit}>
        <div>
            <input type="text"  id="name" placeholder='nombre' required onChange={(e) => setNombre(e.target.value)}/>
        </div>
        <div>
            <input type="email"  id="email" required placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <Text>Your total is: ${total}</Text>
        <button type="submit">Confirm & Pay</button>
   </form>
   <div>
    {
       orderId === null ? "" : <h3>el id de tu compra es: #{orderId}</h3>
    }
   </div>
   
   </>
  )
}

export default Form