import { motion } from 'framer-motion';
import {
  Leaf,
  Sprout,
  Trees,
  Factory,
  Target,
  Users,
  ShieldCheck,
  BarChart2,
  Truck,
  Package,
  Globe,
  Sun,
  Handshake,
} from 'lucide-react';

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-emerald-50">
      {/* Hero Section with Crop Background */}
      <div className="relative h-96 md:h-screen max-h-[700px] overflow-hidden">
        {/* Crop background image with green overlay */}
        <div className="absolute inset-0 bg-[url('/images/cassava-field.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-emerald-900/70" />

        {/* Animated floating leaves */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 text-emerald-300/30"
        >
          <Leaf className="w-16 h-16" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 text-emerald-300/30"
        >
          <Leaf className="w-20 h-20" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Cultivating Nigeria's Agricultural Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-emerald-100"
          >
            From our fields to industries worldwide - sustainable,
            quality-driven agriculture
          </motion.p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section
        id="who-we-are"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              EE Agro Farms Ltd was incorporated in June 2025 to engage in the
              cultivation, harvesting, aggregation, and processing of
              agricultural produce, including soybeans, cassava, maize, and
              other cash and food crops. We produce raw materials and finished
              goods for industrial, commercial, and export use.
            </p>
            <p className="text-lg text-gray-700">
              Our activities extend to packaging, storage, supply chain
              management, and trade in agricultural and agro-allied products,
              ensuring complete farm-to-factory excellence.
            </p>
          </div>
          <div className="relative h-80 bg-emerald-100 rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[url('/images/farm-processing.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-emerald-800/30" />
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-emerald-50 p-8 rounded-xl shadow-md max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-emerald-600 mr-3" />
              <h3 className="text-2xl font-bold text-emerald-800">
                Our Vision
              </h3>
            </div>
            <p className="text-lg text-gray-700">
              To become a leading provider of high-quality, sustainably
              processed agricultural products for industrial use across Africa
              and global markets—driving food security, industrial growth, and
              rural prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto border border-emerald-100"
          >
            <div className="flex items-center mb-6">
              <Factory className="w-8 h-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-amber-800">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700">
              To cultivate, aggregate, and process premium farm produce through
              innovative, efficient, and eco-friendly methods, delivering
              value-added products to manufacturers and end-users while
              empowering farmers, preserving the environment, and ensuring
              consistent quality across the value chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-16 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg max-w-3xl mx-auto text-emerald-100">
              The principles that guide every decision we make and action we
              take
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Integrity',
                description:
                  'We conduct our business with honesty, accountability, and respect for all stakeholders.',
              },
              {
                icon: <BarChart2 className="w-8 h-8" />,
                title: 'Innovation',
                description:
                  'We embrace modern technologies and practices to improve productivity and product quality.',
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainability',
                description:
                  'We prioritize environmentally responsible farming and processing methods for long-term impact.',
              },
              {
                icon: <Handshake className="w-8 h-8" />,
                title: 'Partnership',
                description:
                  'We foster strong relationships with farmers, suppliers, and customers to build a resilient value chain.',
              },
              {
                icon: <Sprout className="w-8 h-8" />,
                title: 'Quality',
                description:
                  'We are committed to delivering consistent, high-grade agricultural products for industrial use.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Empowerment',
                description:
                  'We support rural development and economic inclusion through job creation and capacity building.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-emerald-700/50 p-6 rounded-lg backdrop-blur-sm hover:bg-emerald-700/70 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-emerald-600/30 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>
                <p className="text-emerald-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section id="principles" className="py-16 bg-white">
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
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              The foundation of our operational philosophy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Farm-to-Factory Excellence: We ensure traceability and quality from cultivation to processing.',
              'Customer-Centric Operations: We prioritize the needs of our industrial clients by offering customized, reliable solutions.',
              'Impact-Driven Growth: We measure success not just by profit, but by community, environmental, and economic outcomes.',
              'Adaptability and Learning: We continually improve through feedback, research, and innovation.',
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start p-6 border border-emerald-100 rounded-lg bg-emerald-50 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700">{principle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
