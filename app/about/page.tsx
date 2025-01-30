import React from 'react';
import  './style.css';
import Header from '../components/header';
import Image from 'next/image';
import  upperphoto from '../images/aboutumurava.png';
import Upperproblem from '../components/upperproblem';
import Problem from '../components/problem';
import platform from '../images/platform.png';
import Footer from '../components/footer';

const page = () => {
  return (
       <>
       <div className='header-div'>
            <Header/>
       </div>
        <div className='super-div'>
              <div className='grand-container'> 
                  <div className='two-div'>
                    <div className='upper-photo-div'>
                        <Image src={upperphoto} alt='' className='upper-photo'/>
                    </div>
                    <div className='lower-paragraph'>
                         <div className='para-heading-div'>
                             <p className='heading-p'>Our Story</p>
                        </div>
                        
                        <div className='first-paragraph-div'>
                              <p className='first-p'>with three years of experience matching african digital talents to local and global job markets  we still remain with a big number of jobs that remain unfilled due to the lack of experienced african talents </p>
                        </div> 
                        <div className='second-paragraph-div'>
                               <p className='first-p'>driven by our mission to place skilled and proffesional digital talent we created skills challenges as project-based learning solution for talents to gain real-world experience solve problems and build portfolios so that they become ready for global markets</p>
                        </div>
                    </div>
                  </div>
                  <div className='third-paragraph-div'>
                      <p className='second-para-p'>Why we are solving this problem</p>
                  </div>
                  <div className='reason-part1'>
                         <Upperproblem/>
                  </div>
                  <div className='reason-divs'>
                         <Problem/>
                         <Problem/>
                  </div>
                  <div className='two-platform'>
                      <div className='platform-div'>
                          <div className='platform-heading'>
                               <p className='platform-heading-p'>Skills Challenge Program is built on the Umurava the Umurava Talent Marketplace Platform</p>
                          </div>
                          <div className='platform-body'>
                              <p className='platform-body-p'>  Project based learning solution aimed at providing young and senior talents with an opportunity to showcase their skills to real world projects and challenges from our patner companies and organisations </p>
                          </div>
                          <div className='lower-platform'>
                              <p className='platform-body-p'>umurava skills challenges enables young tallents to build a portfolio and experience that increasestheir readness to accessjob opportunities and projects</p>
                          </div>
                          <div className='start-button-div'>
                               <p className='start-link-p'>get started</p>
                          </div>
                      </div>
                      <div className='platform-image-div'>
                          <Image src={platform} alt='' className='platform-img'/>
                      </div>
                  </div>
               </div>
        </div>
        <div className='footer1'>
              <Footer/> 
        </div>
       
       </>
  )
}

export default page