import { createContext, useEffect } from 'react'
import { useState } from 'react'

export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(handleTotal())
  }, [cartList])

  const addToCart = (item, qty) => {
    if (isInCart(item.id)) {
      const index = cartList.findIndex(e => e.id == item.id)
      const actQty = cartList[index].quantity
      const newQty = actQty + qty
      cartList[index].quantity = newQty;


    } else {
      cartList.push({
        id: item.id,
        title: item.title,
        quantity: qty,
        price: item.price
      })
    }
    setCartList([...cartList])
  }
  const handleTotal = () => {
    return cartList.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)

  };

  const clearCart = () => {
    setCartList([])

  }
  const deleteItem = (id) => {
    const indexOfItem = cartList.findIndex((element) => element.id === id);
    if (indexOfItem !== -1) {
      const updatedCartList = [...cartList];
      updatedCartList.splice(indexOfItem, 1);
      setCartList(updatedCartList);
    }
  };

  const isInCart = (id) => {
    return cartList.some(item => item.id == id)
  }







  return (
    <CartContext.Provider value={{ deleteItem, clearCart, addToCart, cartList, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider