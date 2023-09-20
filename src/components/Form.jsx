import React, { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartProvider'
import { Text } from '@chakra-ui/react'

const Form = () => {
const [nombre,setNombre] = useState("")
const [email, setEmail] = useState("")
const [purchaseId, setPurchaseId] = useState("")
const {cartList} = useContext(CartContext)
const total = cartList.reduce((acc,e) => e.price * e.quantity + acc,0)
console.log(total)

const handleSubmit = (e) => {
    e.preventDefault()
    nombre === "" ? alert("nombre esta vacio") : alert(`Gracias por tu compra ${nombre}`)
    email === "" ? alert("email esta vacio") : alert(`te llegara una notificacion al mail: ${email}`)
    const now = new Date()
    setPurchaseId(`${now.getMilliseconds()}${now.getSeconds()}${now.getMinutes()}`)
}

  return (
   <>
   <form onSubmit={handleSubmit}>
        <div>
            <input type="text"  id="name" placeholder='nombre' onChange={(e) => setNombre(e.target.value)}/>
        </div>
        <div>
            <input type="email"  id="email" required placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <Text>Your total is: ${total}</Text>
        <button type="submit">Confirm & Pay</button>
   </form>
   <div>
    {
       purchaseId === "" ? "" : <h3>el id de tu compra es: #{purchaseId}</h3>
    }
   </div>
   
   </>
  )
}

export default Form