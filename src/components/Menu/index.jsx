import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticImage } from "gatsby-plugin-image"
import { BsWhatsapp} from "react-icons/bs"
import './menu.css'

function Menu() {
  return (
    
            <Navbar collapseOnSelect expand="lg" className="nav ">
      <Container > 
        <Navbar.Brand href="#home">  

        <StaticImage
className="logo"
src="../../images/logo.png"
/>
      


      </Navbar.Brand>
        <Navbar.Toggle  className="bg" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="sm:text-center  ml-auto   ">
            <a className="mx-auto " href="#valores">
            <Nav.Link className ="a mr-48" href="#valores">Nossos Valores</Nav.Link>
            </a>
            <a className ="mx-auto" href="#cardapio">
            <Nav.Link className ="a mr-48" href="#cardapio">Cardápio</Nav.Link>
            </a>
            <a className =" mx-auto" href="#cardapio">
            <Nav.Link className ="a mr-48" href="#contato">Contato</Nav.Link>
            </a>
            <Nav.Link  className="whats my-auto hover:animate-[wiggle_1s_ease-in-out_infinite] mx-auto" href="https://api.whatsapp.com/send?phone=5511983060031" target="blank">< BsWhatsapp/></Nav.Link>

            
           

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default Menu;