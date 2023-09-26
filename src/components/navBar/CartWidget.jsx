import React, { useContext } from "react";
import { Icon } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { Badge } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/ShoppingCartProvider";

const CartWidget = () => {
  const { total } = useContext(CartContext)




  return (
    <div>
      <NavLink to={`/cart`}><Icon as={MdShoppingCart} fontSize="4xl" /></NavLink>
      <Badge colorScheme="green" fontSize="xl" mb="5">
        {total}
      </Badge>
    </div>
  );
};

export default CartWidget;
