import React from "react";
import Upperproblem from "./upperproblem";
import Problem from "./problem";
import Headings from "./headings";

const Experience: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="container mx-36">
        <Headings
          subtitle="Join Skills Challenges Program to accelerate your career growth and
          become part of Africa’s largest workforce of digital professionals."
          title="Experience a New Way of Building Work Experience" 
          className="mx-72"
        />
        <div className="mx-36">
          <div className="reason-part1">
            <Upperproblem />
          </div>
          <div className="reason-divs">
            <Problem />
            <Problem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
