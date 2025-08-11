import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Users,
  Phone,
  Handshake,
  ShoppingBasket,
  Sprout,
  Mail,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Target,
  Factory,
  ShieldCheck,
  BarChart2,
  Leaf as LeafIcon,
} from 'lucide-react';
import LogoColor from './LogoColor';
import LogoWhite from './LogoWhite';

const navItems = [
  { label: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
  {
    label: 'About Us',
    href: '/about',
    icon: <Sprout className="w-5 h-5" />,
    dropdown: [
      {
        label: 'Who We Are',
        href: '/about#who-we-are',
        icon: <Users className="w-4 h-4" />,
      },
      {
        label: 'Our Vision',
        href: '/about#vision',
        icon: <Target className="w-4 h-4" />,
      },
      {
        label: 'Our Mission',
        href: '/about#mission',
        icon: <Factory className="w-4 h-4" />,
      },
      {
        label: 'Core Values',
        href: '/about#values',
        icon: <ShieldCheck className="w-4 h-4" />,
      },
      // {
      //   label: 'Principles',
      //   href: '/about#principles',
      //   icon: <BarChart2 className="w-4 h-4" />,
      // },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    icon: <ShoppingBasket className="w-5 h-5" />,
  },
  { label: 'Our Team', href: '/team', icon: <Users className="w-5 h-5" /> },
  {
    label: 'Partners',
    href: '/partners',
    icon: <Handshake className="w-5 h-5" />,
  },
  { label: 'Contact', href: '/contact', icon: <Phone className="w-5 h-5" /> },
];

const socialLinks = [
  {
    name: 'Facebook',
    url: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const isActive = (href) => location.pathname === href;
  const isAboutPage = location.pathname.startsWith('/about');

  // Keep dropdown open when on about pages
  useEffect(() => {
    if (isAboutPage) {
      setOpenDropdown('about');
    } else {
      setOpenDropdown(null);
    }
  }, [location.pathname]);

  const toggleDropdown = (itemLabel) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
  };

  const getLinkClass = (href, isMobile = false) => {
    const activeBase = isMobile
      ? 'text-emerald-700 font-semibold bg-emerald-50'
      : 'text-emerald-700 font-semibold border-b-2 border-emerald-600';

    const inactiveBase = isMobile
      ? 'text-gray-700 hover:text-emerald-600'
      : 'text-gray-700 hover:text-emerald-600';

    return `flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive(href) ? activeBase : inactiveBase
    }`;
  };

  return (
    <>
      {/* Top Contact Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-emerald-700 text-white text-sm py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@ee-agro.com" className="hover:underline">
                info@ee-agro.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+2349163563562" className="hover:underline">
                +234 916 356 3562
              </a>
              <span className="hidden sm:inline">/</span>
              <a
                href="tel:+2348133035963"
                className="hover:underline hidden sm:inline"
              >
                +234 813 303 5963
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Connect with us:</span>
            <div className="flex space-x-3">
              {socialLinks.map(({ name, url, icon }) => (
                <motion.a
                  key={name}
                  href={url}
                  whileHover={{ y: -2 }}
                  className="text-white hover:text-amber-300 transition-colors"
                  aria-label={name}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-shrink-0"
            >
              {/* <Link to="/" className="flex items-center">
                <LogoColor />
                <span className="-ml-1.5 flex text-xl tracking-wider font-semibold text-emerald-800">
                  EE Agro <span className="text-amber-600 ml-2">Farms</span>
                </span>
              </Link> */}

              <Link to={'/'} className="flex items-center bg-emerald-800 rounded-lg p-2">
                <div className="bg-emerald-600 text-white px-2 py-1 rounded-lg">
                  {/* <Sprout className="w-8 h-8" /> */}
                  <LogoWhite width={30} height={40} />
                </div>
                <span className="ml-3 text-2xl font-bold text-white">
                  EE Agro <span className="text-amber-500">Farms</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 relative">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleDropdown(item.label)}
                        className={`${getLinkClass(item.href)} text-sm`}
                      >
                        {item.icon}
                        {item.label}
                        {openDropdown === item.label ? (
                          <ChevronUp className="w-4 h-4 ml-1" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-1" />
                        )}
                      </motion.button>

                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg z-50 border border-gray-100"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.icon}
                                <span className="ml-2">{subItem.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.href}
                        className={`${getLinkClass(item.href)} text-sm`}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`${getLinkClass(
                            item.href,
                            true
                          )} w-full justify-between`}
                        >
                          <div className="flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </div>
                          {openDropdown === item.label ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-8 space-y-1"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  to={subItem.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                  className={`${getLinkClass(
                                    subItem.href,
                                    true
                                  )} pl-2`}
                                >
                                  {subItem.icon}
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`${getLinkClass(item.href, true)}`}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* ... (keep the existing mobile contact info) */}
              {/* Mobile Contact Info */}
              <div className="px-4 py-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <a
                    href="mailto:contact@ee-agro.com"
                    className="text-sm hover:underline"
                  >
                    info@ee-agro.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <a
                    href="tel:+2348133035963"
                    className="text-sm hover:underline"
                  >
                    +234 813 303 5963
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <a
                    href="tel:+2349163563562"
                    className="text-sm hover:underline"
                  >
                    +234 916 356 3562
                  </a>
                </div>
                <div className="pt-2 flex justify-center space-x-4">
                  {socialLinks.map(({ name, url, icon }) => (
                    <motion.a
                      key={name}
                      href={url}
                      whileHover={{ y: -2 }}
                      className="text-emerald-600 hover:text-amber-500"
                      aria-label={name}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
