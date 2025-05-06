import { motion } from 'framer-motion';

export default function MinistryAgriculture() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-green-50 to-white">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-100 blur-xl"
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
          <div className="w-40 h-40 rounded-full bg-white shadow-xl border-4 border-green-600 p-4 flex items-center justify-center mx-auto mb-8">
            <img
              src="/images/ministry_agriculture.webp"
              alt="Ministry of Agriculture Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            Ministry of{' '}
            <span className="text-green-600">Agriculture & Food Security</span>
          </h1>
          <p className="text-xl text-gray-600">
            Feeding the Nation, Empowering Farmers
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
            <div className="p-8 md:p-12 bg-gradient-to-r from-green-600 to-green-800 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-lg">
                To ensure food security, increase agricultural production, and
                improve livelihoods through sustainable agricultural practices
                and agribusiness development.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">
                    Sector Contribution
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-3xl font-bold text-green-600">24%</p>
                      <p className="text-gray-700">Of Nigeria's GDP</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-3xl font-bold text-green-600">70%</p>
                      <p className="text-gray-700">Of labor force employed</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">
                    Key Crops
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Cassava',
                      'Rice',
                      'Maize',
                      'Yam',
                      'Sorghum',
                      'Millet',
                    ].map((crop, i) => (
                      <div
                        key={i}
                        className="bg-green-50 rounded-lg p-3 flex items-center"
                      >
                        <svg
                          className="w-5 h-5 text-green-600 mr-2"
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
                        <span>{crop}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">
                    Livestock
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Poultry',
                      'Cattle',
                      'Goats',
                      'Sheep',
                      'Pigs',
                      'Fisheries',
                    ].map((animal, i) => (
                      <div
                        key={i}
                        className="bg-green-50 rounded-lg p-3 flex items-center"
                      >
                        <svg
                          className="w-5 h-5 text-green-600 mr-2"
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
                        <span>{animal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Agricultural Transformation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Agricultural Transformation Agenda
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">
                    Key Strategies
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Input supply and mechanization',
                      'Commodity value chain development',
                      'Agricultural financing',
                      'Storage and processing infrastructure',
                      'Extension services revitalization',
                      'Youth engagement in agribusiness',
                    ].map((strategy, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg
                            className="w-4 h-4 text-green-600"
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
                        </div>
                        <span>{strategy}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="bg-green-50 rounded-xl p-6 h-full">
                    <h3 className="text-xl font-bold text-green-600 mb-4">
                      Impact (2020-2024)
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          metric: 'Rice production',
                          value: '+60%',
                          detail: 'From 4.5M to 7.2M MT',
                        },
                        {
                          metric: 'Fertilizer use',
                          value: '3x',
                          detail: 'Increased efficiency',
                        },
                        {
                          metric: 'Youth participation',
                          value: '1.2M',
                          detail: 'In agribusiness programs',
                        },
                        {
                          metric: 'Processing facilities',
                          value: '240+',
                          detail: 'New agro-processing plants',
                        },
                      ].map((item, i) => (
                        <div key={i} className="border-b border-green-100 pb-3">
                          <div className="flex justify-between items-baseline">
                            <span className="font-medium">{item.metric}</span>
                            <span className="text-lg font-bold text-green-600">
                              {item.value}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Flagship Programs */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Flagship Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'National Agricultural Growth Scheme',
                description:
                  'Inputs subsidy program reaching 5M farmers annually',
                icon: '🌱',
                focus: 'Seeds, fertilizers, and agrochemicals',
              },
              {
                title: 'Agricultural Mechanization',
                description: 'Deployment of 10,000 tractors nationwide',
                icon: '🚜',
                focus: 'Tractor hiring centers',
              },
              {
                title: 'Green Imperative',
                description: 'Nigeria-Brazil agriculture partnership',
                icon: '🤝',
                focus: 'Technology transfer',
              },
              {
                title: 'National Livestock Transformation',
                description: 'Modern ranching and pastoral development',
                icon: '🐄',
                focus: 'Conflict resolution',
              },
              {
                title: 'Special Agro-Industrial Processing Zones',
                description: '20 zones across Nigeria',
                icon: '🏭',
                focus: 'Value addition',
              },
              {
                title: 'National Food Security Program',
                description: 'Strategic grain reserves management',
                icon: '🍚',
                focus: 'Price stabilization',
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="text-4xl mb-3">{program.icon}</div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{program.description}</p>
                  <div className="bg-green-50 rounded-lg px-3 py-1 inline-block">
                    <p className="text-sm font-medium text-green-600">
                      {program.focus}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
                      src="/images/abubakar.webp"
                      alt="Sen. Abubakar"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Sen. Abubakar Kyari
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Honorable Minister of Agriculture & Food Security
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-600 mb-2">
                        Professional Background
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Former Senator</li>
                        <li>Agricultural economist</li>
                        <li>Former APC National Chairman</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-600 mb-2">
                        Key Priorities
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Food self-sufficiency</li>
                        <li>Agricultural industrialization</li>
                        <li>Climate-smart agriculture</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    Sen. Abubakar brings extensive academic and policy experience
                    to his role as Minister. Under his leadership, Nigeria has
                    seen significant increases in agricultural productivity and
                    reductions in food imports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Research Institutions */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Research & Development
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'National Agricultural Seeds Council',
                    focus: 'Seed quality control',
                    achievement: 'Certified 250,000MT seeds annually',
                  },
                  {
                    name: 'National Cereals Research Institute',
                    focus: 'Improved crop varieties',
                    achievement: 'Developed 15 new rice varieties',
                  },
                  {
                    name: 'National Animal Production Research Institute',
                    focus: 'Livestock breeding',
                    achievement: 'Dairy cow productivity +40%',
                  },
                  {
                    name: 'Agricultural Research Council',
                    focus: 'Coordination',
                    achievement: 'Links 15 research institutes',
                  },
                  {
                    name: 'National Veterinary Research Institute',
                    focus: 'Animal health',
                    achievement: 'Produced 500M vaccine doses',
                  },
                  {
                    name: 'Rubber Research Institute',
                    focus: 'Industrial crops',
                    achievement: 'New high-yield clones',
                  },
                ].map((institute, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500"
                  >
                    <h3 className="text-lg font-bold text-green-600 mb-2">
                      {institute.name}
                    </h3>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">Focus:</span>{' '}
                      {institute.focus}
                    </p>
                    <p className="text-sm text-green-600">
                      {institute.achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
