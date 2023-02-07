import React from 'react'
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="menegato">Menegato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="omm">OMM</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>





    )
}

export default Navbar
