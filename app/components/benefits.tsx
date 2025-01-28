import React from 'react'
import '../learning/style.css';
import { BriefcaseBusiness } from 'lucide-react';
import benefit from '../images/benefit.png'
import Image from 'next/image';

interface Props {
      benefit_heading: string;
      benefit_body:string;
    }


const Benefits : React.FC<Props>= (Props) => {     

      
  return (
       <>
       <div className='benefit-div'>
           <div className='benefit-emoji'> 
                   <Image src={benefit} alt='student' className='benefit-image'/>   
           </div>
           <div className='benefit-heading'>
                 <p className='benefit-p'>{Props.benefit_heading}</p>
           </div> 
           <div className='benefit-body'>
                 <p className='benefit-body-p'>{Props.benefit_body}</p>
           </div>
           
       </div>

       </>
  )
}

export default Benefits