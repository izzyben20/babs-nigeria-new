import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PartnerShowcasePage() {
  const states = [
    {
      name: 'Lagos State',
      governor: 'Mr Babajide Sanwoolu',
      logo: '/images/lagos_logo.png',
      link: '/partners/lagos',
      highlight: "Nigeria's economic hub",
    },
    {
      name: 'Osun State',
      governor: 'Mr Ademola Adeleke',
      logo: '/images/osun_logo.webp',
      link: '/partners/osun',
      highlight: 'Cultural heritage destination',
    },
    {
      name: 'Kwara State',
      governor: 'Dr. Abdulrahman Abdulrazaq',
      logo: '/images/kwara_logo.png',
      link: '/partners/kwara',
      highlight: 'Agricultural innovation center',
    },
    {
      name: 'Plateau State',
      governor: 'Mr. Caleb Manasseh Mutfwang',
      logo: '/images/plateau_logo.svg',
      link: '/partners/plateau',
      highlight: 'Natural resources & tourism',
    },
    {
      name: 'Edo State',
      governor: 'Mr. Monday Okpebholo',
      logo: '/images/edo_logo.png',
      link: '/partners/edo',
      highlight: 'Industrial development focus',
    },
    {
      name: 'Ebonyi State',
      governor: 'Rt Hon Francis Nwifuru',
      logo: '/images/ebonyi_logo.png',
      link: '/partners/ebonyi',
      highlight: 'Emerging investment destination',
    },
  ];

  const missions = [
    {
      name: 'EU Ambassador to Nigeria',
      representative: 'Amb Gautier Mignoto',
      focus: 'EU-Nigeria trade relations',
    },
    {
      name: 'Belgium Ambassador to Nigeria',
      representative: 'Amb Pieter Leeknegt',
      focus: 'Bilateral investment opportunities',
    },
    {
      name: 'High Commissioner of Tanzania',
      representative: 'Selestine Gervas Kakele',
      focus: 'East-West Africa trade bridges',
    },
  ];

  const companies = [
    {
      name: 'Alfonso',
      logo: '/images/alfonso.png',
      sector: '',
    },
    {
      name: 'Fraunhofer',
      logo: '/images/fraunhofer.png',
      sector: 'Research & Development',
    },
    {
      name: 'Prime Kapital',
      logo: '/images/prime.svg',
      sector: 'Real Estate Development',
    },
    {
      name: 'European Commission',
      logo: '/images/european_commission.png',
      sector: 'Banking & Finance',
    },
    {
      name: 'WTC Abuja',
      logo: '/images/wtc_logo.png',
      sector: 'Financial Services',
    },
    { name: 'BCR', logo: '/images/bcr.jpg', sector: '' },
  ];

  const ministries = [
    {
      name: 'Ministry of Budget and Planning',
      minister: 'Sen. Abubakar Atiku Bagudu',
      logo: '/images/ministry_budget.gif',
      focus: 'Economic planning & fiscal policy',
      route: '/partners/ministry-budget-national-planning',
    },
    {
      name: 'Ministry of Women Affairs',
      minister: 'Hajia Imaan Sulaiman-Ibrahim',
      logo: '/images/ministry_women.png',
      focus: 'Women empowerment & gender equality',
      route: '/partners/ministry-women-affairs',
    },
    {
      name: 'Ministry of Agriculture & Food Security',
      minister: 'Dr. Aliyu Sabi Abdullahi, CON',
      logo: '/images/ministry_agriculture.webp',
      focus: 'Agricultural development & food security',
      route: '/partners/ministry-agriculture-food-security',
    },
    {
      name: 'Ministry of Livestock Development',
      minister: 'Idi Mukhtar Maiha',
      logo: '/images/ministry_livestock.png',
      focus: 'Livestock transformation initiative',
      route: '/partners/ministry-livestock-development',
    },
    {
      name: 'Ministry of Marine & Blue Economy',
      minister: 'Adegboyega Oyetola, CON',
      logo: '/images/ministry_marine.png',
      focus: 'Maritime resources development',
      route: '/partners/ministry-marine-blue-economy',
    },
  ];

  return (
    <div className="bg-gradient-to-b mt-30 from-[#003DB4]/5 to-white py-16">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#003DB4]/10 blur-xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#003DB4] to-[#0066FF]">
              Our Distinguished Partners
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading states, missions and corporations to
            drive economic growth
          </p>
        </motion.header>

        {/* Partner Ministries - NEW SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Partner Ministries
            </h2>
            <div className="hidden md:block h-px bg-gray-200 flex-1 mx-6"></div>
            <Link
              to="#"
              className="text-[#003DB4] font-medium hover:underline whitespace-nowrap"
            >
              View all ministries →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={ministry.route}
                  className="bg-white cursor-pointer rounded-xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col overflow-hidden border border-gray-100"
                >
                  <div className="p-6 flex flex-col items-center text-center flex-1">
                    <div className="w-24 h-24 mb-4 rounded-full bg-white shadow-md border border-gray-100 p-3 flex items-center justify-center">
                      <img
                        src={ministry.logo}
                        alt={ministry.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {ministry.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{ministry.minister}</p>
                    <p className="text-sm text-[#003DB4] font-medium">
                      {ministry.focus}
                    </p>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      Key policy implementation partner
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partner States */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Partner States
            </h2>
            <div className="hidden md:block h-px bg-gray-200 flex-1 mx-6"></div>
            <Link
              to="#"
              className="text-[#003DB4] font-medium hover:underline whitespace-nowrap"
            >
              View all partner states →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={state.link}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col overflow-hidden border border-gray-100"
                >
                  <div className="p-6 flex flex-col items-center text-center flex-1">
                    <div className="w-24 h-24 mb-4 rounded-full bg-white shadow-md border border-gray-100 p-3 flex items-center justify-center">
                      <img
                        src={state.logo}
                        alt={state.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {state.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{state.governor}</p>
                    <p className="text-sm text-[#003DB4] font-medium">
                      {state.highlight}
                    </p>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      Click for partnership opportunities
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partner Missions */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Diplomatic Missions
          </h2>

          <div className="space-y-4">
            {missions.map((mission, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-[#003DB4]/10 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-[#003DB4]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {mission.name}
                      </h3>
                      <p className="text-gray-600">{mission.representative}</p>
                      <p className="text-sm text-[#003DB4] mt-2 font-medium">
                        {mission.focus}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partner Companies */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Corporate Partners
            </h2>
            <div className="hidden md:block h-px bg-gray-200 flex-1 mx-6"></div>
            <Link
              to="#"
              className="text-[#003DB4] font-medium hover:underline whitespace-nowrap"
            >
              View all companies →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col items-center border border-gray-100"
              >
                <div className="w-20 h-20 mb-3 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-900 text-center">
                  {company.name}
                </h3>
                <p className="text-xs text-gray-500 text-center mt-1">
                  {company.sector}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Become a Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our network of distinguished partners and gain access to
            exclusive investment opportunities
          </p>
          <Link
            to="/become-a-partner"
            className="inline-block bg-gradient-to-r from-[#003DB4] to-[#0066FF] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Explore Partnership Benefits
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
