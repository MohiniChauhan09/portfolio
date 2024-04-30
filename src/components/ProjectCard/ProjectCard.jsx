import React from 'react'
import './ProjectCard.css'
import { IoIosEye } from "react-icons/io";



function ProjectCard( {picture, pName, description, tech,p_link} ) {
  return (
    <>
      <div className='p_card'>
        <div><img src={`/images/${picture}.png`} alt="" /></div>
        <div className='p_text'>
          <h3>{pName}</h3>
          <h4>{description}</h4>
          <p>Tech stack: {tech}</p>
        </div>
          <button className='p_btn'><IoIosEye className='eye'> </IoIosEye><a href={`${p_link}`} target='_blank'> Project</a></button>
      </div>
    </>
  )
}

export default ProjectCard