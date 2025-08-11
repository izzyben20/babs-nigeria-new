import { motion } from 'framer-motion';
import { Leaf, Sprout } from 'lucide-react';

const LoadingSpinner = () => {
  const leafVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <motion.div
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        className="relative"
      >
        {/* Seed */}
        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg flex items-center justify-center">
          <Sprout className="w-10 h-10 text-white" />
        </div>

        {/* Animated Leaves */}
        <motion.div
          variants={leafVariants}
          initial="initial"
          animate="animate"
          className="absolute -top-6 -left-6 text-emerald-500"
        >
          <Leaf className="w-12 h-12" />
        </motion.div>
        <motion.div
          variants={leafVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute -top-8 -right-6 text-emerald-600"
        >
          <Leaf className="w-14 h-14 -scale-x-100" />
        </motion.div>
      </motion.div>

      {/* Growing progress indicator */}
      <div className="mt-12 w-64 h-2 bg-emerald-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
        />
      </div>

      <p className="mt-6 text-lg text-emerald-800 font-medium">
        Cultivating your experience...
      </p>
    </div>
  );
};

export default LoadingSpinner;
