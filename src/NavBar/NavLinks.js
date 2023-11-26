import {Link} from "react-router-dom";
import React from 'react';

const NavLinks = (props) => {
    return (
        <div >
            <nav className="links">
                <ul className="navBar">
                    <li className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link to="/" className="navLinks">Home</Link>
                    </li>
                    <li className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link to="/about"  className="navLinks">About</Link>
                    </li>
                    <li className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link to="/skills"  className="navLinks">Skills</Link>
                    </li>
                    <li className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link to="/portfolio"  className="navLinks">Portfolio</Link>
                    </li>
                    <li className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link to="/cv"  className="navLinks">CV</Link>
                    </li>
                    <li className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link to="/contact"  className="navLinks">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavLinks;
