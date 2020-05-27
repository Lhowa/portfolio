import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {

    return(
        <header className='navbar'>
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-25}
            duration= {500}
            >About</Link>

            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}
            >Projects</Link>

            <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}
            >Skills</Link>

            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}
            >Contact</Link>
        </header>
    )
}
export default Navbar;