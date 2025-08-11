import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: '',
    subject: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://ee-agro.com/api/mailer/src/contact-us.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully!');
        setIsSubmitting(false);
        setFormData({
          fullname: '',
          phone: '',
          email: '',
          message: '',
          subject: '',
        });
      } else {
        toast.error(
          'Error sending message: ' + (result.message || 'Unknown error')
        );
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error('Error submitting form: ' + error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-emerald-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/contact.jpg')] bg-cover bg-center opacity-30"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            We’d love to hear from you! Reach out for inquiries, partnerships,
            or supply chain collaborations.
          </p>
        </motion.div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-emerald-800">
                Our Office
              </h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Head Office
                    </h3>
                    <p className="text-gray-600">
                      186A, Igbosere Rd, Obalende,
                      <br />
                      Lagos, Nigeria
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">
                      Farm Location
                    </h3>
                    <p className="text-gray-600">
                      Gwaria Wizi Village,
                      <br />
                      Kaiama LGA,
                      <br />
                      Kwara State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Call Us
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+2349163563562"
                        className="hover:text-amber-600 transition-colors"
                      >
                        0916 356 3562
                      </a>
                      <br />
                      <a
                        href="tel:+2348133035963"
                        className="hover:text-amber-600 transition-colors"
                      >
                        +234 813 303 5963
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email Us
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:info@ee-agro.com"
                        className="hover:text-amber-600 transition-colors"
                      >
                        info@ee-agro.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-emerald-800 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below, and we’ll get back to you shortly.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      required
                      value={formData.fullname}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 py-3 px-4 border"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 py-3 px-4 border"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 py-3 px-4 border"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 py-3 px-4 border"
                      placeholder="+234 800 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 py-3 px-4 border"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 ml-2 animate-spin" />
                  ) : (
                    <ChevronRight className="w-5 h-5 ml-2" />
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.036854125878!2d3.415722315770098!3d6.453658895331145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae67880c1%3A0xdc9d87d889fc8e3b!2s186A%20Igbosere%20Rd%2C%20Lagos%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Our Products?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Whether you're a farmer, distributor, or industrial buyer, we
              provide high-quality agricultural products tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to={'/products'}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
