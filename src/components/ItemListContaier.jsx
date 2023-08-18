import React from "react";
import { Center } from "@chakra-ui/react";
import { Highlight } from "@chakra-ui/react";
import { color } from "framer-motion";

export default function ItemListContainer() {
  return (
    <Center h="90vh" fontSize="4xl">
      <Highlight
        query="LS Motostore."
        styles={{
          px: "10",
          py: "5",
          rounded: "full",
          bg: "red.600",
          color: "white",
        }}
      >
        Welcome to LS Motostore.
      </Highlight>
    </Center>
  );
}
