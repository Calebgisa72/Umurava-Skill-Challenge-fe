import React from "react";

interface SkillCardProps {
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title }) => {
  return (
    <div>
      <h3 className="bg-[#F1F1F1] whitespace-nowrap rounded-[8px] shadow-sm hover:bg-[#2B71F0] hover:text-white px-6 py-[14px] text-lg font-medium text-[#687588] w-max">
        {title}
      </h3>
    </div>
  );
};

export default SkillCard;
