import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const PartnershipOpportunities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const sectors = [
    {
      name: 'Agribusiness & Agro-processing',
      icon: '🌱',
      color: 'from-emerald-100 to-teal-100',
    },
    {
      name: 'Renewable Energy & Power',
      icon: '⚡',
      color: 'from-amber-100 to-yellow-100',
    },
    {
      name: 'Infrastructure & Construction',
      icon: '🏗️',
      color: 'from-slate-100 to-gray-200',
    },
    {
      name: 'Digital Economy & ICT',
      icon: '💻',
      color: 'from-blue-100 to-indigo-100',
    },
    {
      name: 'Manufacturing & Industrialization',
      icon: '🏭',
      color: 'from-orange-100 to-red-100',
    },
    {
      name: 'Healthcare & Pharmaceuticals',
      icon: '🏥',
      color: 'from-pink-100 to-rose-100',
    },
    {
      name: 'Education & Skills Development',
      icon: '🎓',
      color: 'from-purple-100 to-violet-100',
    },
    {
      name: 'Financial Services & Investment',
      icon: '💰',
      color: 'from-green-100 to-lime-100',
    },
    {
      name: 'Creative Industries & Tourism',
      icon: '🎨',
      color: 'from-fuchsia-100 to-pink-100',
    },
    {
      name: 'Climate Action & Sustainability',
      icon: '🌍',
      color: 'from-cyan-100 to-sky-100',
    },
  ];

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(0, 61, 180, 0.15), transparent 80%)`,
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#003DB4]/10"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            scale: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            transition: {
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003DB4] to-[#0066FF]">
            Strategic Partnerships
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Collaborative opportunities across high-growth sectors
        </motion.p>
      </div>

      <div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        onMouseMove={handleMouseMove}
      >
        {/* First column - Visual anchor */}
        <motion.div
          className="hidden lg:block relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#003DB4] to-[#0066FF] opacity-90"></div>
          <div className="relative p-8 h-full flex flex-col justify-between text-white">
            <div>
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-2xl font-bold mb-4">Let's Build Together</h3>
              <p className="opacity-90">
                Discover how cross-sector collaboration can drive mutual growth
              </p>
            </div>
            <button className="mt-8 bg-white text-[#003DB4] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors w-full">
              Partnership Guide
            </button>
          </div>
        </motion.div>

        {/* Sector cards */}
        {sectors.slice(0, 4).map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`relative rounded-2xl overflow-hidden ${sector.color} bg-gradient-to-br`}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="p-6 h-full flex flex-col">
              <motion.div
                className="text-5xl mb-4"
                animate={{
                  rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0,
                  scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.8 }}
              >
                {sector.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {sector.name.split('&')[0]}
                {sector.name.includes('&') && (
                  <span className="text-[#003DB4]">
                    & {sector.name.split('&')[1]}
                  </span>
                )}
              </h3>
              <motion.div
                className="mt-auto pt-4"
                animate={{
                  x: hoveredIndex === index ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.8 }}
              >
                <button className="text-[#003DB4] font-semibold flex items-center group">
                  Explore
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

        {/* Second row */}
        {sectors.slice(4, 9).map((sector, index) => (
          <motion.div
            key={index + 4}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
            onHoverStart={() => setHoveredIndex(index + 4)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`relative rounded-2xl overflow-hidden ${sector.color} bg-gradient-to-br`}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="p-6 h-full flex flex-col">
              <motion.div
                className="text-5xl mb-4"
                animate={{
                  rotate: hoveredIndex === index + 4 ? [0, 10, -10, 0] : 0,
                  scale: hoveredIndex === index + 4 ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.8 }}
              >
                {sector.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {sector.name.split('&')[0]}
                {sector.name.includes('&') && (
                  <span className="text-[#003DB4]">
                    & {sector.name.split('&')[1]}
                  </span>
                )}
              </h3>
              <motion.div
                className="mt-auto pt-4"
                animate={{
                  x: hoveredIndex === index + 4 ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.8 }}
              >
                <button className="text-[#003DB4] font-semibold flex items-center group">
                  Explore
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

        {/* Last card - CTA */}
        <motion.div
          className="hidden lg:block relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#003DB4] to-[#0066FF] opacity-90"></div>
          <div className="relative p-8 h-full flex flex-col justify-center text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Your Sector Missing?</h3>
            <p className="opacity-90 mb-6">
              We customize partnerships across all industries
            </p>
            <button className="bg-white text-[#003DB4] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center lg:hidden"
      >
        <button className="bg-gradient-to-r from-[#003DB4] to-[#0066FF] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
          Become a Partner
        </button>
        <p className="mt-4 text-gray-600">
          <a
            href="#contact"
            className="text-[#003DB4] font-medium hover:underline"
          >
            Discuss custom partnership options
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default PartnershipOpportunities;
