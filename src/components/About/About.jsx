import React from 'react'
import './About.css'
import { BiSolidSchool } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";

function About() {
  return (
    <>
      <div className='about' id="about_section">

        <h2>About me</h2>
        <div className='about_right'>
          <p>Driven front-end developer with a passion for clean, user-centric design and seamless digital experiences. I bring creativity and precision to every project I tackle. Passionate about crafting intuitive user interfaces. Join me on a journey through my portfolio,where creativity meets functionality, and where every pixel tells a story. Let's create impactful digital experiences together.</p>
        </div>

        <p className='education'>Education</p>

        <div className='cards'>  
          {/*school*/}
          <div className='card1'>
            <div className='icon_container'><BiSolidSchool className='icons icon1'/></div>
            <h4>Mata Gujri Public School</h4>
            <p>X <span>(2019)</span> : 88.2%</p>
            <p>XII <span>(2021)</span> : 80%</p>

          </div>

          {/* college */}
          <div className='card2'>
            <div className='icon2_container'><IoSchoolOutline className='icons icon2'/></div>
            <h4>Dr.Akhilesh Das Gupta Institute of Professional Studies</h4>
            <div className='c2_bottom'>
              <p>BTech</p>
              <p>Information Technology</p>
              <p className='year'>(2021-2025)</p>
            </div>
            <p className='p2'>CGPA : 9</p>

          </div>
        </div>

      </div>
    </>
  )
}

export default About