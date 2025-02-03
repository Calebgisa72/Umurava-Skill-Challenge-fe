import React from "react";
import Heading from "./headings";
import GainCard from "./gainCard";
import { personal, earn, enhance, learn } from "../icons/index";
import SkillSection from "../images/skillbanner.png";
import Image from "next/image";

const Gain = () => {
  return (
    <div className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <Heading
          title="What Else Can I Gain from Participating in Skills Challenges?"
          subtitle="Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals."
          className="text-center max-w-3xl mx-auto"
        />
        <div className="py-12 flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Gain Cards Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:w-2/3">
            <div className="flex flex-col gap-6">
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
            <div className="flex flex-col gap-6">
              <GainCard
                imageSrc={earn}
                heading="Earn Recognition and Prizes"
                text="Gain valuable experience and knowledge to advance your career in the digital economy."
              />
              <GainCard
                imageSrc={learn}
                heading="Learn from Industry Experts"
                text="Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces."
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src={SkillSection}
              alt="Benefit Icon"
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gain;
