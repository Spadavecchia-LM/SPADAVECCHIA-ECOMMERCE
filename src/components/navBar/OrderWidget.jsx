import React from 'react'
import { MdListAlt } from "react-icons/md"
import { NavLink } from 'react-router-dom'
import { Badge, Icon } from '@chakra-ui/react'

const OrderWidget = () => {
  return (
    <div>
      <NavLink to={`/myorders`}><Icon as={MdListAlt} fontSize="4xl" />
        <Badge fontSize="sm" mb="5">
          my orders
        </Badge>
      </NavLink>

    </div>
  )
}

export default OrderWidget