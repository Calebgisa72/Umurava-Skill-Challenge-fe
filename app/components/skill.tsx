import React from 'react'

import '../challenges/style.css'

interface Props {
    skill: string;

  }


  const Skill: React.FC<Props> = (props) => {

  return (
    <div className='skill-container'>
         <p className='skill-p'>{props.skill}</p>
    </div>
  )
}

export default Skill