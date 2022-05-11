import React from 'react'

import { Link } from 'react-router-dom'

// bootstrap components
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'


const PageNav = () => {
  return (
    <Navbar variant="dark" className='navBar' >
      <Container className='launch ml-20'>
        <Navbar.Brand as={Link} to="/launches" className='navBarLinks'>Launches</Navbar.Brand>
        <Navbar.Brand as={Link} to="/crew">Crew</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNav