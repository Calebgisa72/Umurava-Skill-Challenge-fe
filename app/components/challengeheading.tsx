"use client"

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

const Challengeheading = () => {
  return (
          <>
          <div className='challenge-div'>
                    <p className='bigger-p'>Challenges</p>
                    <p className='smaller-p'>Join a challenge or a hackton to gain valuable work experience</p>
                </div>
                <div className='status-div'>
                     <div className='status-part1'>
                          <div className='icon-div'>
                             <ClipboardList className='p-icon' />
                          </div>
                          <div className='middle-cont'>
                                 <p className='middle-p'>All</p><p className='middle-p'> Challenge</p>
                           </div>
                           <div className='number-div'>
                                <p className='onto-p'>0</p>
                           </div>
                     </div>
                     <div className='status-part2'>
                          <div className='icon-div'>
                             <ClipboardList className='p-icon' />
                          </div>
                          <div className='middle-cont'>
                                 <p className='middle-p'>Completed</p> 
                                 <p className='middle-p'>Challenge</p>
                           </div>
                           <div className='number-div2'>
                                <p className='onto-p'>0</p>
                           </div>
                     </div>
                     <div className='status-part2'>
                          <div className='icon-div'>
                               <ClipboardList className='p-icon' />
                         </div>
                          <div className='middle-cont'>
                                 <p className='middle-p'>Open</p> 
                                 <p className='middle-p'>Challenge</p>
                           </div>
                           <div className='number-div2'>
                                <p className='onto-p'>0</p>
                           </div>
                     </div>
                     <div className='status-part2'>
                          <div className='icon-div'>
                              <ClipboardList className='p-icon' />
                          </div>
                          <div className='middle-cont'>
                                 <p className='middle-p'>Ongoing</p> <p className='middle-p'>Challenge</p>
                           </div>
                           <div className='number-div2'>
                                <p className='onto-p'>0</p>
                           </div>
                     </div>
                     
                </div>
          </>
         )
}

export default Challengeheading