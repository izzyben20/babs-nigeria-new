import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PartnershipBenefits = () => {
  const benefits = [
    {
      title: 'Market Expansion',
      description:
        'Access new markets and customer segments through established networks',
      icon: '🌐',
    },
    {
      title: 'Shared Resources',
      description: 'Reduce costs through pooled assets and joint investments',
      icon: '🤝',
    },
    {
      title: 'Innovation Transfer',
      description: 'Adopt cutting-edge technologies from global partners',
      icon: '🚀',
    },
    {
      title: 'Enhanced Credibility',
      description: 'Leverage partner reputations to build trust',
      icon: '⭐',
    },
    {
      title: 'Regulatory Support',
      description: 'Navigate complex compliance requirements',
      icon: '📋',
    },
    {
      title: 'Sustainable Growth',
      description: 'Develop eco-friendly and inclusive business models',
      icon: '🌱',
    },
  ];

  const partnershipOptions = [
    { type: 'Joint Ventures', category: 'Equity' },
    { type: 'Technology Licensing', category: 'Knowledge' },
    { type: 'Distribution Agreements', category: 'Commercial' },
    { type: 'Supplier Integration', category: 'Operational' },
    { type: 'Public-Private (PPPs)', category: 'Infrastructure' },
    { type: 'Research Collaboration', category: 'Academic' },
    { type: 'Franchise Models', category: 'Expansion' },
    { type: 'Outsourcing', category: 'Services' },
  ];

  return (
    <div className="relative max-w-7xl mx-auto overflow-hidden bg-white py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#003DB4]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Strategic{' '}
            <span className="text-[#003DB4]">Partnership Advantages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock exponential growth through collaborative business
            relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#003DB4] mb-8 flex items-center">
              {/* <CheckCircleIcon className="h-8 w-8 mr-3 text-[#0066FF]" /> */}
              Key Benefits
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-3xl mr-4">{benefit.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#003DB4] mb-8 flex items-center">
              <svg
                className="h-8 w-8 mr-3 text-[#0066FF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Partnership Models
            </h3>

            <div className="bg-gradient-to-br from-[#003DB4] to-[#0066FF] rounded-xl shadow-xl overflow-hidden">
              <div className="p-6">
                <ul className="space-y-4">
                  {partnershipOptions.map((option, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start group"
                    >
                      <div className="flex-shrink-0 h-6 w-6 bg-white rounded-full mr-4 mt-1 flex items-center justify-center">
                        <span className="text-[#003DB4] font-medium text-xs">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{option.type}</p>
                        <span className="text-white/70 text-sm">
                          {option.category}
                        </span>
                      </div>
                      <svg
                        className="ml-auto h-5 w-5 text-white/50 group-hover:text-white transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 px-6 py-4">
                <button className="w-full bg-white text-[#003DB4] font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Explore Partnership Options
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to form strategic alliances?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={'/contact-us'}
              className="bg-[#003DB4] hover:bg-[#002a80] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipBenefits;
