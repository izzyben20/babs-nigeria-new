import { motion } from 'framer-motion';

export default function MinistryWomenAffairs() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-purple-50 to-white">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-100 blur-xl"
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
          <div className="w-40 h-40 rounded-full bg-white shadow-xl border-4 border-purple-600 p-4 flex items-center justify-center mx-auto mb-8">
            <img
              src="/images/ministry_women.png"
              alt="Ministry of Women Affairs Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            Ministry of <span className="text-purple-600">Women Affairs</span>
          </h1>
          <p className="text-xl text-gray-600">
            Empowering Women, Transforming Nigeria
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
            <div className="p-8 md:p-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mandate
              </h2>
              <p className="text-lg">
                To promote the welfare, empowerment, and full participation of
                Nigerian women in national development through policy
                formulation, advocacy, and program implementation.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-4">
                    Key Focus Areas
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-600 mt-1 mr-2"
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
                      <span>Gender equality and women's rights</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-600 mt-1 mr-2"
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
                      <span>Economic empowerment programs</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-600 mt-1 mr-2"
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
                      <span>Combating gender-based violence</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-4">
                    Demographic Impact
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-purple-600">
                        49.4%
                      </p>
                      <p className="text-gray-700">
                        Of Nigeria's population are women
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <p className="text-2xl font-bold text-purple-600">35%</p>
                      <p className="text-gray-700">
                        Female labor force participation
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-4">
                    Policy Framework
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      'National Gender Policy',
                      'Violence Against Persons Prohibition Act',
                      'Women Economic Empowerment Strategy',
                      'National Action Plan on UNSCR 1325',
                    ].map((policy, i) => (
                      <div key={i} className="bg-purple-50 rounded-lg p-3">
                        <p className="text-purple-600 font-medium">{policy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Empowerment Programs */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Women Empowerment Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Women Entrepreneurship Program',
                description:
                  'Skills training and startup grants for 50,000 women annually',
                icon: '💼',
                focus: 'Micro-enterprise development',
              },
              {
                title: 'End Violence Against Women',
                description: 'National campaign with 100+ shelters established',
                icon: '🚫',
                focus: 'GBV prevention and response',
              },
              {
                title: 'Girl-Child Education Fund',
                description: 'Scholarships for 10,000 girls in STEM fields',
                icon: '👩‍🎓',
                focus: 'Education access',
              },
              {
                title: 'Women in Agriculture',
                description: 'Support for 500,000 female farmers',
                icon: '👩‍🌾',
                focus: 'Agribusiness',
              },
              {
                title: 'Women in Politics',
                description:
                  'Leadership training for aspiring female politicians',
                icon: '🏛️',
                focus: 'Political participation',
              },
              {
                title: 'Digital Literacy for Women',
                description: 'Tech skills training for 100,000 women',
                icon: '💻',
                focus: 'Digital inclusion',
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-purple-500 hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="text-4xl mb-3">{program.icon}</div>
                  <h3 className="text-xl font-bold text-purple-600 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{program.description}</p>
                  <div className="bg-purple-50 rounded-lg px-3 py-1 inline-block">
                    <p className="text-sm font-medium text-purple-600">
                      {program.focus}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* GBV Prevention */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Gender-Based Violence Prevention
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-4">
                    National Response Framework
                  </h3>
                  <ul className="space-y-4">
                    {[
                      '24/7 national GBV helpline',
                      '100+ shelters across 36 states',
                      'Special gender desks in police stations',
                      'Legal aid for survivors',
                      'Community awareness campaigns',
                      'Perpetrator rehabilitation programs',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                          <svg
                            className="w-4 h-4 text-purple-600"
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
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="bg-purple-50 rounded-xl p-6 h-full">
                    <h3 className="text-xl font-bold text-purple-600 mb-4">
                      Impact (2020-2024)
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          metric: 'GBV cases reported',
                          value: '58%',
                          detail: 'Increase in reporting rate',
                        },
                        {
                          metric: 'Conviction rate',
                          value: '2.5x',
                          detail: 'Improved prosecution',
                        },
                        {
                          metric: 'Shelter capacity',
                          value: '300%',
                          detail: 'More safe spaces',
                        },
                        {
                          metric: 'Awareness reach',
                          value: '15M',
                          detail: 'Through media campaigns',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="border-b border-purple-100 pb-3"
                        >
                          <div className="flex justify-between items-baseline">
                            <span className="font-medium">{item.metric}</span>
                            <span className="text-lg font-bold text-purple-600">
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
                      src="/images/Imaan.jpg"
                      alt="Hajia Imaan Sulaiman-Ibrahim"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">
                    Hajia Imaan Sulaiman-Ibrahim
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Honorable Minister of Women Affairs
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-bold text-purple-600 mb-2">
                        Professional Background
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Former Federal Commissioner, NCPC</li>
                        <li>Gender equality advocate</li>
                        <li>Social development expert</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-bold text-purple-600 mb-2">
                        Key Priorities
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Ending gender-based violence</li>
                        <li>Women's economic empowerment</li>
                        <li>Girl-child education</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    Hajia Imaan Sulaiman-Ibrahim is a passionate advocate for
                    women's rights with extensive experience in social
                    development. Under her leadership, the ministry has launched
                    innovative programs to address systemic barriers facing
                    Nigerian women and girls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partners */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Key Partnerships
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'UN Women', logo: '/logos/un_women.png' },
                  { name: 'UNDP', logo: '/logos/undp.png' },
                  { name: 'World Bank', logo: '/logos/world_bank.png' },
                  { name: 'African Development Bank', logo: '/logos/afdb.png' },
                  { name: 'EU Gender Initiative', logo: '/logos/eu.png' },
                  { name: 'USAID', logo: '/logos/usaid.png' },
                  {
                    name: 'Nigerian Women Trust Fund',
                    logo: '/logos/nwtf.png',
                  },
                  { name: 'Women in Management', logo: '/logos/wim.png' },
                ].map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-purple-50 rounded-lg p-6 flex items-center justify-center"
                  >
                    <span className="h-12 object-contain text-center">{partner.name}</span>
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
