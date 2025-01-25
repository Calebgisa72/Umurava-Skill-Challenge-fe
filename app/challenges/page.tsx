'use client'; 
import React from 'react'
import Header from '../components/header'
import { Facebook } from 'lucide-react';
import Button from '../components/button'
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Challenge from '../components/challenge';
import { useRouter } from "next/navigation";
import Link from 'next/link'; 
import footerimage from '../images/footer.png';
import { Youtube } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Copyright } from 'lucide-react';
import { Mails } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import Footer from '../components/footer';

import   './style.css'


const challenges = () => {
  const router = useRouter();
  return (
    <>
    <div className='grand-container'>

    
        <div className='header-container'>
            <Header/>
        </div>
        <div className='go-back-grand'>  
            <div className='go-back'>    
           <Link href="." className='go-back-link'>
               <div className='arrow-div'>
                     <ArrowLeft  className="back-arrow" />  
               </div>
                    
               <p className="go-back-text">Go back</p>
             
           </Link>
           <div>
               <p className="challenge-text">/challenges & hackhtons</p>
           </div>
             </div>
        </div>
        <div className='lower-div'>
             <div className='two-div'>
                <div className='upper-div'>
                  
                     <Challenge description='design a dashbord for sokofund'/>
                  
                  
                     <Challenge description='design a dashbord for sokofund' />
                  
                    
                   
                </div>
                <div className='upper-div'>
                   <Challenge description='design a dashbord for sokofund'/>
                   <Challenge description='design a dashbord for sokofund'/>
                </div>
                
             </div>
             <div className='two-div'>
                <div className='upper-div'>
                   <Challenge description='design a dashbord for sokofund'/>
                   <Challenge description='design a dashbord for sokofund'/>
                </div>
                <div className='upper-div'>
                   <Challenge description='design a dashbord for sokofund'/>
                   <Challenge description='design a dashbord for sokofund'/>
                </div>
                
             </div>
             <div className='two-div'>
                <div className='upper-div'>
                   <Challenge description='design a dashbord for sokofund'/>
                   <Challenge description='design a dashbord for sokofund'/>
                </div>
                <div className='upper-div'>
                   <Challenge description='design a dashbord for sokofund'/>
                   <Challenge description='design a dashbord for sokofund'/>
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

export default challenges