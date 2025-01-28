import React from 'react';
import './style.css';
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
import Topsection from '../components/topsection';

const Learning = () => {
  return (
    <>
<div className='super-div'>

  <div className='added-div'>
    <div className='grand-container'>
       

       
         <div className='heading-div'>
             <Header/>
         </div>
        <div className='new-div'>
            <div className='two-div'> 
                   <div className='student-photo-div'>
                        <Image src={student} alt='student' className='student-image'/>   
                   </div>
                   <Topsection/>
            </div>
        </div>
        <div className='new-container'>
            <div className='two-div'> 
                <div className='added-cont'>
                   <div className='student-photo-div'>
                      <Image src={student} alt='student' className='student-image'/>   
                   </div>
                </div>
                <Topsection/>
                
            </div>
        </div>
            <div className='key-heading'>
                <p className='key-p'>Key Offering & Benenfits :</p>
            </div>
          <div className='top-keys'>
             <div className='key-part1'>
                 <Benefits benefit_heading='Employmentability and carrier Development Opportunities'  benefit_body='student gives hands-on experienceworking on real-world challenges and helpthem build proffesional networksthat increase their chances and readness of landing job opportunities and this lead to career advancement  and long-term success '/>
             </div>
             <div className='key-part2'>
                <Benefits benefit_heading='Employmentability and carrier Development Opportunities'  benefit_body='student gives hands-on experienceworking on real-world challenges and helpthem build proffesional networksthat increase their chances and readness of landing job opportunities and this lead to career advancement  and long-term success '/>
             </div>
             <div className='key-part3'>
                 <Middlebenefit benefit_heading='Employmentability and carrier Development Opportunities'  benefit_body='student gives hands-on experienceworking on real-world challenges and helpthem build proffesional networksthat increase their chances and readness of landing job opportunities and this lead to career advancement  and long-term success '/> 
             </div>

          </div>
          <div className='lower-keys'>
            <div className='key-part4'>
                   <Portraitbenefits benefit_heading='Employmentability and carrier Development Opportunities'  benefit_body='student gives hands-on experienceworking on real-world challenges and helpthem build proffesional networksthat increase their chances and readness of landing job opportunities and this lead to career advancement  and long-term success '/>
            </div> 
            <div className='key-part5'>
                   <Benefits benefit_heading='Skills Assessment'  benefit_body='embed our projects based tests and skills assessment directly into your curiculum '/>
            </div>
          </div>
          <div className='institutions-heading'>
               <p className='institution-p'>Join a Few Educational Institutions using Skills  Challenges by Umurava</p>
          </div>
          <div className='institutions-div'>
               <Image src={tori} alt='' className='institution-img'/>
               <Image src={gdg} alt='' className='institution-img'/>
               <Image src={collabrative} alt='' className='institution-img'/>
               <Image src={kepler} alt='' className='institution-img'/>
               <Image src={hill} alt='' className='institution-img'/>
               <Image src={ciba} alt='' className='institution-img'/>
               <Image src={ared} alt='' className='institution-img'/>
               <Image src={igihe} alt='' className='institution-img'/>
               <Image src={viamo} alt='' className='institution-img'/>
               <Image src={laterite} alt='' className='institution-img'/>
               <Image src={sokofund} alt='' className='institution-img'/>
          </div>
           <div className='institutions-heading'>
               <p className='institution-p'>How Skills Challenges Program can Be intergrated into your Learning Instution</p>
          </div>
          <div className='intergration-body'>
                 <div className='intergration-steps'>
                     <div className='step-part'>
                         <div className='step-number'>
                             <p className='step-p'>1</p>
                         </div>
                         <div  className='step-correspond'>
                            <p className='step-text'>As carrier development Job Readness Program</p>   
                         </div>
                     </div>
                     <div className='step-part'>
                         <div className='step-number'>
                             <p className='step-p'>2</p>
                         </div>
                         <div  className='step-correspond'>
                               <p className='step-text'>As Skill Assessment Method for Couse or a Team</p>
                         </div>
                     </div>
                     <div className='step-part'>
                         <div className='step-number'>
                             <p className='step-p'>3</p>
                         </div>
                         <div  className='step-correspond'>
                               <p className='step-text'>As extracurricular activities to complement Academic courses</p>
                         </div>
                     </div>
                     <div className='step-part'>
                         <div className='step-number'>
                             <p className='step-p'>4</p>
                         </div>
                         <div  className='step-correspond'>
                               <p className='step-text'>As The Portfolio of the student</p>
                         </div>
                     </div>
                     <div className='step-part'>
                         <div className='step-number'>
                             <p className='step-p'>5</p>
                         </div>
                         <div  className='step-correspond'>
                               <p className='step-text'>As part of Capstone  Projects or final year assignment </p>
                         </div>
                     </div>
                 </div>
                 <div className='steps-photo-div'>
                      <Image src={steps} alt='' className='steps-img'/>
                 </div>
          </div>
          <div className='ready-div'>
             <div className='ready-heading'>
                   <p className='ready-p'>Ready to transform your learning institution ?</p>
             </div>
             <Link href='/'>
              <div className='ready-link'>
                <p className='ready-link-p'>Let's Patner</p>
              </div>
            </Link>
          </div>

          
      </div>
  </div>
      
    </div>
    <div className='footer-div'>
         <Footer/>
     </div>
    </>
   
  )
}

export default Learning