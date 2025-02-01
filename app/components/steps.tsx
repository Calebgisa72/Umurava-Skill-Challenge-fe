"use client";
import Image from "next/image";
import React from "react";
import { step1, step2 } from "../images/index";

const steps = [
  {
    id: 1,
    title: "Sign up on Umurava Platform",
    description: "Submit your completed project for evaluation",
    image: step1,
  },
  {
    id: 2,
    title: "Browse Open Challenges",
    description:
      "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals.",
    image: step2,
  },
  {
    id: 3,
    title: "Register and Participate",
    description: "Sign up for the challenge and start working on the project.",
  },
  {
    id: 4,
    title: "Submit your work",
    description: "Submit your completed project for evaluation.",
  },
  {
    id: 5,
    title: "Receive Feedback and Recognition",
    description: "Get feedback on your work and celebrate your achievements.",
  },
];

const Steps = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{
          gridTemplateRows: "repeat(2, auto) 1fr", // Custom row heights
        }}
      >
        {/* Column 1 */}
        <div className="space-y-8">
          {steps.slice(0, 2).map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col p-6 pb-40 bg-white rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {step.id}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700 mb-4">{step.description}</p>
              {step.image && (
                <div className="absolute bottom-0 right-0">
                  <Image
                    src={step.image}
                    alt={`Step ${step.id}`}
                    className="rounded-lg shadow"
                    width={263}
                    height={147}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-8">
          {steps.slice(2).map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col p-9 bg-white rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {step.id}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700 mb-4">{step.description}</p>
              {step.image && (
                <div className="absolute bottom-4 right-4">
                  <Image
                    src={step.image}
                    alt={`Step ${step.id}`}
                    className="rounded-lg"
                    width={263}
                    height={147}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
