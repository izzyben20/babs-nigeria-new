import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThemeCard = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-[#003DB4] to-[#002a7a] text-white rounded-2xl py-12 px-8 sm:py-14 sm:px-12 shadow-2xl w-full mx-auto mt-16 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute bottom-16 left-16 w-16 h-16 rounded-full bg-white"></div>
          <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-white"></div>
        </div>

        {/* EU and Nigeria flags decoration */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <div className="w-6 h-4 bg-blue-900 border-l-4 border-yellow-400"></div>
          <div className="w-6 h-4 bg-green-500"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug font-poppins text-center">
            <span className="inline-block bg-white/10 px-3 py-1 rounded-lg mb-2">
              EU - Nigeria Trade Mission 2025
            </span>
            <br />
            <span className="text-yellow-300">
              Brussels Africa Business Summit
            </span>{' '}
            <span className="block text-white mt-1">(BABS)</span>
          </h2>

          <div className="mt-8 space-y-6 max-w-3xl w-full">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center bg-white/10 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-poppins text-center">
                <span className="font-bold text-yellow-300">Theme:</span>{' '}
                Bridging Continents: Strengthening Trade, Investment, and
                Knowledge Transfer for Economic Growth.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center bg-white/10 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-poppins text-center">
                <span className="font-bold text-yellow-300">Date:</span> May
                25th to 31st, 2025.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center bg-white/10 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-poppins text-center">
                <span className="font-bold text-yellow-300">Location:</span>{' '}
                Abuja and selected locations across Nigeria.
              </p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-yellow-300 text-[#003DB4] font-bold py-3 px-8 rounded-full shadow-lg cursor-pointer font-poppins"
          >
            <Link to={'/events'}>Learn More About The Event</Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeCard;
