import { motion } from 'framer-motion';
import { Users, Leaf, Award, BarChart } from 'lucide-react';

const TeamPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: 'Raymond Onovwigun',
      role: 'Managing Director',
      image: '/images/raymond_ono.jpg',
      bio: 'Raymond Onovwigun is the Managing Director. He previously worked at Romco Group and PM Services as a Director. He attended the University of Roehampton. Raymond is an Entrepreneur and a visionary leader with a proven track record in business and processing industry.',
    },
    {
      name: 'Owoicho Edo',
      role: 'Farm Manager',
      image: '/images/blank.png',
      bio: 'Owoicho Edo is a seasoned Farm Manager at EE Agro Farms Limited, bringing over two decades of hands-on experience in large-scale cassava farming, operational planning, and team leadership. After nearly nine years of outstanding service as Senior Team Lead at Crest Agro Products Ltd, he joined EE Agro Farms to lead its agricultural operations with a focus on enhancing productivity, implementing modern farming techniques, and ensuring high-quality yields. Leveraging his comprehensive expertise in cassava cultivation and his proven record of supervising multi-level farm teams, Owoicho has positioned EE Agro Farms as a key player in Nigeria’s cassava value chain.',
    },
    {
      name: 'John Oshatuyi',
      role: 'Financial Consultant',
      image: '/images/John_Oshatuyi.jpg',
      bio: 'John Oshatuyi is a finance expert and Chartered Accountant with over 13years of experience in financial leadership across sectors. John has worked in top accounting roles in large accounting firms, including Big 4- Deloitte, and across Industries, including banking. As a Financial Consultant at EE Agro Farms Limited, he manages large-scale operations, drives strategic reporting, and ensures compliance. He has led major initiatives like a $47.4 million real estate project and tax-saving worth over ₦200 million. Currently pursuing an Executive MBA at University of Lagos Business School, John brings deep expertise in financial reporting, budgeting, risk management, and automation. He is passionate about using finance to create sustainable value for businesses and society.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/team-harvest.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-800/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Meet Our Leadership Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            The passionate professionals driving EE Agro Farms' success
          </motion.p>
        </div>
      </div>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              Our Core Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals guiding our agricultural vision
            </p>
          </motion.div>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-emerald-400 to-amber-400 mr-4"></div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {member.name}
                      </h3>
                    </div>
                    <p className="text-emerald-600 text-lg font-medium mb-6">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The values that drive our daily operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Expertise',
                description:
                  'Our team brings decades of combined experience in agriculture, finance, and business leadership.',
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainability',
                description:
                  'We implement farming practices that protect the environment while maximizing productivity.',
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: 'Growth',
                description:
                  'Continuous improvement through innovation, technology, and strategic planning.',
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-4 text-center">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
