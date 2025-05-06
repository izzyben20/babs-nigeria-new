import { motion } from 'framer-motion';

export default function MinistryBudgetPlanning() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-indigo-50 to-white">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-100 blur-xl"
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
          <div className="w-40 h-40 rounded-full bg-white shadow-xl border-4 border-indigo-600 p-4 flex items-center justify-center mx-auto mb-8">
            <img
              src="/images/ministry_budget.gif"
              alt="Ministry of Budget and National Planning Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            Ministry of{' '}
            <span className="text-indigo-600">
              Budget and National Planning
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Charting Nigeria's Economic Future
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
            <div className="p-8 md:p-12 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mandate
              </h2>
              <p className="text-lg">
                To formulate and implement the national budget, develop
                medium-term economic plans, and monitor/evaluate government
                projects for sustainable development.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mb-4">
                    Core Functions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-600 mt-1 mr-2"
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
                      <span>Formulation of annual national budgets</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-600 mt-1 mr-2"
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
                        Development of Medium-Term Expenditure Framework
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-600 mt-1 mr-2"
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
                      <span>Coordination of national development planning</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-600 mt-1 mr-2"
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
                        Monitoring and evaluation of government projects
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mb-4">
                    Key Statistics (2024)
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-indigo-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-indigo-600">
                        ₦28.7T
                      </p>
                      <p className="text-sm text-gray-700">National Budget</p>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-indigo-600">6.5%</p>
                      <p className="text-sm text-gray-700">
                        Projected GDP Growth
                      </p>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-indigo-600">
                        3.76%
                      </p>
                      <p className="text-sm text-gray-700">
                        Budget Deficit to GDP
                      </p>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-indigo-600">
                        8,300+
                      </p>
                      <p className="text-sm text-gray-700">
                        Projects Monitored
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* National Development Plan */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            National Development Plan 2021-2025
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6">
                The current 5-year development plan aims to achieve sustainable
                economic growth through:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Economic Diversification',
                    description:
                      'Reducing oil dependence through agriculture, manufacturing and digital economy',
                    icon: '🔄',
                  },
                  {
                    title: 'Infrastructure Development',
                    description:
                      'Massive investments in roads, rail, power and broadband infrastructure',
                    icon: '🏗️',
                  },
                  {
                    title: 'Human Capital Development',
                    description:
                      'Improving education, healthcare and skills development',
                    icon: '👨‍🎓',
                  },
                  {
                    title: 'Governance Reform',
                    description:
                      'Strengthening institutions and fighting corruption',
                    icon: '⚖️',
                  },
                  {
                    title: 'Social Inclusion',
                    description:
                      'Poverty reduction and gender equality programs',
                    icon: '🤝',
                  },
                  {
                    title: 'Climate Resilience',
                    description:
                      'Sustainable environmental management practices',
                    icon: '🌱',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-indigo-50 rounded-lg p-6 text-center"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-indigo-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Budget Process */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            The Budget Cycle
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    title: 'Budget Call Circular (March)',
                    description:
                      'Issuance of guidelines to MDAs for budget preparation',
                    icon: '📅',
                  },
                  {
                    title: 'Budget Preparation (April-June)',
                    description:
                      'MDAs submit proposals based on MTEF guidelines',
                    icon: '📊',
                  },
                  {
                    title: 'Budget Defense (July-August)',
                    description:
                      'Appropriation Committee reviews MDA submissions',
                    icon: '🏛️',
                  },
                  {
                    title: 'Executive Approval (September)',
                    description:
                      'President presents budget to National Assembly',
                    icon: '✍️',
                  },
                  {
                    title: 'Legislative Process (October-December)',
                    description: 'NASS reviews and passes Appropriation Bill',
                    icon: '📜',
                  },
                  {
                    title: 'Budget Implementation (January+)',
                    description: 'MDAs execute approved budgets',
                    icon: '🏢',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center`}
                  >
                    <div className="md:w-1/2 p-4">
                      <div className="bg-indigo-50 rounded-lg p-6">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h3 className="text-lg font-bold text-indigo-600">
                          {item.title}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ministry Leadership */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Leadership
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/bagudu.jpg"
                      alt="Sen. Abubakar Atiku Bagudu"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                    Sen. Abubakar Atiku Bagudu
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Honorable Minister of Budget and Economic Planning
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-indigo-600 mb-2">
                        Professional Background
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Former Governor of Kebbi State (2015-2023)</li>
                        <li>Senator, Kebbi Central (2009-2015)</li>
                        <li>Economist and Development Expert</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-indigo-600 mb-2">
                        Key Achievements
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Architect of Nigeria's Economic Recovery Plan</li>
                        <li>Champion of fiscal federalism reforms</li>
                        <li>Advocate for agricultural transformation</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    Senator Bagudu brings extensive experience in economic
                    policy and governance to his role as Minister. He oversees
                    Nigeria's budget formulation process and national
                    development planning framework.
                  </p>
                </div>
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
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Ministry Structure
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-indigo-600 mb-4">
                    Key Departments
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Budget Planning & Development',
                      'Economic Growth & Development',
                      'Monitoring & Evaluation',
                      'International Cooperation',
                      'Finance & Accounts',
                      'Human Resource Management',
                    ].map((dept, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-indigo-600 mt-1 mr-2"
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
                  <h3 className="text-xl font-bold text-indigo-600 mb-4">
                    Key Agencies
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: 'National Bureau of Statistics',
                        role: 'Official statistics producer',
                      },
                      {
                        name: 'Centre for Management Development',
                        role: 'Capacity building institution',
                      },
                      {
                        name: 'Infrastructure Concession Regulatory Commission',
                        role: 'PPP project oversight',
                      },
                    ].map((agency, i) => (
                      <div key={i} className="bg-indigo-50 rounded-lg p-4">
                        <h4 className="font-bold text-indigo-600">
                          {agency.name}
                        </h4>
                        <p className="text-sm text-gray-700">{agency.role}</p>
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
