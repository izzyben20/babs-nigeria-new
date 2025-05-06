import { motion } from 'framer-motion';

export default function MinistryMarine() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-blue-50 to-white">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 blur-xl"
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
          <div className="w-40 h-40 rounded-full bg-white shadow-xl border-4 border-blue-600 p-4 flex items-center justify-center mx-auto mb-8">
            <img
              src="/images/ministry_marine.png"
              alt="Ministry of Marine & Blue Economy Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            Ministry of{' '}
            <span className="text-blue-600">Marine & Blue Economy</span>
          </h1>
          <p className="text-xl text-gray-600">
            Harnessing Nigeria's Maritime Potential
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
            <div className="p-8 md:p-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-lg">
                To develop and regulate Nigeria's marine resources and blue
                economy for sustainable economic growth, job creation, and
                environmental conservation.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">
                    Strategic Focus Areas
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-1 mr-2"
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
                      <span>Maritime transport and shipping development</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-1 mr-2"
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
                      <span>Fisheries and aquaculture development</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-1 mr-2"
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
                      <span>Coastal and marine tourism</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-1 mr-2"
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
                      <span>Marine renewable energy development</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">
                    Nigeria's Maritime Potential
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="text-gray-700">
                        Nigeria has a coastline of{' '}
                        <span className="font-bold text-blue-600">853km</span>{' '}
                        and an Exclusive Economic Zone (EEZ) of{' '}
                        <span className="font-bold text-blue-600">
                          200 nautical miles
                        </span>
                        , with vast marine resources.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="text-gray-700">
                        The blue economy currently contributes about{' '}
                        <span className="font-bold text-blue-600">4%</span> to
                        GDP, with potential to grow to{' '}
                        <span className="font-bold text-blue-600">10%</span> by
                        2030.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <p className="text-gray-700">
                        Over{' '}
                        <span className="font-bold text-blue-600">
                          5 million
                        </span>{' '}
                        Nigerians are employed directly and indirectly in
                        maritime-related activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Initiatives */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Key Initiatives & Programs
          </h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Deep Blue Project
                </h3>
                <p className="text-gray-700 mb-4">
                  An integrated maritime security strategy to combat piracy,
                  armed robbery, and other maritime crimes in Nigeria's
                  territorial waters and Gulf of Guinea. Components include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Special mission aircraft for surveillance</li>
                  <li>Fast intervention vessels</li>
                  <li>Armored vehicles for coastal patrol</li>
                  <li>Marine police and special forces</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  National Fleet Development
                </h3>
                <p className="text-gray-700 mb-4">
                  A public-private partnership initiative to revive Nigeria's
                  national shipping fleet and reduce foreign dominance in
                  maritime trade. Key objectives:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Increase Nigerian-owned vessels',
                    'Develop indigenous shipping capacity',
                    'Create maritime employment',
                    'Reduce capital flight in shipping',
                  ].map((item, i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-3">
                      <p className="text-blue-600 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Coastal Communities Development
                </h3>
                <p className="text-gray-700">
                  A program to improve livelihoods in coastal communities
                  through capacity building, infrastructure development, and
                  sustainable fishing practices to reduce illegal activities.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Leadership & Structure */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Ministry Leadership
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="/images/Oyetola.jpg"
                      alt="Adegboyega Oyetola"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    Adegboyega Oyetola, CON
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Honorable Minister of Marine & Blue Economy
                  </p>
                  <p className="text-gray-700 mb-4">
                    Former Governor of Osun State with extensive experience in
                    both public and private sector leadership. As Minister, he
                    oversees the development of Nigeria's maritime sector and
                    blue economy potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
