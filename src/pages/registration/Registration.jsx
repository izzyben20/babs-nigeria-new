import { useState } from 'react';
import { motion } from 'framer-motion';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    office: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    website: '',
    registrationOption: 'Delegate',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: '0 10px 20px rgba(0, 61, 180, 0.3)',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-30 from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-2xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#003DB4] mb-3 font-poppins">
            Join the EU-Nigeria Trade Mission
          </h1>
          <p className="text-lg text-gray-600 font-poppins">
            Register now to be part of this transformative business experience
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="bg-[#003DB4]/70 py-4 px-6">
            <h2 className="text-2xl font-bold text-white font-poppins">
              Registration Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003DB4] focus:border-[#003DB4] transition font-poppins"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003DB4] focus:border-[#003DB4] transition font-poppins"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
                  Office/Position
                </label>
                <input
                  type="text"
                  name="office"
                  value={formData.office}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003DB4] focus:border-[#003DB4] transition font-poppins"
                  placeholder="E.g. CEO, Director, Manager"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-gray-200"
            >
              <h3 className="text-xl font-semibold text-[#003DB4] mb-4 font-poppins">
                Contact Information
              </h3>
              <p className="text-gray-500 mb-6 font-poppins">
                We'll use this to contact you about the event details
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003DB4] focus:border-[#003DB4] transition font-poppins"
                      placeholder="+234 800 000 0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003DB4] focus:border-[#003DB4] transition font-poppins"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003DB4] focus:border-[#003DB4] transition font-poppins"
                    placeholder="Your company name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003DB4] focus:border-[#003DB4] transition font-poppins"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-gray-200"
            >
              <h3 className="text-xl font-semibold text-[#003DB4] mb-4 font-poppins">
                Registration Type
              </h3>
              <p className="text-gray-500 mb-6 font-poppins">
                Select the option that best describes your participation
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Delegate', 'Corporate', 'Government'].map((option) => (
                  <motion.div
                    key={option}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="radio"
                      id={option}
                      name="registrationOption"
                      value={option}
                      checked={formData.registrationOption === option}
                      onChange={handleChange}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={option}
                      className="block p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#003DB4] peer-checked:bg-blue-50 transition font-poppins"
                    >
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3 flex items-center justify-center peer-checked:border-[#003DB4]">
                          <div className="w-3 h-3 rounded-full bg-[#003DB4] hidden peer-checked:block"></div>
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </label>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-[#003DB4] cursor-pointer text-white py-4 px-6 rounded-lg font-bold text-lg font-poppins shadow-md"
              >
                Complete Registration
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;
