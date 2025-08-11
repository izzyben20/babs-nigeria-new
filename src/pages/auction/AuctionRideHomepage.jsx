import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Car,
  Gem,
  Gavel,
  ShieldCheck,
  Clock,
  ArrowRight,
  Calendar,
  TrendingUp,
  MapPin,
  Star,
  BadgeCheck,
  ArrowUpRight,
  Shield,
  Award,
  Handshake,
  PhoneCall,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Home,
  Play,
  Bookmark,
  User,
} from 'lucide-react';

const AuctionRidePro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredCars = [
    {
      id: 1,
      name: '2023 Porsche 911 Turbo S',
      price: '$145,000',
      bids: 24,
      timeLeft: '2h 15m',
      image: '/cars/item-1.jpg',
      location: 'Miami, FL',
      mileage: '1,200 mi',
      year: '2023',
    },
    {
      id: 2,
      name: '1967 Ford Mustang GT',
      price: '$89,500',
      bids: 42,
      timeLeft: '45m',
       image: '/cars/item-2.jpg',
      location: 'Dallas, TX',
      mileage: '32,000 mi',
      year: '1967',
    },
    {
      id: 3,
      name: '2022 Tesla Model S Plaid',
      price: '$98,750',
      bids: 18,
      timeLeft: '3h 30m',
       image: '/cars/item-3.jpg',
      location: 'San Francisco, CA',
      mileage: '5,800 mi',
      year: '2022',
    },
  ];

  const upcomingAuctions = [
    {
      id: 1,
      title: 'Classic Muscle Cars',
      date: 'June 25, 2025',
      count: 12,
       image: '/cars/item-1.jpg',
    },
    {
      id: 2,
      title: 'European Supercars',
      date: 'July 2, 2025',
      count: 8,
       image: '/cars/item-2.jpg',
    },
    {
      id: 3,
      title: 'Luxury SUVs',
      date: 'July 9, 2025',
      count: 15,
       image: '/cars/item-3.jpg',
    },
  ];

  const stats = [
    {
      value: '10,000+',
      label: 'Vehicles Auctioned',
      icon: <Car className="w-8 h-8" />,
    },
    {
      value: '$2.5B+',
      label: 'Total Sales',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      value: '500K+',
      label: 'Registered Bidders',
      icon: <BadgeCheck className="w-8 h-8" />,
    },
    {
      value: '98.7%',
      label: 'Satisfaction Rate',
      icon: <Star className="w-8 h-8" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky Animated Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${
          scrolled ? 'bg-blue-800 shadow-xl' : 'bg-blue-900/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Gem className="w-8 h-8 text-amber-400" />
              <span className="text-white font-bold text-2xl bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                AuctionRide Pro
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {[
                  { name: 'Home', icon: <Home className="w-5 h-5" /> },
                  { name: 'Auctions', icon: <Gavel className="w-5 h-5" /> },
                  {
                    name: 'Sell Your Car',
                    icon: <ArrowUpRight className="w-5 h-5" />,
                  },
                  { name: 'About', icon: <ShieldCheck className="w-5 h-5" /> },
                  { name: 'Contact', icon: <PhoneCall className="w-5 h-5" /> },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    className="group relative"
                  >
                    <a
                      className="text-white/90 hover:text-white flex items-center space-x-1 text-sm font-medium"
                      href="#"
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all"
                >
                  Join Now
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-900/95 backdrop-blur-sm"
          >
            <div className="px-4 pt-2 pb-8 space-y-4">
              {['Home', 'Auctions', 'Sell Your Car', 'About', 'Contact'].map(
                (item) => (
                  <motion.a
                    key={item}
                    whileTap={{ scale: 0.95 }}
                    className="block text-white px-3 py-3 rounded-md text-base font-medium hover:bg-blue-800/50"
                    href="#"
                  >
                    {item}
                  </motion.a>
                )
              )}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-500 text-white px-4 py-3 rounded-md text-base font-medium"
              >
                Sign In
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section with Parallax Effect */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-700/50 text-amber-300 mb-6 border border-blue-600/50"
              >
                <Star className="w-4 h-4 mr-2" />
                Premium Vehicle Auctions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                <span className="block">Discover & Bid on</span>
                <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  Extraordinary Vehicles
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 text-lg text-blue-100 max-w-lg"
              >
                Join the world's most exclusive automotive marketplace. Bid on
                rare collectibles, luxury vehicles, and investment-grade
                automobiles with complete transparency.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-medium rounded-full shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  Start Bidding Now
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-transparent border-2 border-white/20 text-white font-medium rounded-full hover:border-white/40 transition-all flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 flex items-center space-x-8"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((item) => (
                    <img
                      key={item}
                      src={`/cars/item-${item}.jpg`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-blue-800"
                    />
                  ))}
                </div>
                <div className="text-blue-100">
                  <p className="font-medium">Trusted by 500K+ collectors</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="ml-2 text-sm">5.0 (10K+ reviews)</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 h-full"
            >
              <div className="relative w-full h-96 lg:h-full">
                <motion.img
                  src="/cars/item-3.jpg"
                  alt="Luxury Car"
                  className="absolute inset-0 w-full h-full object-contain"
                  animate={{
                    y: [0, -15, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 8,
                      ease: 'easeInOut',
                    },
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                    transition: {
                      repeat: Infinity,
                      duration: 6,
                      ease: 'easeInOut',
                    },
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              {
                name: 'Verified Sellers',
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
              },
              {
                name: 'Escrow Protection',
                icon: <Shield className="w-8 h-8 text-blue-600" />,
              },
              {
                name: 'Certified Vehicles',
                icon: <Award className="w-8 h-8 text-blue-600" />,
              },
              {
                name: 'Secure Transactions',
                icon: <Handshake className="w-8 h-8 text-blue-600" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 p-3 bg-blue-50 rounded-full">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Auctions */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Hot Auctions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-800"
            >
              <span className="block">Featured Vehicles</span>
              <span className="block text-blue-600">Ending Soon</span>
            </motion.h2>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-60 bg-gradient-to-br from-blue-50 to-slate-100">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {car.timeLeft}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg">
                        {car.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 text-center mb-6">
                      <div>
                        <p className="text-xs text-slate-500">Year</p>
                        <p className="font-medium">{car.year}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Mileage</p>
                        <p className="font-medium">{car.mileage}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Location</p>
                        <p className="font-medium flex items-center justify-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {car.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-slate-500">Current Bid</p>
                        <p className="text-xl font-bold text-blue-600">
                          {car.price}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Bids</p>
                        <p className="text-xl font-bold text-slate-800 flex items-center">
                          <Gavel className="w-4 h-4 mr-1 text-amber-500" />
                          {car.bids}
                        </p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{
                        y: -2,
                        boxShadow: '0 4px 15px -5px rgba(37, 99, 235, 0.3)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center"
                    >
                      Place Bid
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="inline-flex items-center text-blue-600 font-medium"
              >
                View All Auctions
                <ChevronRight className="w-5 h-5 ml-1" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-800/50 text-amber-300 mb-6"
              >
                <BadgeCheck className="w-4 h-4 mr-2" />
                Industry Leader
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold"
              >
                <span className="block">Trusted by Collectors</span>
                <span className="block text-amber-300">Worldwide</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-blue-200 max-w-lg"
              >
                AuctionRide Pro has revolutionized the collector car market with
                our transparent bidding process and verified vehicle listings.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-transparent border-2 border-white/20 text-white font-medium rounded-lg hover:border-white/40 transition-all flex items-center"
                >
                  Our Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="bg-blue-800/30 backdrop-blur-sm p-6 rounded-xl border border-blue-700/50"
                >
                  <div className="text-amber-300 mb-3">{stat.icon}</div>
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-blue-200">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Auctions */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-6"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Event Calendar
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-800"
            >
              <span className="block">Upcoming</span>
              <span className="block text-blue-600">Specialty Auctions</span>
            </motion.h2>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingAuctions.map((auction, index) => (
                <motion.div
                  key={auction.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <div className="relative h-60">
                    <img
                      src={auction.image}
                      alt={auction.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl">
                        {auction.title}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-blue-200 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {auction.date}
                        </p>
                        <p className="text-white bg-blue-600/80 px-3 py-1 rounded-full text-xs font-medium">
                          {auction.count} vehicles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
                    >
                      <Bookmark className="w-5 h-5 text-blue-600" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-600 mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-amber-400" />
              Client Testimonials
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-800"
            >
              <span className="block">What Our Clients</span>
              <span className="block text-blue-600">Say About Us</span>
            </motion.h2>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "I've purchased three classic cars through AuctionRide Pro and each experience has been flawless. The verification process gives me complete confidence in my bids.",
                  name: 'Michael R.',
                  role: 'Classic Car Collector',
                  rating: 5,
                },
                {
                  quote:
                    'As an auto dealer, I appreciate the quality of vehicles and transparency of the auctions. The platform has helped me source rare inventory for my clients.',
                  name: 'Sarah L.',
                  role: 'Luxury Auto Dealer',
                  rating: 5,
                },
                {
                  quote:
                    'Sold my rare Porsche for 15% above market value. The marketing and bidding process was handled professionally from start to finish.',
                  name: 'David K.',
                  role: 'Seller',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md border border-slate-100"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-slate-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] bg-[length:60px_60px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-800/50 text-amber-300 mb-6 border border-blue-700"
          >
            <Gem className="w-4 h-4 mr-2" />
            Exclusive Access
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            <span className="block">Ready to Join the</span>
            <span className="block text-amber-300">
              Ultimate Car Auction Experience?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-blue-200 max-w-2xl mx-auto"
          >
            Register today and gain access to the world's most exclusive vehicle
            auctions with no upfront fees.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{
                y: -3,
                boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white font-medium rounded-full shadow-lg hover:shadow-amber-500/40 transition-all"
            >
              Create Free Account
            </motion.button>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:border-white/50 transition-all flex items-center"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Gem className="w-8 h-8 text-amber-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  AuctionRide Pro
                </span>
              </div>
              <p className="text-slate-400 mb-6">
                The world's premier platform for collector car auctions,
                offering unparalleled access to rare and investment-grade
                vehicles.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: (
                      <Twitter className="w-5 h-5 text-slate-400 hover:text-white" />
                    ),
                    name: 'Twitter',
                  },
                  {
                    icon: (
                      <Facebook className="w-5 h-5 text-slate-400 hover:text-white" />
                    ),
                    name: 'Facebook',
                  },
                  {
                    icon: (
                      <Instagram className="w-5 h-5 text-slate-400 hover:text-white" />
                    ),
                    name: 'Instagram',
                  },
                  {
                    icon: (
                      <Linkedin className="w-5 h-5 text-slate-400 hover:text-white" />
                    ),
                    name: 'LinkedIn',
                  },
                  {
                    icon: (
                      <Youtube className="w-5 h-5 text-slate-400 hover:text-white" />
                    ),
                    name: 'YouTube',
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">
                Buy
              </h3>
              <ul className="space-y-3">
                {[
                  'All Auctions',
                  'Upcoming',
                  'Live Bidding',
                  'Past Results',
                  'Buyer FAQs',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 text-blue-500" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">
                Sell
              </h3>
              <ul className="space-y-3">
                {[
                  'Sell With Us',
                  'Consignment',
                  'Reserve Options',
                  'Seller FAQs',
                  'Fees',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 text-blue-500" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {['About', 'Careers', 'Press', 'Blog', 'Contact'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors flex items-center"
                      >
                        <ChevronRight className="w-4 h-4 mr-1 text-blue-500" />
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">
                  Newsletter
                </h3>
                <p className="text-slate-400 mb-4">
                  Subscribe to get exclusive auction previews and collector
                  insights.
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-3 w-full rounded-l-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-white font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="md:text-right">
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <p className="text-slate-400 flex md:justify-end items-center">
                    <PhoneCall className="w-4 h-4 mr-2 text-blue-500" />
                    +1 (555) 123-4567
                  </p>
                  <p className="text-slate-400 flex md:justify-end items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-500" />
                    info@auctionridepro.com
                  </p>
                  <p className="text-slate-400 flex md:justify-end items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    123 Collector's Way, Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} AuctionRide Pro, Inc. All
                rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-400 text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-400 text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-400 text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuctionRidePro;
