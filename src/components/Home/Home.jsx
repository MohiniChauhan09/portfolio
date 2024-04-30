import React from 'react'
import './Home.css'
import {Link} from 'react-scroll';

function Home() {

  return (
    <>
      <div className='home_container id="home_section'>
        <div className='home_left'>
            <h2 className='move'>Hi, I'm Mohini Chauhan</h2>
            <h1 className='move'>Frontend Developer</h1>

            <p>I'm a skilled and passionate frontend developer with experience in creating visually appealing and user-friendly websites.</p>
            
            <div className='home_end'>
              {/* <button className='home_btn1'>  <a href="/contact"> Contact me </a>  </button> */}
              <button className='home_btn1'> <Link activeClass="active" to="contact_section" spy={true} smooth={true} offset={-23} duration={500}>Contact</Link> </button>
              <button className='home_btn2'>  <a href="https://drive.google.com/file/d/1o8XERRf9I6zjw4I5cNwSXqg_gWnNTqqa/view" target='_blank'>Resume</a>  </button>
                
            </div>

        </div>

        <div className='home_right'>
            <img src="/images/home.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home