import React from 'react'
//import { NavLink } from "react-router-dom";
import './navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarr = () => {
    return (
        // <header className="site-header sticky-sm-top">
        //     <nav className="navbar navbar-expand-sm">
        //         <div className="container-fluid justify-content-center">
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        //                 <a className="py-0" href="/">
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
        //                 </a>
        //             </button>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" className='justify-content-center' />
        //             <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'  >

        //                 <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        //                     {/* <ul className="navbar-nav"> */}
        //                     <Nav className="mx-auto justify-content-center">
        //                         <Nav.Link href="omm">Omm</Nav.Link>
        //                         <Nav.Link href="menegato">Menegato</Nav.Link>
        //                         <Nav.Link href="list">Save</Nav.Link>
        //                     </Nav>
        //                     {/* <li class="nav-item active">
        //                             <a class="nav-link" href="/omm">Omm</a>
        //                         </li>
        //                         <li class="nav-item">
        //                             <a class="nav-link" href="/menegato">Menegato</a>
        //                         </li>
        //                         <li class="nav-item">
        //                             <a class="nav-link" href="/list">Guardado</a>
        //                         </li> */}
        //                     {/* </ul> */}
        //                 </div>
        //             </Navbar.Collapse>
        //         </div>
        //     </nav>
        // </header >
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className='justify-content-center'>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className='justify-content-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>

                </Navbar.Toggle >
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'  >

                    <Nav className="mx-auto justify-content-center">
                        <Nav.Link href="omm">Omm</Nav.Link>
                        <Nav.Link href="menegato">Menegato</Nav.Link>
                        <Nav.Link href="list">Save</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navbarr
