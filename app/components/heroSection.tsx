import React from "react";
import Button from "./button";
import Hero from "../images/hero.png";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white text-white py-20 w-full">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 px-4">
          <h1 className="text-[32px] md:text-[44px] font-bold mb-4 leading-snug text-[blue]">
            Build Work Experience through Skills Challenges Program
          </h1>
          <p className="text-[18px] md:text-[20px] mb-8 text-[#2B3338]">
            Enhance your Employability and Accelerate your Career Growth by
            working on Hands-on projects & hackathons from various businesses &
            organizations.
          </p>
          <Button size="large">Get Started</Button>
        </div>
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src={Hero}
            alt="Skills Challenges"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
