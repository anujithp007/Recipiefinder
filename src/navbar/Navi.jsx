import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  './nav.css'
import { Link } from 'react-router-dom';



const Navi = () => {
  return (
    <div >
         <Navbar expand="lg" className="main-nav ">
      <Container>
        <Navbar.Brand className='brand'>Ruchi🍴</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links gap-1 ">
            <Nav.Link as={Link} to='/' className='items-nav' >Home</Nav.Link>
           <Nav.Link as={Link} to="/search" className='items-nav' >All Items</Nav.Link>
            <Nav.Link as={Link} to='/fav' className='items-nav' >Favourites❤️️</Nav.Link>
            <Nav.Link as={Link} to='/country' className='items-nav' >Country</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

       </div>
  )
}

export default Navi
