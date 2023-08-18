import React from "react";
import { Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { Flex } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex justifyContent="space-around" alignItems="center" h="10vh">
      <Image
        boxSize="100px"
        objectFit="fill"
        src="https://tse2.mm.bing.net/th?id=OIP.0sgMb_WiSlSgdyxXpMzBQgAAAA&pid=Api&P=0&h=180"
        alt="logo"
      />
      <Flex gap="40">
        <Link _hover={{ color: "red" }}>Home</Link>
        <Link _hover={{ color: "red" }}>Accesories</Link>
        <Link _hover={{ color: "red" }}>Clothing</Link>
      </Flex>
      <CartWidget />
    </Flex>
  );
}
