import React, { useState } from "react";
import { Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex justifyContent="space-around" alignItems="center" h="10vh">
      <Image
        boxSize="120px"
        objectFit="fill"
        src="https://res.cloudinary.com/leoms96/image/upload/v1692574978/LS-MOTOSTORE/LOGO_mqecvc.png"
        alt="logo"
      />
      <Flex gap="40">
        <Link _hover={{ color: "red" }}>Home</Link>
        <Link _hover={{ color: "red" }}>Parts & Accesories</Link>
        <Link _hover={{ color: "red" }}>Clothing & Gear</Link>
      </Flex>
      <CartWidget/>
    </Flex>
  );
}
export default NavBar
