import React from 'react'
import '../talenthome/style.css';
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
import { Eye } from 'lucide-react';





const Dashbordheading = () => {
  return (<>
          <div className='dashbord-div'>
            <div className='address-div'>
                <p className='top-p'>Welcome Back Hilal</p>
                <p className='lower-p'>Build work experience through Skills Challenges</p>
            </div>
           
           <Link href='.' className='added-a'>
           <div className='profile-link'>
             
                <div className='profile-emoji'>
                       <Eye className='profile-icon' />
                </div> 
                <div className='link-text-div2'>
                     <p className='profile-p'>View Profile</p>
                </div>
            
          </div>
          </Link>

          </div>
          <div className='new-status'>
             <div className='new-part'>
                 <div className='vertical-status'/>
                 <div className='middle-data'>
                     <p className='senior-p'>Completed Challenges</p>
                     <p className='junior-p'>05</p>
                 </div>
                 <div className='front-img'>
                       <ClipboardList className='front-icon' />
                 </div>
             </div>
             <div className='new-part'>
                 <div className='vertical-status'/>
                 <div className='middle-data'>
                     <p className='senior-p'>Open Challenges</p>
                     <p className='junior-p'>200</p>
                 </div>
                 <div className='front-img'>
                       <ClipboardList className='front-icon' />
                 </div>
             </div>
             <div className='new-part'>
                 <div className='vertical-status'/>
                 <div className='middle-data'>
                     <p className='senior-p'>Ongoing Challenges</p>
                     <p className='junior-p'>200</p>
                 </div>
                 <div className='front-img'>
                       <ClipboardList className='front-icon' />
                 </div>
             </div>
          </div>
          </>
  )
}

export default Dashbordheading