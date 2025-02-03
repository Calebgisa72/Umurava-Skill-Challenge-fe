"use client";
import React from "react";

const CreateChallenge = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-2">
          Create New Challenge
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Fill out these details to build your broadcast
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Challenge/Hackathon Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Challenge/Hackathon Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Deadline and Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                placeholder="Duration"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Money Prize and Contact Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Money Prize
              </label>
              <input
                type="text"
                placeholder="Prize"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              rows={3}
              placeholder="Enter text here..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-400">
              Keep this simple of 250 characters
            </p>
          </div>

          {/* Project Brief */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Brief
            </label>
            <textarea
              rows={2}
              placeholder="Enter text here..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-400">
              Keep this simple of 50 characters
            </p>
          </div>

          {/* Project Description & Tasks */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description & Tasks
            </label>
            <textarea
              rows={5}
              placeholder="Enter text here..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-400">
              Keep this simple of 500 characters
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between space-x-4">
            <button
              type="button"
              className="w-full py-2 px-6 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-2 px-6 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Create Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateChallenge;
