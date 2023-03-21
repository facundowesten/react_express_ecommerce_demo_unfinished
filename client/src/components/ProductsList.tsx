import React from 'react'
import "./ProductsList.css"

export const ProductsList = ({children}) => {
  return (
    <div className='product-list'>
        {children}
    </div>
  )
}
