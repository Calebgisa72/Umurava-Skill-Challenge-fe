import React from "react";
import Heading from "./headings";
import StatsBanner from "./statsBanner";
import SkillCard from "./skillCard";

const SkillSection = () => {
  const skills = [
    { title: "UI/UX Design" },
    { title: "Data Science" },
    { title: "Graphic Design" },
    { title: "Data Analysis & Research" },
    { title: "Animation" },
    { title: "Videography & Photography" },
    { title: "Web3" },
    { title: "Digital Marketing & Communications" },
    { title: "AI & Machine Learning" },
    { title: "Data Science" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-36">
        <StatsBanner />
        <Heading
          title="Skills Challenges Cover various in-demand skills and Careers for the digital economy"
          subtitle="Explore the projects that various talents are working on."
          className="mx-36"
        />
        <div className="py-12 mx-36">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-4 mb-6">
              {skills.slice(0, 2).map((skill, index) => (
                <SkillCard key={index} title={skill.title} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.slice(2).map((skill, index) => (
                <div key={index + 2} >
                  <SkillCard title={skill.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
