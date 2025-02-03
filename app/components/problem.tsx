import React from 'react';
import '../about/style.css';
import icon from '../images/benefit.png';
import Image from 'next/image';

const Problem = () => {
  return (
    <>
    <div className='problem-div p-12'>
      <div className='p-upper-image'>
            <Image src={icon} alt='' className='problem-img'/>    
      </div>
      <div className='p-problem-heading'>
              <p className='problem-p'>Bridging Education and Employment</p>
      </div>
      <div className='p-lower-para'>
            <p className='lower-p'>Many talents acquired theoritical knowledge and are rejected from jobs becouse they lack experience and are not able to put in actions what they acquired in the schools </p>
      </div>
    

    </div>
    </>
  )
}

export default Problem