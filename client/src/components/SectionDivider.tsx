import React from 'react'
import { Container } from 'react-bootstrap'

export const SectionDivider = ({position, text}:  {position: string, text: string}) => {
  return (
    <Container className='mt-3'>
    <div className='d-flex align-items-center' style={{height: "6rem"}}>
            {position === 'left' ? null : <div className='text-center w-100 bg-black m-4 ms-0' style={{height: "3px"}}></div>}
    <div className='text-center h1 m-0 text-nowrap' style={{fontFamily: "'Bebas Neue', cursive"}}>
            {text}
    </div>
    {position === 'right' ? null : <div className='text-center w-100 bg-black m-4 me-0' style={{height: "3px", marginRight: "0"}}></div>}

    <hr />
    </div>
    </Container>
  )
}
