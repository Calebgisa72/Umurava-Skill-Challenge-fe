import React from 'react'

import Skill from './skill';

import '../challenges/style.css'
import umurava from '../images/umurava.png';
import Link from 'next/link'; 
import Image from "next/image";
import Button from './button';


interface Props {
    description: string;

  }

  const Challenge: React.FC<Props> = (props) => {



  return (
  <div className='challenge2'>
    <div className='challenge'>
      <div className='thumbnail-grand'>
        <div className='thumbnail-div'>
             <div className='open-div'>
                <div className='flex-div'>
                  <Link href='/'>
                   <div className='open-link'>
                      <p className='white-p'>open</p>
                   </div>
                   <div className='open-link-grand'>
                      <p className='white-p'>open</p>
                   </div>
                  </Link>
                </div> 
             </div> 
             <div className='umurava'>
             <Image 
                     src={umurava}
                     alt="Example" 
                     className="custom-image"
                     
                     
                        />
    
             </div>
        </div>
     </div>
        <div className='descript'>  
             <p className='descript-p'>{props.description}</p>
        </div>
        <div className='descript'> 
             <p className='descript-small-p'>skills needed:</p>
        </div>
        <div className='skills'>
             <Skill skill='user research'/>
             <Skill skill='user research'/>
             <Skill skill='user research'/>
            
        </div>
        <div className='seniority'>
            <p className='seniority-p'>seniority level:</p>
            <p className='small-p'>(junior,intermediate,senior)</p>
        </div>
        <div className='timeline'>
             <p className='timeline-p'>timeline:</p>
             <p className='timeline-small-p'>15 days</p>
        </div>
        <div className='view-challenge'>
           <Button className='view-button'>View challenge</Button>
.        </div>
    </div>
    </div>
  )
}

export default Challenge