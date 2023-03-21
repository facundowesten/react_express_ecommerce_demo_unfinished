import React from 'react'
import { Container } from 'react-bootstrap'
import "./ProductsContainer.css"




export const ProductsContainer = ({children}) => {
  
  
  return (
    <Container className='product-container'>
    {children}
    </Container>

  )
}
