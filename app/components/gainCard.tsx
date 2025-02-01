import React from "react";
import Image, { StaticImageData } from "next/image";

interface GainCardProps {
    imageSrc: string | StaticImageData;
    heading: string;
    text: string;
    }

const GainCard = ({ imageSrc, heading, text }: GainCardProps) => {
  return (
    <div className="py-12">
      <div className="w-16 h-16">
        <Image src={imageSrc} alt="Benefit Icon" />
      </div>
      <div className="pt-2">
        <p className="text-[16px] font-bold">{heading}</p>
      </div>
      <div className="pt-3">
        <p className="font-light text-[14px] text-[#687588]">{text}</p>
      </div>
    </div>
  );
};

export default GainCard;