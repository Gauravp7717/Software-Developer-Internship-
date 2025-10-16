import React from "react";

const Card = ({ photo, title, description, showButton = false }) => {
  return (
    <div className="max-w-sm bg-gray-50 border border-gray-200 overflow-hidden ">
      {/* Image */}
      <img src={photo} alt={title} className="w-full h-60 object-cover" />

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold italic font-montserrat text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm italic h-z">{description}</p>

        {/* Conditional Button */}
        {showButton && (
          <div className="flex items-center justify-center py-4 pt-8 bg-gray-50">
            <button className="flex items-center gap-3 px-8 py-3 bg-white border-2 border-pink-600 rounded-full text-pink-600 font-bold text-lg hover:bg-pink-600 hover:text-white transition-all duration-300">
              Watch Now
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
