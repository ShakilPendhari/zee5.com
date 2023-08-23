import React, { useEffect } from 'react'
import {Button} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

const Error = () => {
  
  useEffect(()=>{
    document.title = "SP5 | Error"
  },[])

  return (
    <>
      <div>Error 404</div>
      <Button>
      <NavLink to="/"> Go Back </NavLink>
      </Button>
    </>
    
  )
}

export default Error