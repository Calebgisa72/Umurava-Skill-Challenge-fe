import React from "react";
import Button from "./button";
import Hero from "../images/hero.png";
import Image from "next/image";

const EarnRecognitionPrizes: React.FC = () => {
  return (
    <section className="bg-primary-color text-white py-16">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="ml-12 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Earn Recognition and Prizes
            </h2>
            <p className="text-lg mb-8">
              Earn both Money and Knowledge Prizes by participating in various
              contests and competitions by working on real-world projects and
              hackathons from our partner companies & organizations.
            </p>
            <Button size="large">Get Started</Button>
          </div>
          <div className="flex-1">
            <Image
              src={Hero}
              alt="Skills Challenges"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnRecognitionPrizes;
