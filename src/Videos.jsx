import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects, videos } from "./assets/seed";
import Card from "./Card";

const Videos = () => {
  const navigate = useNavigate();
  const [serviceOpen, setServiceOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  const services = [
    "User Research",
    "UX Design",
    "UI Design",
    "Prototyping",
    "Design System",
    "Usability Testing",
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "E-commerce",
    "Education",
    "Technology",
    "Manufacturing",
  ];

  return (
    <div className="container mx-auto">
      <section className="bg-white py-8 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <span className="text-gray-600">Resources</span>
            <span className="text-gray-400">/</span>
            <span className="text-pink-600 font-semibold">Case Studies</span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 w-full">
            {/* Case Studies - Active/Non-clickable */}
            <button
              onClick={() => navigate("/casestudy")}
              className="px-22 py-3 rounded-full text-lg  bg-white text-black-900 border-1 border-black-300 hover:bg-gray-100"
            >
              Case Studies
            </button>

            {/* Videos - Clickable */}
            <button
              onClick={() => navigate("/videos")}
              className="px-22 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-red-500  to-red-900 text-white cursor-default shadow-lg"
            >
              Videos
            </button>

            {/* White Papers - Clickable */}
            <button
              onClick={() => navigate("/whitepapers")}
              className="px-22 py-3 rounded-full text-lg  bg-white text-black-900 border-1 border-black-300 hover:bg-gray-100"
            >
              White Papers
            </button>

            {/* Brochures - Clickable */}
            <button
              onClick={() => navigate("/brochures")}
              className="px-22 py-3 rounded-full text-lg  bg-white text-black-900 border-1 border-black-300  hover:bg-gray-100"
            >
              Brochures
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-row-reverse w-[89%] top-4 right-4 z-50 items-center gap-4">
          {/* Browse by Service */}
          <div className="relative">
            <button
              onClick={() => {
                setServiceOpen(!serviceOpen);
                setIndustryOpen(false);
              }}
              className="flex items-center justify-between gap-8 px-6 py-3 bg-white border border-gray-300  hover:border-gray-400 transition-colors duration-200 min-w-[280px]"
            >
              <span className="text-gray-700 font-medium">
                Browse by Service
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  serviceOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Service Dropdown */}
            {serviceOpen && (
              <div className="absolute top-full  right-0 w-full bg-white border border-gray-300 shadow-lg py-2 max-h-64 overflow-y-auto">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      console.log(`Selected service: ${service}`);
                      setServiceOpen(false);
                    }}
                    className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-black-600 transition-colors duration-200"
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* card section for the videos  */}
      <section className="py-10 px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((project) => (
            <Card
              key={project.id}
              photo={project.image}
              title={project.title}
              description={project.desciption} // fixed typo
              showButton={true} // show the button
              buttonText="More Details" // button text
              // button action
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Videos;
