
'use client'; 
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
import React from 'react';

import '../challenges/style.css'

const Footer = () => {
  return (
      <>
      <div className='footer'>
         <div className='upper-footer'>
             <div className='footer-image'>
                 <Image 
                     src={footerimage}
                     alt="Example" 
                     className="custom-image-footer"
                     
                     
                   />
    
             </div>
             <div className='social-div'>
                   <div className='facebook'>
                       <Link href='/'>
                              <Youtube className='social-icon' />
                       </Link>
                   </div>
                   <div className='facebook'>
                       <Link href='/'>
                              <Linkedin className='social-icon' />
                       </Link>
                   </div>
                   <div className='facebook'>
                       <Link href='/'>
                              <Mails className='social-icon' />
                       </Link>
                   </div>
                   <div className='facebook'>
                       <Link href='/'>
                              <Facebook className='social-icon' />
                       </Link>
                   </div>
             </div>
        </div>
         <hr className="custom-line" />
             <div className='middle-div'>
                <div className='upper-address'>
                      <div className='address'>
                         <div className='address-heading'>
                               <p className='address-heading'>Our Address</p>
                         </div>
                        <Link href='/email'>
                       
                            <div className='address-field'>
                                 
                                    <Mails className='address-icon' />
                                      
                                      
                                 <div className='email-field'>
                                      <p className="address-small-p">career@tickets.com</p>
                                  </div>
                          </div>
                         </Link>
                         <Link href='/email'>
                       
                            <div className='address-field'>
                                 
                                    <MapPin className='address-icon' />
                                      
                                      
                                 <div className='email-field'>
                                      <p className="address-small-p">89 KG Ave Kigali</p>
                                  </div>
                          </div>
                         </Link>
                         <Link href='/email'>
                       
                            <div className='address-field'>
                                 
                                    <Phone className='address-icon' />
                                      
                                      
                                 <div className='email-field'>
                                      <p className="address-small-p">+250 700 000</p>
                                  </div>
                          </div>
                         </Link>
                      </div>
                      <div className='quick-links'>
                             <div className='link-heading'>
                                    <p className="address-heading">Quick links</p>
                             </div>
                             <Link href='/Home'>
                                 <div className='link-heading'>
                                    <p className="address-small-p">Home</p>
                                 </div>
                             </Link>
                             <Link href='/Home'>
                                 <div className='link-heading'>
                                    <p className="address-small-p">Program</p>
                                 </div>
                             </Link>
                             <Link href='/Home'>
                                 <div className='link-heading'>
                                    <p className="address-small-p">About</p>
                                 </div>
                             </Link>
                             <Link href='/Home'>
                                 <div className='link-heading'>
                                    <p className="address-small-p">Contact us</p>
                                 </div>
                             </Link>
                      </div>
                </div>

                

                <div className='subscribe'>
                    <div className='subscribe-heading'> 
                        <p className='subscribe-p'>join our news letter to keep udpade  with us</p>
                    </div>
                    <div className='subscribe-content'> 
                         <input
                               type="text"
                               placeholder="Email"
                               className='email-input'
                            />
                            <Link href='/Subscribe'>
                                <div className='subscribe-button'>
                                     <p className='subscribe-text'>subscribe</p>
                                </div>  
                            </Link>                        
                    </div>

                </div>
             </div>
             
             <hr className="custom-line" />

             <div className='copyright'>
                   <div className='copyright-part'>
                      <p className='copyright-p'>copyright</p> <Copyright size={18} className="text-white my-4 mx-2" />
                      <p className='copyright-p'>All Rights Reserved SawaPay</p> 
                   </div>
                   <div className='copyright-part2'>
                     <Link href='/Challenges'>
                         <p className='copyright-p'>privacy policy |</p>
                      </Link>
                      <Link href='/Challenges'>
                          <p className='copyright-p'>terms & conditions</p> 
                      </Link>
                   </div>
             </div>
     
    </div>
      </>
  )
}

export default Footer