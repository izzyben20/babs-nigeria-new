import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <div className="relative overflow-hidden py-24 bg-gradient-to-br from-[#003DB4]/5 via-white to-[#0066FF]/5">
      {/* Dynamic floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#003DB4]/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-[#0066FF]/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003DB4] to-[#0066FF]">
              Don't Miss This Opportunity!
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-12"
          >
            Seize the moment to connect, collaborate and create impact. Whether
            you're ready to join or need more information, we're here to guide
            you.
          </motion.p>

          {/* Animated buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/registration" className="relative overflow-hidden group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#003DB4] to-[#0066FF] text-white font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#003DB4] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </Link>

            <Link to="/contact-us" className="relative overflow-hidden group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-[#003DB4] text-[#003DB4] font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10">Contact Our Team</span>
                <div className="absolute inset-0 bg-[#003DB4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#003DB4]/10 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#0066FF]/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
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
    </div>
  );
};

export default CallToAction;
