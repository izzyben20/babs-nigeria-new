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
  PackageCheck,
  LeafyGreen,
  Scale,
} from 'lucide-react';
import LogoWhite from '../../components/LogoWhite';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/images/land_preparations.jpg',
    '/images/soy_seed.jpg',
    '/images/farm.jpg',
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

  // Soybean benefits data
  const soybeanBenefits = [
    {
      title: 'High Protein Content',
      value: '40-45%',
      desc: 'Superior protein levels for nutrition and processing',
    },
    {
      title: 'Annual Production',
      value: '10,000+ MT',
      desc: 'Consistent large-scale production capacity',
    },
    {
      title: 'Oil Content',
      value: '18-22%',
      desc: 'Optimal oil yield for extraction processes',
    },
    {
      title: 'Farm Partners',
      value: '200+',
      desc: 'Network of trusted soybean growers',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section (unchanged as requested) */}
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
              Nigeria's Premier Soybean Specialists
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto"
            >
              Cultivating premium soybeans through sustainable practices to
              power Nigeria's food and industrial sectors with quality raw
              materials.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Our Soybean Products
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Become a Supplier
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
              Our Agricultural Operations
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specializing in soybean cultivation while expanding to other key
              crops, we focus on quality, sustainability, and meeting industrial
              demand.
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
                  Our Focus
                </h3>
                <p className="text-gray-600 mb-4">
                  Currently specializing in soybean production, we're
                  methodically expanding to include cassava, maize, sorghum, and
                  millet. Our approach combines modern agricultural techniques
                  with sustainable practices to deliver consistent quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-600">
                      Specialized soybean cultivation for industrial use
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-600">
                      Strategic expansion to additional staple crops
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-600">
                      Quality-focused farming methods
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-600">
                      Sustainable land management practices
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Soybean Specialization Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Soybean Cultivation Excellence
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've mastered the art and science of soybean production to
              deliver consistent quality for industrial and nutritional
              applications.
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
                  backgroundImage: `url(/images/soybeans_open_field.jpg)`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  Expansive Soybean Fields
                </h3>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-3">
                  Why Soybeans?
                </h3>
                <p className="text-gray-600">
                  Soybeans are Nigeria's agricultural gold - packed with
                  protein, versatile for countless products, and essential for
                  food security. As specialists, we've optimized every aspect of
                  cultivation to maximize yield, quality, and nutritional value.
                </p>
              </motion.div>

              {/* Soybean Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {soybeanBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  >
                    <h4 className="text-amber-600 font-bold text-xl">
                      {benefit.value}
                    </h4>
                    <p className="font-medium text-gray-800">{benefit.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soybean Applications Section */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Power of Soybeans
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              Our soybeans serve diverse industries with multiple applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <PackageCheck className="w-8 h-8" />,
                title: 'Food Industry',
                desc: 'For tofu, soy milk, flour, and protein isolates used in countless food products',
                image: '/images/soydrink.jpg', // Various soy-based foods
              },
              {
                icon: <LeafyGreen className="w-8 h-8" />,
                title: 'Animal Feed',
                desc: 'High-protein meal for poultry, livestock, and aquaculture nutrition',
                image: '/images/animal_feed.jpg', // Animals eating soy-based feed
              },
              {
                icon: <Factory className="w-8 h-8" />,
                title: 'Industrial Uses',
                desc: 'Oil for biodiesel, lecithin for manufacturing, and other industrial applications',
                image: '/images/industrial.jpg', // Industrial soy processing
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-emerald-700/50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="p-6">
                  <div className="bg-amber-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-emerald-100">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Updated for Soybeans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Why Our Soybeans Stand Out
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized practices that make our soybeans superior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scale className="w-8 h-8" />,
                title: 'Quality Grading',
                desc: 'Rigorous sorting by size, color, and protein content for consistent quality',
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Non-GMO Assurance',
                desc: 'Verified traditional varieties preferred by health-conscious markets',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Certified Processes',
                desc: 'Internationally recognized farming and handling certifications',
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Traceability',
                desc: 'Full supply chain transparency from farm to customer',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-emerald-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow border border-emerald-100"
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

      {/* Soybean Cultivation Process */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Our Soybean Cultivation Process
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meticulous attention at every growth stage ensures premium quality
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-emerald-300 transform -translate-x-1/2" />

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  icon: <Sprout className="w-8 h-8" />,
                  title: 'Seed Selection',
                  description:
                    'Certified high-yield varieties with proven performance',
                  image: '/images/soybean_selection.jpg', // Close-up of selecting seeds
                },
                {
                  icon: <Sun className="w-8 h-8" />,
                  title: 'Precision Planting',
                  description:
                    'Optimal spacing and depth for maximum yield potential',
                  image: '/images/soy_planting.jpg', // Modern planting equipment
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: 'Nutrient Management',
                  description:
                    'Soil-specific fertilization and irrigation programs',
                  image: '/images/soybeans_plant.jpg', // Healthy growing plants
                },
                {
                  icon: <Package className="w-8 h-8" />,
                  title: 'Timely Harvest',
                  description:
                    'Monitoring moisture levels for perfect harvest timing',
                  image: '/images/havesting_soy.jpg', // Combine harvesting soybeans
                },
                {
                  icon: <Truck className="w-8 h-8" />,
                  title: 'Careful Processing',
                  description:
                    'Gentle handling to preserve quality and nutrition',
                  image: '/images/processing.jpg', // Cleaning and sorting facility
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
                  <div className="h-40 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <div
                      className="h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                      style={{ backgroundImage: `url(${step.image})` }}
                    ></div>
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Chain Showcase */}
      <section className="py-16 bg-gradient-to-b from-emerald-100 to-white">
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
              Our End-to-End Value Chain
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              From seed to shelf - our complete agricultural ecosystem
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-emerald-300 transform -translate-x-1/2" />

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  icon: <Sprout className="w-8 h-8" />,
                  title: 'Cultivation',
                  description:
                    'Sustainable farming of cassava, maize, soybeans and other crops',
                },
                {
                  icon: <Sun className="w-8 h-8" />,
                  title: 'Harvesting',
                  description:
                    'Timely collection at peak quality using modern techniques',
                },
                {
                  icon: <Package className="w-8 h-8" />,
                  title: 'Processing',
                  description:
                    'State-of-the-art facilities transforming raw produce',
                },
                {
                  icon: <Truck className="w-8 h-8" />,
                  title: 'Distribution',
                  description: 'Efficient logistics network across Nigeria',
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: 'Export',
                  description: 'Global reach to international markets',
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

      {/* CTA Section - Updated for Soybeans */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner With Nigeria's Soybean Experts
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Whether you need premium soybeans for processing or want to join
              our network of certified growers, let's grow together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to={'/contact'}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
