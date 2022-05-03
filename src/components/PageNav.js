import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

// bootstrap components
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'


const PageNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className='launch ml-20'>
        <Navbar.Brand as={Link} to="/">🚀 SpaceX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/launches">Launches</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNav