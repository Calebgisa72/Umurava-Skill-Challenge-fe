import React from 'react';
import '../about/style.css';
import icon from '../images/benefit.png';
import Image from 'next/image';

const Upperproblem = () => {
  return (
    <>
    <div className='u-problem-div'>
      <div className='new-upper'>
      <div className='upper-image'>
            <Image src={icon} alt='' className='problem-img'/>    
      </div>
      </div>
      <div className='problem-heading'>
              <p className='problem-p'>Bridging the experience Gap</p>
      </div>
      <div className='lower-para'>
            <p className='lower-p'>Many talents acquired theoritical knowledge and are rejected from jobs becouse they lack experience and are not able to put in actions what they acquired in the schools </p>
      </div>

    </div>
    </>
  )
}

export default Upperproblem