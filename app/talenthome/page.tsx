"use client"
import React from 'react'
import './style.css';
import Image from 'next/image';
import umurava from '../icons/umurava.png';
import { House } from 'lucide-react';
import { ClipboardList } from 'lucide-react';
import Link from 'next/link';
import { Users } from 'lucide-react';
import { UserRound } from 'lucide-react';
import Challenge from '../components/challenge';
import { useState } from 'react';
import { LogOut } from 'lucide-react';
import { X } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Headset } from 'lucide-react';
import { FolderDot } from 'lucide-react';
import { Expand } from 'lucide-react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Columns4 } from 'lucide-react';
import Talentchallenge from '../components/talentchallenge';
import Challengeheading from '../components/challengeheading';
import Dashbordheading from '../components/dashbordheading';

const page = () => {

    
    const [viewdisplay, setviewdisplay] = useState(true);
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setviewdisplay(false);
      };
    
     const removediv = () => {
        
        setviewdisplay(true);
      };


  return (
       <>
       <div className='grand-container'>
         <div className='right-container'>
          <div className={viewdisplay ? 'nav-div' : 'nav-div-none'}>
            <div className='new-header'>
               <div className='header-div'>
                         <div className='nav-image-div'>
                            <Image src={umurava} alt='' className='header-photo' />
                        </div>
                        <a onClick={handleClick}>
                            <div className='minimize-div'>
                                   <X className='minimize-icon'/>
                            </div>
                        </a>
               </div>
            </div>
             <Link href='/'>
             <div className='upper-link-active' >
                     <div className='link-icon'>
                        <House className='link-emoji-active'/>
                     </div>
                     <div className='link-text-div'>
                          <p className='link-p-active'>Dashbord</p>
                     </div>
             </div>
             </Link>
             <Link href='/'>
             <div className='upper-link'>
                     <div className='link-icon'>
                        <ClipboardList className='link-emoji'/>
                     </div>
                     <div className='link-text-div'>
                          <p className='link-p'>Challenges&Hacktons</p>
                     </div>
             </div>
             </Link>
             <Link href='/'>
             <div className='upper-link'>
                     <div className='link-icon'>
                       <Users className='link-emoji'/>
                     </div>
                     <div className='link-text-div'>
                          <p className='link-p'>Community</p>
                     </div>
             </div>
             </Link>
             <div className='lower-nav'>
                 <div className='logout-div'>
                    <div className='profile'>
                        <UserRound/>
                    </div>
                    <div className='active-dot'/>
                    <div className='user-address'>
                          <p className='user-p'>Hilaire sh</p>
                          <p className='user-p'>hilaire@uidesign</p>
                    </div>
                    <Link href='/'>
                       <div className='logout-icon'>
                              <LogOut className='logout-image'/>
                        </div>
                    </Link>
                    
                    

                 </div>
                 <div className='lower-link'>
                     <div className='link-icon'>
                       <FolderDot className='link-emoji'/>
                     </div>
                     <div className='link-text-div'>
                          <p className='link-p'>Refer family &friends</p>
                     </div>
                 </div>
                 <div className='lower-link'>
                     <div className='link-icon'>
                       <Headset className='link-emoji'/>
                     </div>
                     <div className='link-text-div'>
                          <p className='link-p'>Help center</p>
                     </div>
                  </div>
                  <div className='lower-link'>
                     <div className='link-icon'>
                       <Settings className='link-emoji'/>
                     </div>
                     <div className='link-text-div'>
                          <p className='link-p'>Settings</p>
                     </div>
                  </div>
             </div>
          </div>
          <div  className={viewdisplay?'view-div-none':'view-div'}>
                <a onClick={removediv}>
                    <Menu className='new-icon'/>
                </a>
          </div>
          <div className='real-div'>
                <div className='search-div'>
                     <div className='search-icon-div'>
                       <Search className='search-icon'/>
                     </div>
                     <div className='search-body'>
                         <input 
                               type="text"
                               
                               
                               placeholder="Enter text..."
                               className="text-input"
                             />
                     </div>
                     <div className='notification-div'>
                         <Bell className='search-icon'/>
                     </div>
                     <div className='user-div'>
                         <UserRound className='user-icon'/>
                     </div>
                </div>
                {/* <Challengeheading/> */}
                <Dashbordheading/>
                <div className='real-challenges'> 

                  <div className='added-two-div'>
                    <div className='two-div'>
                         <div className='top-div'>
                               <Talentchallenge description='design a dashbord for sokofund'/> 
                               <Talentchallenge description='design a dashbord for sokofund'/>
                         </div>
                         <div className='top-div'>
                               <Talentchallenge description='design a dashbord for sokofund'/> 
                               <Talentchallenge description='design a dashbord for sokofund'/>
                         </div>
                    </div>
                   </div>

                 <div className='added-two-div'>
                    <div className='two-div'>
                         <div className='top-div'>
                              <Talentchallenge description='design a dashbord for sokofund'/> 
                              <Talentchallenge description='design a dashbord for sokofund'/>
                         </div>
                         <div className='top-div'>
                              <Talentchallenge description='design a dashbord for sokofund'/> 
                              <Talentchallenge description='design a dashbord for sokofund'/>
                         </div>
                    </div>
                 </div>

                 <div className='added-two-div'>
                    <div className='two-div'>
                         <div className='top-div'>
                               <Talentchallenge description='design a dashbord for sokofund'/> 
                               <Talentchallenge description='design a dashbord for sokofund'/>
                         </div>
                         <div className='top-div'>
                               <Talentchallenge description='design a dashbord for sokofund'/> 
                               <Talentchallenge description='design a dashbord for sokofund'/>
                         </div>
                    </div>
                </div>
                </div>
          </div>
          

          </div>

       </div>
       </>
  )
}

export default page