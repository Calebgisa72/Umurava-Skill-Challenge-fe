"use client";
import React from "react";

const ParticipantsCard = () => {
  const participants = [
    {
      name: "Hilaire Sh",
      role: "Product Designer",
      avatar: "https://source.unsplash.com/random/100x100/?face",
    },
    {
      name: "Christian Manzi",
      role: "UI/UX Designer",
      avatar: "https://source.unsplash.com/random/100x100/?profile",
    },
    {
      name: "Jolly Mutesi",
      role: "Content Creator",
      avatar: "https://source.unsplash.com/random/100x100/?person",
    },
    {
      name: "Dr. Samuel Smith",
      role: "Mental Health Professional",
      avatar: "https://source.unsplash.com/random/100x100/?man",
    },
    {
      name: "Dr. Lily Chen",
      role: "Dermatologist",
      avatar: "https://source.unsplash.com/random/100x100/?woman",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Participants</h2>
        <span className="text-blue-600 font-bold text-sm bg-blue-100 px-2 py-1 rounded-lg">
          250
        </span>
      </div>

      {/* Participant List */}
      <div className="space-y-4">
        {participants.map((participant, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-4 last:border-b-0"
          >
            <div className="flex items-center">
              {/* Avatar */}
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-4">
                <img
                  src={participant.avatar}
                  alt={participant.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {participant.name}
                </p>
                <p className="text-sm text-gray-500">{participant.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6">
        <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default ParticipantsCard;