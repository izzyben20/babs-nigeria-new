import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Leaf,
  ShieldCheck,
  Truck,
  Sprout,
  Users,
  Factory,
  BarChart2,
  Globe,
  Award,
  Sun,
  Droplets,
  Package,
  Check,
  Calendar,
  Clock,
} from 'lucide-react';
import LogoWhite from '../../components/LogoWhite';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images
  const heroImages = [
    '/images/soybeans_farm.jpg',
    '/images/man_farming.jpg',
    '/images/farm.jpg',
  ];

  // Product images
  const productImages = [
    {
      name: 'Cassava',
      img: '/images/cassava.webp',
    },
    {
      name: 'Maize',
      img: '/images/maize.jpg',
    },
    {
      name: 'Soybeans',
      img: '/images/soybeans.jpg',
    },
    {
      name: 'Rice',
      img: '/images/rice.jpg',
    },
    {
      name: 'Yam',
      img: '/images/yam.jpg',
    },
    {
      name: 'Sorghum',
      img: '/images/Sorghum.jpg',
    },
    {
      name: 'Millet',
      img: '/images/milet.jpg',
    },
    {
      name: 'Processed Goods',
      img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg">
                <LogoWhite />
              </div>
              <h1 className="ml-4 text-4xl md:text-6xl font-bold text-white">
                EE Agro <span className="text-amber-300">Farms</span>
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-white mb-6"
            >
              Rooted in Nature, Powered by Purpose
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto"
            >
              Cultivating excellence in agriculture through sustainable
              practices and innovative solutions for industrial growth and food
              security.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Our Products
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="w-8 h-8 text-white animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Transforming Agriculture for Industrial Growth
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bridge the gap between farm and factory through sustainable
              cultivation and innovative processing of agricultural produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/agro_farm.jpg)`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  Sustainable Farming Practices
                </h3>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To become a leading provider of high-quality, sustainably
                  processed agricultural products for industrial use across
                  Africa and global markets—driving food security, industrial
                  growth, and rural prosperity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To cultivate, aggregate, and process premium farm produce
                  through innovative, efficient, and eco-friendly methods,
                  delivering value-added products to manufacturers while
                  empowering farmers and preserving the environment.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Why Choose EE Agro Farms
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the agricultural
              sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Check className="w-8 h-8" />,
                title: 'Quality Assurance',
                desc: 'Rigorous quality control measures at every stage of production',
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainable Practices',
                desc: 'Environmentally responsible farming that preserves resources',
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Reliable Supply',
                desc: 'Consistent year-round production and delivery schedules',
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Quick Turnaround',
                desc: 'Efficient processing and logistics for timely delivery',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-emerald-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Integrity',
                desc: 'We conduct our business with honesty, accountability, and respect for all stakeholders.',
              },
              {
                icon: <BarChart2 className="w-8 h-8" />,
                title: 'Innovation',
                desc: 'We embrace modern technologies and practices to improve productivity and quality.',
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainability',
                desc: 'We prioritize environmentally responsible farming for long-term impact.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Partnership',
                desc: 'We foster strong relationships to build a resilient agricultural value chain.',
              },
              {
                icon: <Factory className="w-8 h-8" />,
                title: 'Quality',
                desc: 'We deliver consistent, high-grade agricultural products for industrial use.',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Empowerment',
                desc: 'We support rural development through job creation and capacity building.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-emerald-700/50 p-6 rounded-xl hover:bg-emerald-700/70 transition-all duration-300"
              >
                <div className="bg-amber-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-emerald-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farming Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Our Farming Process
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From seed to harvest - our meticulous approach ensures quality at
              every stage
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-emerald-300 transform -translate-x-1/2" />

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  icon: <Sprout className="w-8 h-8" />,
                  title: 'Land Preparation',
                  description:
                    'Soil testing and sustainable land preparation techniques',
                },
                {
                  icon: <Sun className="w-8 h-8" />,
                  title: 'Planting',
                  description:
                    'Using high-quality seeds and optimal planting methods',
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: 'Irrigation',
                  description: 'Efficient water management systems',
                },
                {
                  icon: <Package className="w-8 h-8" />,
                  title: 'Harvesting',
                  description: 'Timely harvesting at peak quality',
                },
                {
                  icon: <Truck className="w-8 h-8" />,
                  title: 'Processing',
                  description: 'Modern facilities for value addition',
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white p-6 rounded-xl shadow-md text-center ${
                    index % 2 === 0 ? 'md:mb-8' : 'md:mt-8'
                  }`}
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-emerald-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Our Agricultural Products
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-quality raw materials for industrial, commercial, and export
              use
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productImages.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative h-60 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">
                      {product.name === 'Processed Goods'
                        ? 'Value-added products tailored to industrial specifications'
                        : `Premium quality ${product.name.toLowerCase()} for industrial applications`}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">
                    {product.name}
                  </h3>
                  <button className="text-amber-600 font-medium hover:text-amber-700 flex items-center text-sm">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Whether you're a farmer looking to join our network or an
              industrial buyer seeking premium agricultural products, we'd love
              to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Our Team
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Our Supply Chain
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
