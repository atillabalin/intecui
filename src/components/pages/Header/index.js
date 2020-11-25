import React, { useContext } from "react";
import { Button,Nav,Navbar,FormControl,Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Header = () => {
    // const [state,setState] = useContext(DataContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" className="d-block text-center myCustomNav" variant="dark">
        <img src="/img/logo.png" className="d-block navbar-brand m-auto logo " />
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto text-center">
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/opleidingen">OPLEIDINGEN</Link>
            <Link className="nav-link" to="/inschrijven">INSCHRIJVEN</Link>
            <Link className="nav-link" to="/nieuws">NIEUWS</Link>
            <Link className="nav-link" to="/contact">CONTACT</Link>
            <Link className="nav-link" to="/over-ons">OVER ONS</Link>
            </Nav>
    
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;