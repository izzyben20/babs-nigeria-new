import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Package,
  Leaf,
  ShieldCheck,
  Truck,
  BarChart2,
  ArrowRight,
  Clock,
} from 'lucide-react';

const ProductsPage = () => {
  // Product data - only soybeans available now
  const products = [
    {
      name: 'Soybeans',
      description:
        'Premium protein-rich soybeans for oil extraction, animal feed, and value-added food products with consistent quality.',
      uses: [
        'Soybean oil production',
        'Livestock and poultry feed',
        'Tofu and soy milk processing',
        'Industrial applications',
      ],
      image: '/images/soybeans.jpg',
      available: true,
    },
    {
      name: 'Cassava',
      description:
        'High-quality cassava tubers and processed derivatives coming soon for industrial starch, flour, and ethanol production.',
      uses: [
        'Industrial starch production',
        'Food processing (garri, fufu, flour)',
        'Biofuel raw material',
      ],
      image: '/images/cassava.webp',
      available: false,
    },
    {
      name: 'Maize',
      description:
        'High-grade maize cultivation planned for optimal nutritional content, suitable for human consumption and animal feed.',
      uses: [
        'Cornmeal and flour production',
        'Livestock feed ingredient',
        'Industrial starch extraction',
      ],
      image: '/images/maize.jpg',
      available: false,
    },
    {
      name: 'Sorghum',
      description:
        'Nutritious sorghum varieties coming soon for food, beverage, and industrial applications.',
      uses: ['Human consumption', 'Beverage production', 'Animal feed'],
      image: '/images/sorghum.jpg',
      available: false,
    },
    {
      name: 'Millet',
      description:
        'Premium millet production planned for health-conscious consumers and specialty food markets.',
      uses: ['Traditional foods', 'Health foods', 'Gluten-free products'],
      image: '/images/millet.jpg',
      available: false,
    },
  ];

  const certifications = [
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing at every stage from farm to factory',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: 'Sustainable Farming',
      description: 'Eco-friendly practices that protect soil health',
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: 'Reliable Supply',
      description: 'Consistent soybean volumes year-round',
      icon: <Truck className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: 'Traceability',
      description: 'Full farm-to-factory documentation',
      icon: <BarChart2 className="w-8 h-8 text-emerald-600" />,
    },
  ];

  // Current available product (soybeans)
  const currentProduct = products.find((product) => product.available);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-emerald-800 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-[url(/images/soybeans_hero.jpg)] bg-cover bg-center opacity-30"
          style={{ backgroundPosition: 'center' }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Agricultural Products
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Currently specializing in premium soybean cultivation with plans to
            expand to other crops
          </p>
        </motion.div>
      </section>

      {/* Current Product (Soybeans) */}
      {currentProduct && (
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-xl overflow-hidden shadow-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentProduct.image})` }}
                ></div>
              </motion.div>

              <div>
                <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                  Our Current Product: {currentProduct.name}
                </h2>
                <div className="w-20 h-1 bg-amber-500 mb-6"></div>
                <p className="text-lg text-gray-600 mb-6">
                  {currentProduct.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-emerald-700 mb-3">
                    Primary Uses:
                  </h4>
                  <ul className="space-y-2">
                    {currentProduct.uses.map((use, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span className="text-gray-600">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Request Soybean Pricing & Availability
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Future Products Coming Soon
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are expanding our production to include these additional crops
              in the near future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((product) => !product.available)
              .map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-white/90 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                        Coming Soon
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/70 to-transparent flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <p className="text-gray-600 mb-3 text-sm">
                      {product.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-emerald-700 mb-2 text-sm">
                        Planned Uses:
                      </h4>
                      <ul className="space-y-1">
                        {product.uses.slice(0, 3).map((use, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-amber-500 mr-2 text-xs">
                              •
                            </span>
                            <span className="text-gray-600 text-sm">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Production starting soon</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Certification & Process */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/quality_assurance.jpg)`,
                }}
              ></div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-emerald-800">
                Our Soybean Quality Commitment
              </h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-emerald-100 p-2 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mt-6"
              >
                Request Soybean Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Our Soybeans?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Contact us today for pricing, specifications, and availability of
              our premium soybeans
            </p>
            <Link
              to="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Our Sales Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
