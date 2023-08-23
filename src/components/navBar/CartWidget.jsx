import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { Badge } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <div>
      <Icon as={MdShoppingCart} fontSize="4xl" />
      <Badge colorScheme="green" fontSize="xl" mb="5">
        2
      </Badge>
    </div>
  );
};

export default CartWidget;