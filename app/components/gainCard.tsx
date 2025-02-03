import React from "react";
import Image, { StaticImageData } from "next/image";

interface GainCardProps {
  imageSrc: string | StaticImageData;
  heading: string;
  text: string;
}

const GainCard = ({ imageSrc, heading, text }: GainCardProps) => {
  return (
    <div className="flex flex-col items-start max-w-sm space-y-3 p-6 bg-white shadow-lg rounded-lg">
      {/* Icon */}
      <div className="w-16 h-16">
        <Image src={imageSrc} alt={heading} layout="intrinsic" />
      </div>

      {/* Heading */}
      <p className="text-lg font-semibold text-gray-800">{heading}</p>

      {/* Description */}
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default GainCard;
