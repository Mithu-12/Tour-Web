import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useFirebase from './../../Hook/useFirebase';
import { Container, Navbar} from 'react-bootstrap';

const Header = () => {
  const {user, handleLogout } = useFirebase();
    return (

      
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
  <Container>
      <Navbar.Brand href="#home" className="img"><img src={'https://demo.moxcreative.com/aventoura/wp-content/uploads/sites/64/elementor/thumbs/Logo_aventoura-pcuoa321ycy6q45vyweddvd276k9qy25n5ctcdpqm8.png'} alt="" width="100" height="24"/></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <NavLink to="/home" className="items">
                    <li>Home</li>
                  </NavLink>
                 <NavLink to="/about" className="items">
                    <li>About</li>
                  </NavLink>
                  <NavLink to="/services" className="items">
                  <li>Services</li>
                  </NavLink>
                  <NavLink to="/addService" className="items">
                  <li>Add Service</li>
                  </NavLink>
                  <NavLink to="/offer" className="items">
                  <li>Offer</li>
                  </NavLink>
                  <NavLink to="/dashbord" className="items">
                  <li>Dashbord</li>
                  </NavLink>
                  {user.email && <NavLink to="/allOrders" className="items">
                  <li>All Order</li>
                  </NavLink>}
                  {user.email && <li className="items" style={{ color: "#fff" }}>{user.displayName}</li>}
                     {
                        user.email ?
                              <button className='items btn-danger' onClick={handleLogout}><li>Log Out</li></button> :
                         <NavLink className='items' to="/login">Login</NavLink>
                   }
      </Navbar.Collapse>
  </Container>
  </Navbar>
      
    );
};

export default Header;