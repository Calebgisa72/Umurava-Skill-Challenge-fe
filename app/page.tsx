"use client";
import React from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Challenge from "./components/challenge";
import Button from "./components/button";
import SkillSection from "./components/skillSection";
import PayrollDashboard from "./components/PayrollDashboard";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from "./components/headings";
import Gain from "./components/gain";
import Testimonial from "./components/testimonial";
import SignUp from "./components/signUp";
import Career from "./components/career";

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
        <Experience />
      </div>
      <SkillSection />
      <div className="bg-white">
      <Swiper
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <PayrollDashboard />
        </SwiperSlide>
        <SwiperSlide>
          <PayrollDashboard />
        </SwiperSlide>
        <SwiperSlide>
          <PayrollDashboard />
        </SwiperSlide>
        <SwiperSlide>
          <PayrollDashboard />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="challenge-container py-16 bg-white">
        <div className="container mx-36">
          <Heading
            title="Explore Challenges & Hackathons "
            subtitle="Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals. "
            className="mx-72"
          />
        </div>
        <div className="mx-36 flex justify-between gap-5">
          <Challenge description="design a dashboard for Sokofund" />
          <Challenge description="design a dashboard for Sokofund" />
          <Challenge description="design a dashboard for Sokofund" />
        </div>
        <div className="flex justify-center">
          <Button>View More</Button>
        </div>
      </div>
      <Gain />
      <Testimonial />
      <SignUp />
      <Career />
      <div className="footer1">
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
