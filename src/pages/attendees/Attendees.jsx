import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const companies = [
  {
    id: 1,
    name: 'Fraunhofer',
    industry: 'Research & Development',
    logo: '/images/fraunhofer.png',
    description:
      "Europe's largest application-oriented research organization specializing in key technologies for the future",
  },
  {
    id: 2,
    name: 'Skyforte',
    industry: 'Aviation & Logistics',
    logo: '/images/skyforte.png',
    description:
      'Innovative aviation solutions provider with expertise in aircraft leasing and fleet management',
  },
  {
    id: 3,
    name: 'Openfield Technology & Integrated Services Ltd',
    industry: 'Technology Solutions',
    logo: '/images/openfield.png',
    description:
      'Provider of integrated technology solutions across multiple industries in Africa',
  },
  {
    id: 4,
    name: 'Maes Logistics',
    industry: 'Logistics',
    logo: '/images/maes.jpg',
    description:
      'International logistics company specializing in supply chain solutions and freight forwarding',
  },
  {
    id: 5,
    name: 'Prime Kapital',
    industry: 'Real Estate Development',
    logo: '/images/prime.svg',
    description:
      'Pan-European real estate developer focused on mixed-use urban regeneration projects',
  },
  {
    id: 6,
    name: 'STI VANDENDORPE',
    industry: 'Industrial Engineering',
    logo: '/images/sti.png',
    description:
      'Specialist in industrial engineering and technical inspection services',
  },
  {
    id: 7,
    name: 'Port of Antwerp',
    industry: 'Port Authority',
    logo: '/images/antwerp.jpg',
    description:
      "Europe's second largest port and a global logistics hub with innovative digital solutions",
  },
  {
    id: 8,
    name: 'IHK Germany',
    industry: 'Chamber of Commerce',
    logo: '/images/ihk.svg',
    description:
      'German Chambers of Commerce supporting international business relations and economic development',
  },
  {
    id: 9,
    name: 'AHK Germany',
    industry: 'Foreign Trade',
    logo: '/images/ahk.svg',
    description:
      'German Chambers of Commerce Abroad promoting bilateral trade and investment',
  },
  {
    id: 10,
    name: 'Intercity Consulting',
    industry: 'Management Consulting',
    logo: '/images/intercity.avif',
    description:
      'Strategic consultancy firm specializing in infrastructure and urban development projects',
  },
  {
    id: 11,
    name: 'DB Concept GmbH Switzerland',
    industry: 'Business Consulting',
    logo: '/images/dbconcept.png',
    description:
      'Swiss consulting firm providing business development and market entry services',
  },
  {
    id: 12,
    name: 'DEME Group',
    industry: 'Engineering & Construction industry',
    logo: '/images/deme.jpg',
    description:
      'DEME Group is a Belgian company specializing in marine engineering, dredging, offshore energy, and environmental solutions worldwide.',
  },
  {
    id: 13,
    name: 'Farmgo',
    industry: 'Agriculture & Technology',
    logo: '/images/farmgo.svg',
    description:
      'Provides advanced technology and eco-friendly practices that redefine what’s possible in agriculture',
  },
  {
    id: 14,
    name: 'Swiss Bio Shield',
    industry: 'Biotechnology & Health Protection',
    logo: '/images/swiss.png',
    description:
      'Swiss Bio Shield specializes in advanced biotechnology solutions aimed at enhancing human and environmental health through antimicrobial protection technologies',
  },
];

const Attendees = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const industries = [
    'All',
    ...new Set(companies.map((company) => company.industry)),
  ];

  return (
    <div className="relative min-h-screen mt-30 bg-gradient-to-b from-[#003DB4]/5 to-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-16 bg-gradient-to-r from-[#003DB4] to-[#0066FF]"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFD700]">
              Attending Companies
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Meet the industry leaders participating in this year's summit
          </motion.p>
        </div>
      </motion.header>

      {/* Interactive Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 container mx-auto px-4 -mt-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-lg p-4 max-w-4xl mx-auto flex flex-wrap justify-center gap-2">
          {industries.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-[#003DB4] text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Companies Grid */}
      <main className="relative z-10 container mx-auto px-4 pb-16">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {companies
            .filter(
              (company) =>
                activeFilter === 'All' || company.industry === activeFilter
            )
            .map((company) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="p-8 flex flex-col items-center h-full">
                    {/* Logo container */}
                    <motion.div
                      className="w-40 h-40 mb-6 flex items-center justify-center p-4 rounded-lg bg-white shadow-sm border border-gray-100"
                      whileHover={{ scale: 1.03 }}
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="object-contain w-full h-full"
                      />
                    </motion.div>

                    <div className="text-center">
                      <h2 className="text-xl font-bold text-gray-900 mb-1">
                        {company.name}
                      </h2>
                      <p className="text-gray-500 text-sm mb-3">
                        {company.industry}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Attendee CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to connect with these industry leaders?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us at the summit to network, learn, and explore partnership
            opportunities with these global organizations
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#003DB4] to-[#0066FF] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/registration" className="text-white no-underline">
              Register as Attendee
            </Link>
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
};

export default Attendees;
