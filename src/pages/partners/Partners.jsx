import { motion } from 'framer-motion';
import {
  Handshake,
  Globe,
  Factory,
  Truck,
  Leaf,
  Award,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const PartnersPage = () => {
  return (
    <div className="bg-emerald-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/partners.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Partnership Network
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-emerald-100"
          >
            Building strategic collaborations to strengthen Nigeria's
            agricultural ecosystem
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 inline-block"
          >
            <div className="bg-emerald-600/30 p-4 rounded-full">
              <Handshake className="w-12 h-12 mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnerships in Progress */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              Partnerships in Progress
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are currently finalizing several strategic partnerships that
              will be announced soon
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="bg-emerald-50 rounded-xl p-12 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <Handshake className="w-16 h-16 mx-auto text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                Partnership Arrangements Underway
              </h3>
              <p className="text-gray-600 mb-6">
                We are actively working to establish valuable collaborations
                with farmers, processors, distributors, and research
                institutions. These partnerships will be announced once
                agreements are finalized.
              </p>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'For Farmers',
                benefits: [
                  'Access to premium markets and fair pricing',
                  'Technical training and capacity building',
                  'Input financing and resource support',
                  'Sustainable farming partnerships',
                ],
              },
              {
                icon: <Factory className="w-8 h-8" />,
                title: 'For Processors',
                benefits: [
                  'Reliable raw material supply chain',
                  'Quality assurance and consistency',
                  'Volume guarantees for production',
                  'Traceability and certification support',
                ],
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'For Buyers',
                benefits: [
                  'Premium quality agricultural products',
                  'Competitive market pricing',
                  'Sustainable and ethical sourcing',
                  'Custom product development options',
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-emerald-700/50 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-full bg-emerald-600/30 mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Partnering With Us?
            </h2>
            <p className="text-xl mb-8">
              We welcome inquiries from potential partners across the
              agricultural value chain
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={'/contact'} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Partnership Inquiries
              </Link>
              <Link to={'/contact'} className="bg-white hover:bg-gray-100 text-amber-700 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
