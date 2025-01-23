import React from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import EnhanceEmploymentPath from "./components/experience";
import EarnRecognitionPrizes from "./components/experienceCard";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <EnhanceEmploymentPath />
      <EarnRecognitionPrizes />
    </div>
  );
};

export default LandingPage;
