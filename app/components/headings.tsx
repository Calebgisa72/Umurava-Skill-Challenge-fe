import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-[40px] text-center font-bold mb-4">{title}</h2>
      <p className="text-[18px] mb-8 text-center">{subtitle}</p>
    </div>
  );
};

export default Heading;