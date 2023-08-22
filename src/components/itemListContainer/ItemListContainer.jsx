import React from "react";
import { Center } from "@chakra-ui/react";
import { Highlight, Flex } from "@chakra-ui/react";
import ItemCount from "./ItemCount";


const ItemListContainer = ({ greetings }) => {


  return (
    <>
      <Center h="90vh" fontSize="4xl">
        <Highlight
          query="LS Motorstore."
          styles={{
            px: "10",
            py: "5",
            rounded: "full",
            bg: "red.600",
            color: "white",
          }}
        >
          {greetings}
        </Highlight>
        <ItemCount
          stock={5}
          initial={1} />
      </Center>

    </>
  );
}
export default ItemListContainer
