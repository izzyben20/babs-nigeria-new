import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Sprout,
  Truck,
  ShieldCheck,
  Leaf,
} from 'lucide-react';
import LogoWhite from './LogoWhite';

export default function Footer() {
  return (
    <footer className="relative bg-emerald-800 text-white overflow-hidden">
      {/* Background agricultural elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/contact.jpg')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      </div>

      {/* Footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                {/* <Sprout className="w-8 h-8" /> */}
                <LogoWhite width={30} height={40} />
              </div>
              <span className="ml-3 text-2xl font-bold text-white">
                EE Agro <span className="text-amber-300">Farms</span>
              </span>
            </div>
            <p className="text-emerald-100">
              Cultivating excellence in agriculture through sustainable
              practices and innovative solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                {
                  name: 'Organic',
                  icon: <Leaf className="w-5 h-5 text-amber-300" />,
                },
                {
                  name: 'Delivery',
                  icon: <Truck className="w-5 h-5 text-amber-300" />,
                },
                {
                  name: 'Quality',
                  icon: <ShieldCheck className="w-5 h-5 text-amber-300" />,
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center space-x-1 bg-emerald-700/50 px-3 py-1 rounded-full"
                >
                  {item.icon}
                  <span className="text-xs font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-amber-300 border-b border-emerald-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Products', href: '/products' },
                { label: 'Farm Gallery', href: '/gallery' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="flex items-center text-emerald-100 hover:text-amber-300 transition-colors"
                  >
                    <span className="w-2 h-2 bg-amber-300 rounded-full mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-amber-300 border-b border-emerald-700 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100 font-medium">Head Office:</p>
                  <p className="text-emerald-100">
                    186A, Igbosere Rd, Obalende,
                    <br />
                    Lagos, Nigeria
                  </p>
                  <p className="text-emerald-100 font-medium mt-2">
                    Farm Location:
                  </p>
                  <p className="text-emerald-100">
                    Gwaria Wizi Village,
                    <br />
                    Kaiama LGA,
                    <br />
                    Kwara State, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300" />
                <div>
                  <a
                    href="tel:+2348133035963"
                    className="text-emerald-100 hover:text-amber-300 transition-colors"
                  >
                    +234 813 303 5963
                  </a>
                  <br />
                  <a
                    href="tel:+2349163563562"
                    className="text-emerald-100 hover:text-amber-300 transition-colors"
                  >
                    0916 356 3562
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300" />
                <a
                  href="mailto:info@ee-agro.com"
                  className="text-emerald-100 hover:text-amber-300 transition-colors"
                >
                  info@ee-agro.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-300" />
                <p className="text-emerald-100">Mon - Fri: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-emerald-700 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-emerald-200 text-sm">
            &copy; {new Date().getFullYear()} EE Agro Farms LTD. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
