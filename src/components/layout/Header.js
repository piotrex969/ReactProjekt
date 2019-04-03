import React from 'react';

import {Link} from 'react-router-dom';
import {Image,NavDropdown, Nav,Navbar} from 'react-bootstrap';
import { allResolved } from 'q';



function Header()
{


    return(
  
   
            
  <Navbar collapseOnSelect expand="lg"  variant="dark" style={{background: '#225AF0'}}>
  <Navbar.Brand href="/"><Image  style={{width:'2em',height:'2em'}} src={require('./images/logo.png')}/>
</Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav>

    <Nav.Item>
      <NavDropdown  title="Klienci" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/clientAdd">Dodaj klienta</NavDropdown.Item>
        <NavDropdown.Item href="/clientList">Lista klientow</NavDropdown.Item>
        <NavDropdown.Item href="/orderAdd">Dodaj zamówienie</NavDropdown.Item>
        <NavDropdown.Item href="/orderList">Lista zamówień</NavDropdown.Item>
      </NavDropdown>
      </Nav.Item>
      

      <Nav.Item >
      <NavDropdown  title="Magazyn" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/productAdd">Dodaj produkt</NavDropdown.Item>
        <NavDropdown.Item href="/productList">Lista produktow</NavDropdown.Item>
        <NavDropdown.Item href="/returnAdd">Dodaj zwrot</NavDropdown.Item>
      </NavDropdown>
      </Nav.Item>

    </Nav>
  </Navbar.Collapse>
  
  <Navbar>
      <Nav pullRight>
        <button type="button" class="btn btn-danger" id="buttonLogout" onClick={logoutUser}>Wyloguj</button>
      </Nav>
    </Navbar>
</Navbar>

     
   
   
    
    )

}

function logoutUser(){
  alert("Zaraz nastąpi wylogowanie");
  document.cookie = 'tokenWareHouse' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  window.location.reload();
}

const headerStyle =
{
    background: '#333',
    color: '#fff',
    textAlign:'center',
    padding:'10px'
}

const linkStyle= {

    color: '#fff',
    textDecoration: 'none',
    padding: '5px'

}


export default Header;