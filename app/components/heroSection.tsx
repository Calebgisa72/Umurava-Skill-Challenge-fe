import React from "react";
import Button from "./button";
import Hero from "../images/hero.png";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary-color text-white py-20 w-full">
      <div className="container mx-auto flex flex-row-reverse items-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Build Work Experience through Skills Challenges Program
          </h1>
          <p className="text-lg mb-8">
            Enhance your Employability and Accelerate your Career Growth by
            working on Hands-on projects & hackathons from various businesses &
            organizations.
          </p>
          <Button size="large">Get Started</Button>
        </div>
        <div className="w-1/2 flex justify-center">
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