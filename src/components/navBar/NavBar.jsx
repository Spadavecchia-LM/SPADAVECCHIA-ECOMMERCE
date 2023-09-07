
import { Image } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex justifyContent="space-around" alignItems="center" h="10vh">
      <NavLink to={`/home`}>
      <Image
        boxSize="120px"
        objectFit="fill"
        src="https://res.cloudinary.com/leoms96/image/upload/v1692574978/LS-MOTOSTORE/LOGO_mqecvc.png"
        alt="logo"
      />
      </NavLink>
      <Flex gap="40">
        <NavLink to={`/home`}>Home</NavLink>
        <NavLink to={`/category/1`}>Parts & Accesories</NavLink>
        <NavLink to={`/category/2`}>Clothing & Gear</NavLink>
      </Flex>
      <CartWidget/>
    </Flex>
  );
}
export default NavBar
