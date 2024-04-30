import React from 'react'
import './SkillCard.css'

function SkillCard({photo,skill,proficiency}) {
  return (
    <>
      <div className='s_card'>
        <div className='img_container'>  <img src={`/images/${photo}`} alt="" />  </div>
        <p className='s_name'>{skill}</p>
        <p>{proficiency}</p>
      </div>
    </>
  )
}

export default SkillCard