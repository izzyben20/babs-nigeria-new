import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TargetAudience = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const audienceCategories = [
    {
      title: 'Business & Finance',
      icon: '💼',
      audiences: [
        'Business Leaders & Entrepreneurs',
        'Financial Institutions',
        'Diaspora Entrepreneurs & Professionals',
      ],
      color: 'from-blue-100 to-blue-50',
    },
    {
      title: 'Government & Policy',
      icon: '🏛️',
      audiences: [
        'Government Officials & Policymakers',
        'Trade Promotion Agencies',
      ],
      color: 'from-purple-100 to-purple-50',
    },
    {
      title: 'Knowledge Partners',
      icon: '🧠',
      audiences: [
        'Academia & Research Institutions',
        'Media & Communication Partners',
      ],
      color: 'from-teal-100 to-teal-50',
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
      {/* Subtle floating background elements (static) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#003DB4]/5 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[#0066FF]/5 blur-xl"></div>
      </div>

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003DB4] to-[#0066FF]">
            Target Audience
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Connecting with key stakeholders across sectors
        </motion.p>
      </div>

      <div className="relative z-10">
        {/* Category selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {audienceCategories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-[#003DB4] to-[#0066FF] text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Audience cards - now using conditional rendering instead of AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audienceCategories[activeCategory].audiences.map(
            (audience, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${audienceCategories[activeCategory].color} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">
                    {getIconForAudience(audience)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {audience}
                  </h3>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="mt-4"
                >
                  <button className="text-[#003DB4] font-medium flex items-center group">
                    Why attend?
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
              </motion.div>
            )
          )}
        </div>

        {/* All audiences panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Complete Audience List
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Business Leaders & Entrepreneurs',
              'Government Officials & Policymakers',
              'Trade Promotion Agencies',
              'Financial Institutions',
              'Academia & Research Institutions',
              'Media & Communication Partners',
              'Diaspora Entrepreneurs & Professionals',
            ].map((audience, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="mr-3 text-gray-500">
                  {getIconForAudience(audience)}
                </span>
                <span className="text-gray-700">{audience}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper function to assign icons
const getIconForAudience = (audience) => {
  const icons = {
    Business: '💼',
    Entrepreneurs: '🚀',
    Government: '🏛️',
    Policymakers: '📜',
    Trade: '🤝',
    Financial: '💰',
    Academia: '🎓',
    Research: '🔬',
    Media: '📢',
    Communication: '📡',
    Diaspora: '🌐',
    Professionals: '👔',
  };

  for (const [keyword, icon] of Object.entries(icons)) {
    if (audience.includes(keyword)) return icon;
  }
  return '✨';
};

export default TargetAudience;
