import React from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import EnhanceEmploymentPath from "./components/experience";
import EarnRecognitionPrizes from "./components/experienceCard";
import Footer from "./components/footer";
import Challenge from "./components/challenge";
import Button from "./components/button";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="hero-container">
        <HeroSection />
      </div>
      <div className="experience-container">
        <EnhanceEmploymentPath />
      </div>
      <div className="experience-card-container">
        <EarnRecognitionPrizes />
      </div>
      <div className="experience-card-container">
        <EarnRecognitionPrizes />
      </div>
      <div className="experience-card-container">
        <EarnRecognitionPrizes />
      </div>
      <div className="experience-card-container">
        <EarnRecognitionPrizes />
      </div>
      <div className="challenge-container">
        <div className="mx-36 flex justify-between gap-5">
          <Challenge description="design a dashboard for Sokofund" />
          <Challenge description="design a dashboard for Sokofund" />
          <Challenge description="design a dashboard for Sokofund" />
        </div>
        <div className="flex justify-center">
          <Button>View More</Button>
        </div>
      </div>
      <div className="footer1">
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
