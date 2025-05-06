import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KeyObjectives = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const objectives = [
    {
      title: 'B2B & B2G Matchmaking',
      description:
        'Facilitate B2B and B2G matchmaking to unlock mutual trade and investment opportunities.',
      icon: '🤝',
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Tech Transfer & Digital Growth',
      description:
        'Support technology transfer and digital transformation, especially in AI, agritech, and renewable energy.',
      icon: '🚀',
      color: 'from-purple-500 to-indigo-700',
    },
    {
      title: 'Trade & Knowledge Exchange',
      description:
        'Advance trade compliance, knowledge exchange, and institutional partnerships.',
      icon: '📊',
      color: 'from-green-500 to-teal-700',
    },
    {
      title: 'Sustainable Development',
      description:
        'Promote sustainable growth across sectors including agriculture, energy, infrastructure, and education.',
      icon: '🌱',
      color: 'from-amber-500 to-orange-700',
    },
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % objectives.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate, objectives.length]);

  const handleManualSelection = (index) => {
    setActiveIndex(index);
    setAutoRotate(false); // Pause auto-rotation
    setTimeout(() => setAutoRotate(true), 10000); // Resume after 10 seconds
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.1,
            }}
            animate={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-4"
        >
          Key Objectives
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Driving innovation, collaboration, and sustainable growth
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Interactive selector */}
        <div className="space-y-4">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleManualSelection(index)}
              className={`p-6 rounded-xl cursor-pointer transition-all ${
                activeIndex === index
                  ? 'bg-white shadow-xl border-l-4 border-blue-500'
                  : 'bg-white/80 hover:bg-white/90 shadow-md'
              }`}
            >
              <div className="flex items-center gap-4">
                <motion.span
                  className="text-3xl"
                  animate={{
                    rotate: activeIndex === index ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {obj.icon}
                </motion.span>
                <h3
                  className={`text-xl font-semibold ${
                    activeIndex === index ? 'text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {obj.title}
                </h3>
                {activeIndex === index && (
                  <motion.span
                    className="ml-auto text-blue-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ●
                  </motion.span>
                )}
              </div>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 text-gray-600"
                >
                  {obj.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Animated visualization */}
        <div className="hidden lg:flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`h-64 w-full rounded-2xl flex items-center justify-center bg-gradient-to-br ${objectives[activeIndex].color} text-white p-8 shadow-lg`}
            >
              <div className="text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="text-6xl mb-4"
                >
                  {objectives[activeIndex].icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">
                  {objectives[activeIndex].title}
                </h3>
                <p className="text-white/90">
                  {objectives[activeIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {objectives.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualSelection(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to objective ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyObjectives;
