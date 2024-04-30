import React from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'

function Projects() {
  return (
    <>
      <div className='p_container' id="project_section">
        <h2>My Projects</h2>

        <div className='project1'>
          <ProjectCard picture="stray" pName="StraySavers" description="A dog stray dog help website" tech="React.js, HTML, Styled Components, React chatbot" p_link="https://straysavers.netlify.app/"></ProjectCard>
          <ProjectCard picture="dice" pName="Diceyy" description="An interesting dice game" tech="React.js, HTML, Styled Components" p_link="https://diceyy.netlify.app/"></ProjectCard>
        </div>

        <div className='project2'>
          <ProjectCard picture="form" pName="Multi Step Form" description="A mobile-responsive multi step form" tech="React.js, Tailwind CSS, HTML" p_link="https://multistepform-task.netlify.app/"></ProjectCard>
        </div>
      </div>
    </>
  )
}

export default Projects