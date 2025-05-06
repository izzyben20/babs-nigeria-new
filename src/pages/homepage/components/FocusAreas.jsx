import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FocusAreas = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const focusAreas = [
    {
      title: 'Trade & Investment Promotion',
      icon: '💼',
      description:
        'Unlocking global trade opportunities and attracting strategic investments',
      color: 'bg-blue-100',
    },
    {
      title: 'Technology & Digital Transformation',
      icon: '🤖',
      description:
        'Driving innovation through AI, blockchain, and smart technologies',
      color: 'bg-purple-100',
    },
    {
      title: 'Agriculture & Rural Development',
      icon: '🌾',
      description: 'Modernizing agribusiness and empowering rural communities',
      color: 'bg-green-100',
    },
    {
      title: 'Energy & Infrastructure',
      icon: '⚡',
      description:
        'Building sustainable energy solutions and future-ready infrastructure',
      color: 'bg-amber-100',
    },
    {
      title: 'Knowledge Transfer',
      icon: '🧠',
      description:
        'Bridging skills gaps through international expertise exchange',
      color: 'bg-indigo-100',
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#003DB4]/5 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-[#003DB4]/5 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Our{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003DB4] to-[#0066FF]">
            Focus Areas
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Strategic sectors driving sustainable development and innovation
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`relative overflow-hidden rounded-2xl shadow-md ${area.color} transition-all duration-300 hover:shadow-lg`}
          >
            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent"
              animate={{
                borderColor:
                  hoveredIndex === index
                    ? ['#003DB4', '#0066FF', '#003DB4']
                    : '#00000000',
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="p-6 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <motion.span
                  className="text-4xl mr-4"
                  animate={{
                    rotate: hoveredIndex === index ? [0, 15, -15, 0] : 0,
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  {area.icon}
                </motion.span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">{area.description}</p>

              <motion.div
                className="mt-auto"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.8,
                  x: hoveredIndex === index ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <button className="text-[#003DB4] font-semibold flex items-center group">
                  Explore opportunities
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Special CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#003DB4] to-[#0066FF] text-white shadow-xl"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-white/5"></div>

          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Custom Partnership?</h3>
              <p className="opacity-90 mb-6">
                Let's discuss tailored collaboration opportunities beyond our
                standard focus areas.
              </p>
            </div>
            <button className="bg-white text-[#003DB4] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors w-full text-center">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FocusAreas;
