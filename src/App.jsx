import { useState } from "react";
import "./App.css";
import { ArrowRight } from "lucide-react"; // or from your icon library

function App() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const insights = [
    {
      id: 1,
      title: "Essential steps to Advance your UX maturity",
      image:
        "https://static-cdn.qburst.com/5-5-24/images/responsive/service/experienceDesign/insights-1.png",
      bgColor: "bg-gray-100",
    },
    {
      id: 2,
      title: "Empathetic UX: Designing for Human Emotions",
      image:
        "https://static-cdn.qburst.com/5-5-24/images/responsive/service/experienceDesign/insights-2.png",
      bgColor: "bg-gray-200",
    },
    {
      id: 3,
      title: "UX Design for Mobile App Development",
      image:
        "https://static-cdn.qburst.com/5-5-24/images/responsive/service/experienceDesign/insights-3.png",
      bgColor: "bg-gray-300",
    },
  ];

  const stories = [
    {
      image:
        "https://static-cdn.qburst.com/5-5-24/images/responsive/service/experienceDesign/impactStories-1.png",
      title:
        "Driving Environmental and Operational Excellence Through Intuitive Interfaces",
      overlay:
        "We designed a comprehensive environmental monitoring system that reduced operational costs by 40% while improving data accuracy across multiple sites.",
    },
    {
      image:
        "https://static-cdn.qburst.com/5-5-24/images/responsive/service/experienceDesign/impactStories-2.png",
      title:
        "Solving Customization Complexities and User Management Challenges",
      overlay:
        "Our enterprise solution streamlined user management processes, enabling seamless customization across departments and reducing onboarding time by 60%.",
    },
    {
      image:
        "https://static-cdn.qburst.com/5-5-24/images/responsive/service/experienceDesign/impactStories-3.png",
      title: "Designing an AI-Powered Marketing Tool for Enterprise Clients",
      overlay:
        "We created an intelligent marketing platform that leverages AI to deliver personalized campaigns, increasing engagement rates by 85% and ROI by 120%.",
    },
  ];

  const capabilities = [
    {
      id: 1,
      title: "User Research",
      content:
        "Conduct UX research, stakeholder interviews, competitor analysis, and customer journey mapping.",
    },
    {
      id: 2,
      title: "Audit Reports",
      content:
        "Arrive at data-driven recommendations through usability, accessibility, and heuristics audits.",
    },
    {
      id: 3,
      title: "Information Architecture & Wireframing",
      content:
        " Make it easy for users to understand and interact with the product through intuitive content categorization.",
    },
    {
      id: 4,
      title: "Prototyping",
      content:
        "Bring designs to life with interactive prototypes to enable early-stage testing and feedback.",
    },
    {
      id: 5,
      title: "Design System",
      content:
        "Build guidelines and reusable components to ensure consistency, efficiency, and scalability.",
    },
    {
      id: 6,
      title: "Branding",
      content:
        " Create a unique brand personality with a consistent voice, values, and visual identity for an emotional connection with users.",
    },
    {
      id: 7,
      title: "Usability Testing",
      content:
        "Evaluate product usability through task-based testing, unmoderated observations, eye-tracking analysis, and more.",
    },
    {
      id: 8,
      title: "Design Testing",
      content:
        "Assess the visual appeal and aesthetics to improve the design quality and align it with brand guidelines.",
    },
  ];
  return (
    <>
      {/* hero section */}
      <section className="relative h-[80%] sm:h-[700px] md:h-[750px] lg:h-[800px] xl:h-[850px]  w-full flex items-center px-4 sm:px-6 md:px-16 lg:px-24 bg-cover bg-center bg-no-repeat">
        {/* Overlay and background image */}
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <img
            src="/banner.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-white animate-fade-in px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight lg:leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Unified Experience Design for Brand Loyalty
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed mb-6 sm:mb-8 text-gray-100">
            User experience is the ultimate differentiator. Make sure your brand
            delivers exceptional experiences at every touchpoint.
          </p>
          <button className="group flex items-center gap-3 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0">
            connect for UX strategy consulting
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* second section */}
      <section className="bg-gray-50 py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-pink-600">Seamless Interactions</span>{" "}
            <span className="text-gray-900">Engineered with Precision</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
            While many enterprises struggle with a fragmented digital presence,
            we engineer ecosystems that ensure consistency across all channels
            to strengthen brand recognition. We combine deep domain expertise
            with human-centered design methodologies to design solutions that
            are technically feasible and aligned with business goals. Our
            engineering teams ensure the designed experience is flawlessly
            implemented and performs at scale.
          </p>
        </div>
      </section>
      {/* third section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 uppercase tracking-wide mb-1 sm:mb-2">
              SOLUTION
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
              <span className="text-pink-600">Creating UX Delight:</span>
              <br />
              <span className="text-gray-900">Delivering on Brand Values</span>
            </h2>
          </div>

          {/* Card */}
          <div className="group relative overflow-hidden rounded-3xl cursor-pointer border-2">
            {/* Background layers */}
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute inset-0 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 text-black">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Experience Design Studio
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-full sm:max-w-4xl lg:max-w-5xl">
                Let the design be your business enabler. Create positive user
                experiences across touchpoints, focusing on KPIs that include
                reduced operational costs to new business growth. We can work
                with you from strategy to execution, delivering solutions that
                evolve with your business.
              </p>

              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fourth section */}
      <section className="bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-16 gap-4 md:gap-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Clients
            </h2>
            <a
              href="#"
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-lg transition-colors group"
            >
              View All
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Cross Channel Logo */}
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <svg className="w-48 h-24" viewBox="0 0 200 80" fill="none">
                {/* Chat bubble icon */}
                <path
                  d="M30 25 Q30 20 35 20 L60 20 Q65 20 65 25 L65 40 Q65 45 60 45 L42 45 L35 52 L35 45 Q30 45 30 40 Z"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="40" cy="32" r="2" fill="#9CA3AF" />
                <circle cx="47" cy="32" r="2" fill="#9CA3AF" />
                <circle cx="54" cy="32" r="2" fill="#9CA3AF" />
                {/* Text */}
                <text
                  x="75"
                  y="35"
                  className="text-xl font-bold fill-gray-400"
                  style={{ fontSize: "18px" }}
                >
                  Cross
                </text>
                <text
                  x="75"
                  y="52"
                  className="text-xl font-bold fill-gray-400"
                  style={{ fontSize: "18px" }}
                >
                  Channel
                </text>
              </svg>
            </div>

            {/* Root On Logo */}
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <svg className="w-48 h-24" viewBox="0 0 200 80" fill="none">
                <path
                  d="M35 25 L37 32 L30 35 L37 38 L35 45 L42 42 L45 50 L48 42 L55 45 L53 38 L60 35 L53 32 L55 25 L48 28 L45 20 L42 28 Z"
                  fill="#9CA3AF"
                />
                <text
                  x="70"
                  y="42"
                  className="text-2xl font-bold fill-gray-400"
                  style={{ fontSize: "22px" }}
                >
                  ROOT ON
                </text>
                <text
                  x="70"
                  y="56"
                  className="text-xs fill-gray-400"
                  style={{ fontSize: "10px" }}
                >
                  WE BELIEVE IN WHAT YOU DO
                </text>
              </svg>
            </div>

            {/* StaynTouch Logo */}
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <svg className="w-52 h-24" viewBox="0 0 220 80" fill="none">
                <path
                  d="M95 30 L95 50 M95 40 Q95 30 105 30 L105 50"
                  stroke="#9CA3AF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <text
                  x="30"
                  y="45"
                  className="text-2xl font-bold fill-gray-400 tracking-wider"
                  style={{ fontSize: "20px", letterSpacing: "0.1em" }}
                >
                  STAY
                </text>
                <text
                  x="115"
                  y="45"
                  className="text-2xl font-bold fill-gray-400 tracking-wider"
                  style={{ fontSize: "20px", letterSpacing: "0.1em" }}
                >
                  TOUCH
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* fifth section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-12">
            <div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 uppercase tracking-wide mb-1 sm:mb-2">
                IMPACT STORIES
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight">
                <span className="text-pink-600">
                  Engineering Scalable Experiences:
                </span>
                <br />
                <span className="text-gray-900">
                  Impact of Our Enterprise UX Design Services
                </span>
              </h2>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-base sm:text-lg transition-colors mt-4 md:mt-0 group"
            >
              View All
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl cursor-pointer h-64 sm:h-72 md:h-80 lg:h-96"
              >
                {/* Image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                    {story.title}
                  </h3>
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed text-center">
                    {story.overlay}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  sixth next section from the logos */}

      <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Tools
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Figma */}
            <div className="group flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <rect
                  x="12"
                  y="8"
                  width="10"
                  height="10"
                  rx="2"
                  className="fill-gray-400 group-hover:fill-[#F24E1E] transition-colors duration-300"
                />
                <rect
                  x="12"
                  y="19"
                  width="10"
                  height="10"
                  rx="2"
                  className="fill-gray-400 group-hover:fill-[#A259FF] transition-colors duration-300"
                />
                <rect
                  x="12"
                  y="30"
                  width="10"
                  height="10"
                  rx="5"
                  className="fill-gray-400 group-hover:fill-[#0ACF83] transition-colors duration-300"
                />
                <rect
                  x="23"
                  y="8"
                  width="10"
                  height="10"
                  rx="2"
                  className="fill-gray-400 group-hover:fill-[#FF7262] transition-colors duration-300"
                />
                <circle
                  cx="28"
                  cy="24"
                  r="5"
                  className="fill-gray-400 group-hover:fill-[#1ABCFE] transition-colors duration-300"
                />
              </svg>
              <span className="text-2xl font-semibold text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                Figma
              </span>
            </div>

            {/* Claude */}
            <div className="group flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <circle
                  cx="24"
                  cy="24"
                  r="3"
                  className="fill-gray-400 group-hover:fill-[#D97757] transition-colors duration-300"
                />
                <path
                  d="M24 12 L28 20 L24 24 L20 20 Z"
                  className="fill-gray-400 group-hover:fill-[#D97757] transition-colors duration-300"
                />
                <path
                  d="M36 24 L28 28 L24 24 L28 20 Z"
                  className="fill-gray-400 group-hover:fill-[#D97757] transition-colors duration-300"
                />
                <path
                  d="M24 36 L20 28 L24 24 L28 28 Z"
                  className="fill-gray-400 group-hover:fill-[#D97757] transition-colors duration-300"
                />
                <path
                  d="M12 24 L20 20 L24 24 L20 28 Z"
                  className="fill-gray-400 group-hover:fill-[#D97757] transition-colors duration-300"
                />
              </svg>
              <span className="text-2xl font-semibold text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                Claude
              </span>
            </div>

            {/* Gemini */}
            <div className="group flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 8 L28 18 L38 14 L30 24 L38 34 L28 30 L24 40 L20 30 L10 34 L18 24 L10 14 L20 18 Z"
                  className="fill-gray-400 group-hover:fill-[#4285F4] transition-colors duration-300"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="4"
                  className="fill-gray-400 group-hover:fill-[#EA4335] transition-colors duration-300"
                />
              </svg>
              <span className="text-2xl font-semibold text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                Gemini
              </span>
            </div>

            {/* ChatGPT */}
            <div className="group flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 8 C18 8 13 13 13 19 C13 20 13.2 21 13.5 22 L10 24 L13.5 26 C14 28 15.5 29.5 17.5 30 L19 35 L21 30 C22 30.3 23 30.5 24 30.5 C25 30.5 26 30.3 27 30 L29 35 L30.5 30 C32.5 29.5 34 28 34.5 26 L38 24 L34.5 22 C34.8 21 35 20 35 19 C35 13 30 8 24 8 Z"
                  className="fill-gray-400 group-hover:fill-[#10A37F] transition-colors duration-300"
                />
                <circle
                  cx="24"
                  cy="20"
                  r="7"
                  className="fill-gray-400 group-hover:fill-[#19C37D] transition-colors duration-300"
                />
              </svg>
              <span className="text-2xl font-semibold text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                ChatGPT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* seventh  next section  */}

      <section className="bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <p className="text-sm md:text-base font-semibold text-gray-800 uppercase tracking-wide mb-2">
              CAPABILITIES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-pink-600">Experience Design Services:</span>
              <br />
              <span className="text-gray-900">
                Our Steps in Engineering Exceptional Experiences
              </span>
            </h2>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition-transform duration-300 ${
                      openItems[item.id] ? "rotate-180" : ""
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

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems[item.id] ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eigth section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              APPROACH
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-pink-600">The QBurst Difference:</span>
              <br />
              <span className="text-black-900">
                From Design to Business Impact
              </span>
            </h1>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-black-900 mb-4">
                  Holistic Approach
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Experience Design framework offers a{" "}
                  <span className="text-pink-600 underline decoration-pink-600 cursor-pointer">
                    structured approach
                  </span>{" "}
                  to bridge the gap between your business objectives and your
                  users' needs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-black-900 mb-4">
                  AI-Enabled Team
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  AI-assisted user research and interface design enables us to
                  iterate quickly and deliver solutions at scale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-black-900 mb-4">
                  Human-Centered Design
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We focus on user-centered design to achieve business outcomes
                  and deep user satisfaction, effectively addressing two key
                  objectives.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-black-900 mb-4">
                  Integrated Engineering
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We don't hand off a design and walk away. We are your partner
                  for both strategy and execution, eliminating the friction of
                  multi-vendor projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* last section for the whole page */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              INSIGHTS
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-pink-600">Expert Musings on </span>
              <span className="text-blue-900">Experience Design</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <div key={insight.id} className="group cursor-pointer">
                <div
                  className={`${insight.bgColor} rounded-2xl overflow-hidden mb-6 aspect-video flex items-center justify-center`}
                >
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-2">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 leading-snug">
                    {insight.title}
                  </h3>

                  <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
