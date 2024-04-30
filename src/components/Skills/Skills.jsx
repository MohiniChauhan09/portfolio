import React from 'react'
import './Skills.css'
import SkillCard from '../SkillCard/SkillCard'

function Skills() {
  return (
    <>
      <div className='skills' id="skill_section">
        <h2>My skills</h2>

        <div className='s1 s'>
          <span className='s_head'>Programming languages</span>
          <div className='s1_inner'>
            <SkillCard photo="java.png" skill="Java" proficiency="Intermediate"/>
            <SkillCard photo="javascript.png" skill="JavaScript" proficiency="Intermediate"/>
            <SkillCard photo="python.png" skill="Python" proficiency="Beginner"/>
          </div>
        </div>

        <div className='s2 s'>
          <span className='s_head'>Web Development</span>
          <div className='s2_inner1'>
            <SkillCard photo="html.png" skill="HTML" proficiency="Intermediate"/>
            <SkillCard photo="css.jpg" skill="CSS" proficiency="Intermediate"/>
            <SkillCard photo="javascript.png" skill="JavaScript" proficiency="Intermediate"/>
            <SkillCard photo="bootstrap.png" skill="Bootstrap" proficiency="Beginner"/>
          </div>
          <div className='s2_inner2'>
            <SkillCard photo="node.jpg" skill="Node.js" proficiency="Beginner"/>
            <SkillCard photo="express.png" skill="Express.js" proficiency="Beginner"/>
            <SkillCard photo="react.png" skill="React.js" proficiency="Intermediate"/>
            <SkillCard photo="tailwind.png" skill="Tailwind CSS" proficiency="Intermediate"/>
          </div>
        </div>
        <div className='s3 s'>
          <span className='s_head'>Database</span>
          <SkillCard className="mysql" photo="mysql.jpg" skill="MySQL" proficiency="Intermediate"/>
        </div>

      </div>
    </>
  )
}

export default Skills