import React from 'react'
import './Navigation.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RxModulzLogo } from "react-icons/rx";
import {Link} from 'react-scroll'


function Navigation() {
  return (
    <>
      <nav className='navbar'>
        <div className='logo'><RxModulzLogo className='logo1'/></div>

        <div className='sections'>
            <Link activeClass="active" to="home_section" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            <Link activeClass="active" to="about_section" spy={true} smooth={true} offset={-20} duration={500}>About</Link>
            <Link activeClass="active" to="skill_section" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
            <Link activeClass="active" to="project_section" spy={true} smooth={true} offset={-60} duration={500}>Projects</Link>
            <Link activeClass="active" to="contact_section" spy={true} smooth={true} offset={-23} duration={500}>Contact</Link>
        </div>

        <div>
            <ul className='nav_end'>
                <li><a href="https://github.com/MohiniChauhan09" target='_blank'>  <FaGithub className='icon1'/>  </a>  </li>
                <li><a href="https://www.linkedin.com/in/mohini-chauhan-b22832236/" target='_blank'>  <CiLinkedin className='icon2'/>  </a>  </li>
            </ul>
        </div>
        
      </nav>
    </>
  )
}

export default Navigation