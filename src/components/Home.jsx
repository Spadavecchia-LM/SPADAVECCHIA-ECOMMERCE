import React from 'react'
import { Center, Highlight, Flex, Box, Heading, Text, Image, Button, Grid } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
const Home = () => {

  const brands = [
    "https://res.cloudinary.com/leoms96/image/upload/v1695677939/LS-MOTOSTORE/brands/elka-suspension-inc-logo-vector-removebg-preview_izutlv.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695676850/LS-MOTOSTORE/brands/ufo-plast-logo-vector-removebg-preview_h8cdbx.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677264/LS-MOTOSTORE/brands/png-transparent-yoshimura-hd-logo-removebg-preview_jbbbth.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677234/LS-MOTOSTORE/brands/ak3502aeaf-akrapovic-logo-akrapovic-logo-vector-in-eps-ai-cdr-free-download-removebg-preview_x6b7cs.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677234/LS-MOTOSTORE/brands/Fox-Racing-Logo-removebg-preview_bvb4my.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677234/LS-MOTOSTORE/brands/png-transparent-troy-lee-designs-logo-t-shirt-decal-t-shirt-emblem-label-text-thumbnail-removebg-preview_mjsg04.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677233/LS-MOTOSTORE/brands/png-transparent-fmf-hd-logo-thumbnail-removebg-preview_wdegqj.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677826/LS-MOTOSTORE/brands/Yamaha_Motor_Co_logo.svg_zfyqfi.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677826/LS-MOTOSTORE/brands/png-transparent-motul-hd-logo-removebg-preview_tu1cbk.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677825/LS-MOTOSTORE/brands/gytr_logo2-converted-removebg-preview_d0gd0l.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677825/LS-MOTOSTORE/brands/k-n-logo-png-transparent-removebg-preview_yueyha.png",
    "https://res.cloudinary.com/leoms96/image/upload/v1695677824/LS-MOTOSTORE/brands/png-transparent-ipone-hd-logo-removebg-preview_pukr8o.png"
  ]


  return (

    <>
      <Center h="90vh" fontSize="4xl" className='homeHero' color="white" textShadow="2xl">
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

      <Flex justifyContent="space-between" alignItems="center" backgroundColor="blackAlpha.900">
        <Box textAlign={'center'} margin="auto">
          <Heading color="whiteAlpha.900" p={5}>PARTS & ACCESORIES</Heading>
          <Text color="whiteAlpha.900">Find all you need for your bike</Text>
          <NavLink to={`/category/1`}><Button colorScheme='facebook' m={5}>Shop now</Button></NavLink>
        </Box>
        <Box width="50%" height="800px">
          <Image
            src='https://images.unsplash.com/photo-1542550546-88afdd84b64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80'
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Box width="50%" height="800px">
          <Image
            src="https://images.unsplash.com/photo-1651608773407-691b2f953788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            width="100%"
            height="100%"
          />
        </Box>
        <Box textAlign={'center'} margin="auto">
          <Heading p={5}>CLOTHING & GEAR</Heading>
          <Text>Dress yourself like a pro with our wide catalog</Text>
          <NavLink to={`/category/2`}><Button colorScheme='facebook' m={5}>Shop now</Button></NavLink>
        </Box>

      </Flex>

      <Flex justifyContent="space-around" alignItems="center" marginTop={100}>
        <Box>
          <Heading>Our Brands</Heading>
        </Box>

        <Grid templateColumns='repeat(4,1fr)' templateRows='repeat(3,1fr)' alignItems="center" gap={10}>
          {brands.map((b) => {
            return (
              <Image
                src={b}
                maxW={'100px'} />
                
            )
          })}
        </Grid>
      </Flex>
    </>
  )
}

export default Home