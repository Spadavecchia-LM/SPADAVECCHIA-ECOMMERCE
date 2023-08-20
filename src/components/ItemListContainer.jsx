import React from "react";
import { Center } from "@chakra-ui/react";
import { Highlight } from "@chakra-ui/react";


export default function ItemListContainer() {

const greeting = "Welcome to LS Motorstore."

  return (
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
        {greeting}
      </Highlight>
    </Center>
  );
}
