import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box
  } from '@chakra-ui/react'

const Order = ({o}) => {
  return (
    <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Order #{o.orderId}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
  <Table variant='striped' colorScheme='whatsapp'>
    <Thead>
      <Tr>
        <Th>NAME</Th>
        <Th>EMAIL</Th>
        <Th isNumeric>TOTAL</Th>
      </Tr>
    </Thead>
    <Tbody>
        <Tr>
            <Td>{o.buyer?.nombre}</Td>
            <Td>{o.buyer?.email}</Td>
            <Td textAlign={'end'}>${o.total}</Td>
        </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  )
}

export default Order