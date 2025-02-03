import React from 'react'

import Skill from './skill';

import '../components/talentchallenge.css'
import umurava from '../images/umurava.png';
import Link from 'next/link'; 
import Image from "next/image";
import Button from './button';

interface Props {
    description: string;

  }

 const Talentchallenge: React.FC<Props> = (props) => {
  return (
    <>
       <div className='challenge2-t'>
          <div className='challenge-t'>
            <div className='thumbnail-grand-t'>
              <div className='thumbnail-div-t'>
                   <div className='open-div-t'>
                      <div className='flex-div-t'>
                        <Link href='/'>
                         <div className='open-link-t'>
                            <p className='white-p-t'>open</p>
                         </div>
                         <div className='open-link-grand-t'>
                            <p className='white-p-t'>open</p>
                         </div>
                        </Link>
                      </div> 
                   </div> 
                   <div className='umurava-t'>
                   <Image 
                           src={umurava}
                           alt="Example" 
                           className="custom-image-t"
                           
                           
                              />
          
                   </div>
              </div>
           </div>
              <div className='descript-t'>  
                   <p className='descript-p-t'>{props.description}</p>
              </div>
              <div className='descript-t'> 
                   <p className='descript-small-p-t'>skills needed:</p>
              </div>
              <div className='skills-t'>
                   <Skill skill='user research'/>
                   <Skill skill='user research'/>
                   <Skill skill='user research'/>
                  
              </div>
              <div className='seniority-t'>
                  <p className='seniority-p-t'>seniority level:</p>
                  <p className='small-p-t'>(junior,intermediate,senior)</p>
              </div>
              <div className='timeline-t'>
                   <p className='timeline-p-t'>timeline:</p>
                   <p className='timeline-small-p-t'>15 days</p>
              </div>
              <div className='view-challenge-t'>
                 <Button className='view-button-t'>View challenge</Button>
           </div>
    </div>
    </div>
    </>
  )
}

export default Talentchallenge