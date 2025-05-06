import React from 'react';
import { Link } from 'react-router-dom';

const EventObjectives = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      {/* Summit Card */}
      <div className="bg-gradient-to-br from-[#003DB4] to-[#0066FF] rounded-2xl shadow-xl overflow-hidden text-white font-sans">
        {/* Header */}
        <div className="bg-black/10 py-8 px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug font-poppins">
            EU - Nigeria Trade Mission 2025,
            <br />
            Brussels Africa Business Summit{' '}
            <span className="block mt-1">(BABS)</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-poppins text-center">
            <span className="font-bold">Theme:</span> Bridging Continents:
            Strengthening Trade, Investment, <br /> and Knowledge Transfer for
            Economic Growth.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-poppins text-center">
            <span className="font-bold">Date:</span> May 25th to 31st, 2025.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-poppins text-center">
            <span className="font-bold">Location:</span> Abuja and selected
            locations across Nigeria.
          </p>
          <Link
            to="/registration"
            className="inline-block mt-4 bg-white text-[#003DB4] px-8 py-3 rounded-full font-semibold hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
          >
            Register Now
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Objectives Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-white/20">
              Summit Objectives
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#FFD700] text-[#003DB4] rounded-full flex items-center justify-center font-bold mr-3 mt-0.5">
                  1
                </span>
                <span>
                  Facilitate B2B and B2G matchmaking to unlock mutual trade and
                  investment opportunities.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#FFD700] text-[#003DB4] rounded-full flex items-center justify-center font-bold mr-3 mt-0.5">
                  2
                </span>
                <span>
                  Support technology transfer and digital transformation,
                  especially in AI, agritech, and renewable energy.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#FFD700] text-[#003DB4] rounded-full flex items-center justify-center font-bold mr-3 mt-0.5">
                  3
                </span>
                <span>
                  Advance trade compliance, knowledge exchange, and
                  institutional partnerships.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#FFD700] text-[#003DB4] rounded-full flex items-center justify-center font-bold mr-3 mt-0.5">
                  4
                </span>
                <span>
                  Promote sustainable growth across sectors including
                  agriculture, energy, infrastructure, and education.
                </span>
              </li>
            </ul>
          </div>

          {/* Details Sections */}
          <div className="space-y-6">
            {/* Focus Areas */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3">
                Focus Areas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#FFD700] mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Trade & Investment Promotion</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#FFD700] mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Technology & Digital Transformation</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#FFD700] mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Agriculture, Agribusiness & Rural Development</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#FFD700] mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Energy & Infrastructure Development</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#FFD700] mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Knowledge Transfer & Capacity Building</span>
                </li>
              </ul>
            </div>

            {/* Featured Speakers */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3">
                Featured Speakers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Dr. Sarah Johnson</p>
                    <p className="text-sm opacity-80">
                      AI Research Director, TechFuture
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Mohammed Al-Farsi</p>
                    <p className="text-sm opacity-80">CEO, Green Energy MENA</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Elena Rodriguez</p>
                    <p className="text-sm opacity-80">
                      Head of Trade Compliance, Global Partners
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden bg-black/15 py-4 text-center">
          <a
            href="#register"
            className="inline-block bg-white text-[#003DB4] px-6 py-2 rounded-full font-semibold hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
          >
            Secure Your Spot
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventObjectives;
