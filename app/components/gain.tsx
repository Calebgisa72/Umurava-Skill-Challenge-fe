import React from 'react'
import Heading from './headings'
import GainCard from './gainCard';
import { personal, earn, enhance, learn } from '../icons/index';
import SkillSection from "../images/skillbanner.png";
import Image from 'next/image';


const Gain = () => {
  return (
    <div className="py-16">
      <div className="container mx-36">
        <Heading
          title="What else can I gain from participating in Skills Challenges ?"
          subtitle="Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals."
          className="mx-72"
        />
        <div className="py-12 flex justify-between items-start">
          <div className="w-2/3 flex justify-between">
            <div className="flex flex-col">
              <GainCard
                imageSrc={enhance}
                heading="Enhance Your Employment Path"
                text="Network with other talented individuals and learn from their experiences"
              />
              <GainCard
                imageSrc={personal}
                heading="Personal Growth"
                text="Challenge yourself, learn new skills, and expand your professional network."
              />
            </div>
            <div className="flex flex-col">
              <GainCard
                imageSrc={earn}
                heading="Earn Recognition and Prizes"
                text="Gain valuable experience and knowledge to advance your career in the digital economy:"
              />
              <GainCard
                imageSrc={learn}
                heading="Learn from Industry Experts"
                text="Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces."
              />
            </div>
          </div>

          <div className="w-1/2">
            <Image src={SkillSection} alt="Benefit Icon" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gain
