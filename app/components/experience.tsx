import React from "react";
import Button from "./button"
import Hero from "../images/hero.png";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex-1">
            <Image
              src={Hero}
              alt="Skills Challenges"
              width={500}
              height={500}
            />
          </div>
          <div className="ml-12 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Enhance Your Employment Path
            </h2>
            <p className="text-lg mb-8">
              Develop the in-demand skills and build a strong portfolio to
              increase your chances of landing your dream job or contract.
            </p>
            <Button size="large">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
