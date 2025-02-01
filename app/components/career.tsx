"use client";
import Image from "next/image";
import React from "react";
import Student from "../images/collabolation.png";

const Career = () => {
    return (
      <div className="py-16 bg-white px-36">
            
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-500 text-white rounded-2xl p-6 md:p-12">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <Image
          src={Student}
          alt="Students collaborating"
          width={400}
          height={300}
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Ready to Unlock Your Career Potential Today!
        </h2>
        <p className="text-sm md:text-base mb-6">
          Join a challenge or a hackathon to gain valuable work experience,
          build an impressive portfolio, and increase your chances to land job
          opportunities and accelerate your career growth.
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg hover:bg-blue-100 transition">
          View Challenge
        </button>
      </div>
    </div>
      </div>
  );
};

export default Career;
