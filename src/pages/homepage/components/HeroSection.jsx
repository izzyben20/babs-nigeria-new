import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/images/hero_image_1.png',
  '/images/hero_image_2.png',
  '/images/hero_image_3.png',
];

const intervalTime = 5000;

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 5px 15px rgba(0, 61, 180, 0.3)',
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="relative w-full h-screen mt-24 overflow-hidden">
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#003DB4]/90 to-[#003DB4]/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white max-w-5xl"
        >
          <div className="mb-2">
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm sm:text-base font-medium font-poppins">
              EU-Nigeria Trade Mission 2025
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
            <span className="text-yellow-300">Brussels Africa</span>
            <br />
            Business Summit (BABS)
          </h1>

          <motion.p
            variants={textVariants}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl mb-6 font-medium font-poppins max-w-3xl mx-auto"
          >
            Bridging Continents Through Trade & Investment
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.div variants={textVariants} transition={{ delay: 0.5 }}>
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-300"
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
                <span>May 25-31, 2025</span>
              </div>
            </motion.div>

            <motion.div variants={textVariants} transition={{ delay: 0.6 }}>
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-300"
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
                <span>Abuja, Nigeria</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={textVariants}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to={'/registration'}
                className="inline-block bg-yellow-300 text-[#003DB4] font-bold px-8 py-3 rounded-full transition font-poppins"
              >
                Register Now
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to={'/events'}
                className="inline-block bg-transparent text-white border-2 border-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#003DB4] transition font-poppins"
              >
                Explore Events
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === idx ? 'bg-yellow-300 w-6' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
