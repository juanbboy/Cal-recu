import React from 'react'
//import { NavLink } from "react-router-dom";
import './navbar.css';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarr = () => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='justify-content-center'>

            {/* <Container className='m-0'> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='justify-content-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
            </Navbar.Toggle >
            <Navbar.Collapse id="basic-navbar-nav" className='text-center' >
                <Navbar.Brand className="mx-2 px-2 " href="/">{name}</Navbar.Brand>
                <Nav className="mx-auto justify-content-center">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/omm">Omm</Nav.Link>
                    <Nav.Link href="/menegato">Menegato</Nav.Link>
                    <Nav.Link href="/list">Save</Nav.Link>
                    <Nav.Link href="/listficha">Fichas</Nav.Link>
                </Nav>
                <Navbar.Brand className="mx-2 px-2 btn" onClick={handleLogout}>Salir</Navbar.Brand>
            </Navbar.Collapse>
            {/* </Container> */}

        </Navbar>
    )
}

export default Navbarr
