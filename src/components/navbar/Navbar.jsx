import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
            
                <div className="navbar">
                    <h1>Payton Parker</h1>
                    <ul className="nav-ul">
                        <li className="nav-link"><Link to="/PaytonPortfolio">About Me</Link></li>
                        <li className="nav-link"><Link to="/PaytonPortfolio/work">My Work</Link></li>
                        {/* <li className="nav-link"><Link to="/PaytonPortfolio/contact">Contact Me</Link></li> */}
                        <li className="nav-link"><Link to="https://docs.google.com/document/d/1of2k1k_c-o5sTKBWWcs0jLSifnyX9jEtdQ9eTsQk5cs/edit?usp=sharing" target="blank">Resume</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar