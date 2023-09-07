import React from 'react'
import {Center, Highlight} from "@chakra-ui/react"
const Home = () => {
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
        Welcome to LS Motorstore.
        </Highlight>
      </Center>
    </>
  )
}

export default Home