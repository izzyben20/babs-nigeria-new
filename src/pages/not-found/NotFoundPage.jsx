import { motion } from 'framer-motion';
import { Leaf, Sprout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const floatingLeaf = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const bouncingSeed = {
    initial: { y: 0 },
    animate: {
      y: [0, -30, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Floating leaves decoration */}
      <motion.div
        variants={floatingLeaf}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-1/4 text-emerald-300/40"
      >
        <Leaf className="w-16 h-16" />
      </motion.div>
      <motion.div
        variants={floatingLeaf}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-1/4 right-1/4 text-emerald-300/40"
      >
        <Leaf className="w-20 h-20" />
      </motion.div>
      <motion.div
        variants={floatingLeaf}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.5 }}
        className="absolute top-1/3 right-1/5 text-emerald-300/40"
      >
        <Leaf className="w-12 h-12 rotate-45" />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl"
      >
        {/* Animated seed */}
        <motion.div
          variants={bouncingSeed}
          initial="initial"
          animate="animate"
          className="mb-8 mx-auto"
        >
          <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
            <Sprout className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <h1 className="text-8xl md:text-9xl font-bold text-emerald-800 mb-4">
          4<span className="text-amber-500">0</span>4
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Oops! The page you're looking for has been plowed under or hasn't
          sprouted yet. Let's get you back to fertile ground.
        </p>

        <Link
          to="/"
          className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 group"
        >
          Return to Home
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Ground/soil effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-800/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-amber-800/20"></div>
    </div>
  );
};

export default NotFoundPage;
