import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Mheader() {
  return (
    <Navbar style={{backgroundColor:'blueviolet'}}>
        <Container>
     
          <Link t0={'/'} style={{textDecoration:'none'}}>
                  <Navbar.Brand className='fw-bolder d-flex align-items-center' style={{color:"white"}}>
                  <i className="fa-solid fa-download fa-beat me-2"></i>{' '}
                   Media Player
                  </Navbar.Brand>
          </Link>
       
        </Container>
      </Navbar>
  )
}

export default Mheader