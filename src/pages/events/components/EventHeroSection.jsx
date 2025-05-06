import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/images/events_hero_1.png',
  '/images/events_hero_2.png',
  '/images/events_hero_3.png',
];

const intervalTime = 5000;

export default function EventHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const slideVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 },
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
    <section className="relative w-full h-screen mt-30 overflow-hidden">
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003DB4]/90 via-[#003DB4]/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 lg:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="text-white max-w-2xl lg:max-w-3xl"
        >
          <motion.div variants={textVariants} className="mb-4">
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-2xl font-medium font-poppins">
              EU-Nigeria Trade Mission
            </span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-poppins leading-tight"
          >
            Event <span className="text-yellow-300">Overview</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg sm:text-xl mb-6 font-light font-poppins"
          >
            On behalf of the{' '}
            <span className="font-bold">
              Brussels Africa Business Summit (BABS)
            </span>{' '}
            and our organizing partners, we invite you to participate in this
            transformative event.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8 border-l-4 border-yellow-300"
          >
            <p className="text-lg sm:text-xl font-poppins">
              <span className="font-bold">Bridging Continents</span> -
              Strengthening Trade, Investment, and Knowledge Transfer for
              Economic Growth
            </p>
            <p className="mt-2 text-sm sm:text-base font-poppins">
              May 25-31, 2025 | Abuja, Nigeria
            </p>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4"
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
                to={'/events#itinerary'}
                className="inline-block bg-transparent text-white border-2 border-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#003DB4] transition font-poppins"
              >
                View Program
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
