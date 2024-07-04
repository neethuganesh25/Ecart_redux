import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {

  const WishlistArray = useSelector((state)=>state.wishlistReducer)

  const cartArray = useSelector((state)=>state.cartReducer)
  return (
   <>
   <div className="row" >
   <Navbar  data-bs-theme="primary" expand="lg" className=" bg-primary w-100" position='fixed' top='0px'>
      <Container>
        <Navbar.Brand href="#home"><Link to={'/'}  style={{textDecoration:'none',color:'white'}} ><FontAwesomeIcon icon={faCartShopping} bounce className='me-3' />E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-5 mt-2' ><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faHeart} style={{color: "#ff3d3d",}} /> Wishlist<Badge bg="none">{WishlistArray.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border rounded me-5 mt-2' ><Link to={'/cart'}  style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} /> Cart <Badge bg="none">{cartArray.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div></>
  )
}

export default Header