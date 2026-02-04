"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import { Quote, Briefcase } from "lucide-react";

export default function ExpertsSay() {
  const experts = useSelector((state) => state.carExperts);
  const [selectedExpert, setSelectedExpert] = useState(experts[0]);

  return (
    <div className="w-full min-h-screen py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-700">
          What <span className="text-blue-400">Experts</span> Say
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 font-serif">
          Trusted insights from industry professionals
        </p>
      </div>

      {/* Expert Avatars */}
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 justify-center">
        {experts.map((expert) => (
          <button
            key={expert.id}
            onClick={() => setSelectedExpert(expert)}
            className="flex flex-col items-center gap-1.5 sm:gap-2 group"
          >
            <div
              className={`p-[2px] sm:p-[3px] rounded-full transition-all
                ${
                  selectedExpert.id === expert.id
                    ? "bg-blue-900 shadow-lg"
                    : "bg-gray-300 group-hover:bg-blue-400"
                }`}
            >
              <div className="bg-gray-100 p-[1px] sm:p-[2px] rounded-full">
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                />
              </div>
            </div>

            <span
              className={`text-xs sm:text-sm font-semibold transition-colors
                ${
                  selectedExpert.id === expert.id
                    ? "text-blue-400"
                    : "text-gray-600"
                }`}
            >
              {expert.name.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Expert Card */}
      <div className="w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <img
            src={selectedExpert.img}
            alt={selectedExpert.name}
            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg sm:rounded-xl object-cover border flex-shrink-0"
          />

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-gray-800">
              {selectedExpert.name}
            </h3>
            <p className="text-blue-400 font-semibold dm-serif text-sm sm:text-base">
              {selectedExpert.qualification}
            </p>

            <span className="inline-flex items-center gap-2 mt-1.5 sm:mt-2 text-xs sm:text-sm bg-blue-50 text-blue-400 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 dm-serif" />
              {selectedExpert.experience}
            </span>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg sm:rounded-xl border">
          <div className="flex items-center gap-2 mb-3 text-blue-400">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold font-serif text-lg sm:text-xl md:text-2xl">Expert Opinion</span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed dm-serif">
            {selectedExpert.sayAboutInsurance}
          </p>
        </div>
      </div>
    </div>
  );
}