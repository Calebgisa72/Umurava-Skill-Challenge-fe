import React from "react";
import Image from "next/image";
import play from "../icons/video.png";

const TestimonialCard = () => {
  return (
    <div className="border rounded-3xl p-8  w-[536.53px] bg-[#FFFEFE] border-solid border-[#D2D2D2]">
      <div className="bg-[#2B71F0] rounded-3xl relative h-72 flex justify-center items-center p-4">
        <Image src={play} alt="Play Icon" className="w-16 h-16" />
      </div>

      <div className="pt-4 flex items-center space-x-4">
        <div className="w-14 h-14 bg-[#2B71F0] rounded-full"></div>
        <div>
          <p className="text-lg font-semibold text-gray-900">Manzi Jack</p>
          <p className="text-sm font-medium text-gray-500">Product Designer, Kigali</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
