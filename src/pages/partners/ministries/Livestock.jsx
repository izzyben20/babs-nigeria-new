import { motion } from 'framer-motion';

export default function MinistryLivestock() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-amber-50 to-white">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-100 blur-xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Ministry Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="w-40 h-40 rounded-full bg-white shadow-xl border-4 border-amber-600 p-4 flex items-center justify-center mx-auto mb-8">
            <img
              src="/images/ministry_livestock.png"
              alt="Ministry of Livestock Development Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            Ministry of{' '}
            <span className="text-amber-600">Livestock Development</span>
          </h1>
          <p className="text-xl text-gray-600">
            Transforming Nigeria's Livestock Sector
          </p>
        </motion.header>

        {/* Ministry Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-lg">
                To develop a modern, productive and sustainable livestock sector
                that contributes significantly to Nigeria's food security,
                economic growth, and job creation.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-amber-600 mb-4">
                    Core Mandates
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-amber-600 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Formulate policies for livestock development</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-amber-600 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Promote modern livestock production systems</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-amber-600 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Enhance animal health and disease control</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-amber-600 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Develop livestock value chains and market access
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-600 mb-4">
                    Sector Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-amber-50 rounded-xl p-4">
                      <p className="text-gray-700">
                        Nigeria has the largest livestock population in Africa
                        with over:
                      </p>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-white rounded p-2 text-center">
                          <p className="text-lg font-bold text-amber-600">
                            20M+
                          </p>
                          <p className="text-xs">Cattle</p>
                        </div>
                        <div className="bg-white rounded p-2 text-center">
                          <p className="text-lg font-bold text-amber-600">
                            40M+
                          </p>
                          <p className="text-xs">Sheep/Goats</p>
                        </div>
                        <div className="bg-white rounded p-2 text-center">
                          <p className="text-lg font-bold text-amber-600">
                            200M+
                          </p>
                          <p className="text-xs">Poultry</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4">
                      <p className="text-gray-700">
                        The livestock sector contributes approximately{' '}
                        <span className="font-bold text-amber-600">5%</span> of
                        Nigeria's GDP and provides livelihood for over{' '}
                        <span className="font-bold text-amber-600">
                          20 million
                        </span>{' '}
                        Nigerians.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Livestock Transformation Plan */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            National Livestock Transformation Plan
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6">
                The National Livestock Transformation Plan (NLTP) is a
                comprehensive initiative to modernize Nigeria's livestock sector
                and address farmer-herder conflicts through:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Ranching Development',
                    description:
                      "Establishment of modern ranches across Nigeria's grazing reserves",
                    icon: '🏞️',
                  },
                  {
                    title: 'Pastoralist Resettlement',
                    description:
                      'Voluntary resettlement of pastoralists with improved livelihoods',
                    icon: '👨‍🌾',
                  },
                  {
                    title: 'Value Chain Development',
                    description:
                      'Investment in meat processing, dairy plants and feed mills',
                    icon: '🏭',
                  },
                  {
                    title: 'Conflict Resolution',
                    description:
                      'Mediation and reconciliation between farmers and herders',
                    icon: '🤝',
                  },
                  {
                    title: 'Breed Improvement',
                    description:
                      'Introduction of high-yield cattle breeds and AI services',
                    icon: '🐄',
                  },
                  {
                    title: 'Youth Employment',
                    description:
                      'Training programs for youth in livestock entrepreneurship',
                    icon: '👨‍🎓',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-amber-50 rounded-lg p-6 text-center"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-amber-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Departmental Structure */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Ministry Structure
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-amber-600 mb-4">
                    Key Departments
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Animal Production and Husbandry',
                      'Veterinary and Pest Control Services',
                      'Livestock Extension and Pastoral Development',
                      'Meat and Dairy Development',
                      'Livestock Finance and Credit',
                      'Planning, Research and Statistics',
                    ].map((dept, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-amber-600 mt-1 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span>{dept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-600 mb-4">
                    Parastatals & Agencies
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: 'National Veterinary Research Institute',
                        focus: 'Animal disease research and vaccine production',
                      },
                      {
                        name: 'National Animal Production Research Institute',
                        focus: 'Livestock breeding and feed research',
                      },
                      {
                        name: 'Nigeria Institute of Animal Science',
                        focus: 'Regulation of animal science practice',
                      },
                    ].map((agency, i) => (
                      <div key={i} className="bg-amber-50 rounded-lg p-4">
                        <h4 className="font-bold text-amber-600">
                          {agency.name}
                        </h4>
                        <p className="text-sm text-gray-700">{agency.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
