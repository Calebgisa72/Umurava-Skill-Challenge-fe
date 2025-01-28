import React from 'react';
import '../learning/style.css';
import Image from 'next/image';
import Header from '../components/header';
import Benefits from '../components/benefits';
import student from '../images/student.png';
import tori from '../icons/toli.png';
import gdg from '../icons/gdg.png';
import collabrative from '../icons/collaborative.png';
import kepler from '../icons/kepler.png';
import hill from '../icons/hill.png';
import ciba from '../icons/ciba.png';
import ared from '../icons/ared.png';
import igihe from '../icons/igihe.png';
import viamo from '../icons/viamo.png';
import laterite from '../icons/laterite.png';
import sokofund from '../icons/sokofund.png';
import steps from '../images/steps.png'
import Middlebenefit from '../components/middlebenefit';


import Link from 'next/link';
import Footer from '../components/footer';
import Portraitbenefits from '../components/portraitbenefit';



const Topsection = () => {
  return (
    <>
   
            <div className='student-paragraph'>
                  <div className='para-heading'>
                    <p className='student-p'>Accelerate your student and traines Employability and carrier growth through project-based learing Solution </p>
                  </div>
                  <div className='student-body-div'>
                       <p className='body-p'>We patner with universities,Schools,and Training institutions to build the work experience of their students and traines through project based learning challenges and hackhtons</p>
                  </div>
                  <Link href='/'>
                    <div className='patner-link'>
                         <p className='patner-p'>patner with us </p>
                     </div>
                  </Link>
            </div>
            
            
         
    </>
  )
}

export default Topsection