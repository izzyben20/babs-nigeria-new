import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Gavel,
  Clock,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  RotateCw,
  ZoomIn,
  Star,
  ChevronRight,
  Heart,
  Share2,
  Bookmark,
  ArrowRight,
  Gem,
} from 'lucide-react';

const AuctionPage = () => {
  const [currentBid, setCurrentBid] = useState(85000);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30,
  });
  const [bidAmount, setBidAmount] = useState(86000);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      } else if (timeLeft.minutes > 0) {
        setTimeLeft((prev) => ({
          ...prev,
          minutes: prev.minutes - 1,
          seconds: 59,
        }));
      } else if (timeLeft.hours > 0) {
        setTimeLeft((prev) => ({
          ...prev,
          hours: prev.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Simulate bid updates
  useEffect(() => {
    const bidInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCurrentBid((prev) => prev + 500);
      }
    }, 10000);
    return () => clearInterval(bidInterval);
  }, []);

  const carImages = [
    '/cars/item-1.jpg',
    '/cars/item-2.jpg',
    '/cars/item-3.jpg',
    '/cars/item-1.jpg',
    '/cars/item-2.jpg',
  ];

  const carSpecs = [
    { label: 'Year', value: '2023' },
    { label: 'Mileage', value: '1,200 mi' },
    { label: 'Engine', value: '3.8L Twin-Turbo Flat-6' },
    { label: 'Horsepower', value: '640 HP' },
    { label: 'Transmission', value: '8-Speed PDK' },
    { label: 'Color', value: 'GT Silver Metallic' },
    { label: 'VIN', value: 'WP0AB2A96PS195678' },
  ];

  const handlePlaceBid = () => {
    if (bidAmount > currentBid) {
      setCurrentBid(bidAmount);
      setBidAmount(bidAmount + 1000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* --- Navigation Bar --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <Gem className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-slate-800">
                  AuctionRide Pro
                </span>
              </motion.div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-slate-600 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600">
                Auctions
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600">
                Sell
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600">
                About
              </a>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Auction Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-slate-500 mb-6">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-blue-600">
            Auctions
          </a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-800">Porsche 911 Turbo S</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* --- Car Gallery --- */}
          <div className="relative">
            {/* Main Car Image */}
            <motion.div
              className="relative bg-slate-100 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={carImages[activeImage]}
                alt="Porsche 911 Turbo S"
                className={`w-full h-96 object-cover ${
                  isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  className="p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite
                        ? 'fill-red-500 text-red-500'
                        : 'text-slate-700'
                    }`}
                  />
                </button>
                <button className="p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white">
                  <Share2 className="w-5 h-5 text-slate-700" />
                </button>
                <button className="p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white">
                  <Bookmark className="w-5 h-5 text-slate-700" />
                </button>
              </div>
              {isZoomed && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                  <img
                    src={carImages[activeImage]}
                    alt="Zoomed"
                    className="max-w-full max-h-full object-contain"
                    onClick={() => setIsZoomed(false)}
                  />
                </div>
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
              {carImages.map((img, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                    activeImage === index
                      ? 'border-blue-500'
                      : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>

            {/* 360° & Zoom Controls */}
            <div className="flex space-x-3 mt-4">
              <button className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700">
                <RotateCw className="w-4 h-4 mr-2" />
                360° View
              </button>
              <button
                className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <ZoomIn className="w-4 h-4 mr-2" />
                {isZoomed ? 'Exit Zoom' : 'Zoom In'}
              </button>
            </div>
          </div>

          {/* --- Auction Details --- */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              {/* Title & Badges */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800">
                    2023 Porsche 911 Turbo S
                  </h1>
                  <div className="flex items-center mt-2 text-slate-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Miami, FL</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Certified
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    No Accidents
                  </span>
                </div>
              </div>

              {/* Current Bid & Timer */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-600">Current Bid</p>
                    <p className="text-3xl font-bold text-blue-600">
                      ${currentBid.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Auction Ends In</p>
                    <p className="text-xl font-bold text-slate-800">
                      {String(timeLeft.hours).padStart(2, '0')}:
                      {String(timeLeft.minutes).padStart(2, '0')}:
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bid Form */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Place Your Bid
                </label>
                <div className="flex">
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(Number(e.target.value))}
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
                    min={currentBid + 1000}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePlaceBid}
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition"
                  >
                    Bid Now
                  </motion.button>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Next minimum bid:{' '}
                  <span className="font-medium">
                    ${(currentBid + 1000).toLocaleString()}
                  </span>
                </p>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center px-3 py-2 bg-slate-50 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm">Escrow Protection</span>
                </div>
                <div className="flex items-center px-3 py-2 bg-slate-50 rounded-lg">
                  <Gavel className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm">Verified Auction</span>
                </div>
                <div className="flex items-center px-3 py-2 bg-slate-50 rounded-lg">
                  <Star className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm">5.0 (24 Reviews)</span>
                </div>
              </div>
            </div>

            {/* --- Seller Info --- */}
            <div className="mt-6 bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <h3 className="text-lg font-medium text-slate-800 mb-4">
                Seller Information
              </h3>
              <div className="flex items-center">
                <img
                  src="/seller-avatar.jpg"
                  alt="Seller"
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div className="ml-4">
                  <p className="font-medium">Prestige Auto Gallery</p>
                  <p className="text-sm text-slate-600">
                    Verified Dealer • 98% Positive Feedback
                  </p>
                </div>
              </div>
              <button className="mt-4 w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center">
                Contact Seller <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* --- Car Details Tabs --- */}
        <div className="mt-12">
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8">
              {['Overview', 'Specifications', 'History', 'Bidding', 'FAQ'].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`py-4 px-1 font-medium text-sm border-b-2 ${
                      tab === 'Overview'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </nav>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Description */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Vehicle Description
              </h3>
              <p className="text-slate-600 mb-6">
                This stunning 2023 Porsche 911 Turbo S is a rare find with only
                1,200 miles. Finished in GT Silver Metallic over a Black Leather
                interior, this Turbo S comes fully loaded with every available
                factory option including the Lightweight Package, Carbon Ceramic
                Brakes, and Burmester Sound System. The car has never been
                modified and has a clean CARFAX with no accidents.
              </p>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  '3.8L Twin-Turbo Flat-6 (640 HP)',
                  '8-Speed PDK Transmission',
                  'Sport Chrono Package',
                  'Carbon Ceramic Brakes',
                  'Burmester Sound System',
                  'Lightweight Package',
                  'Rear-Axle Steering',
                  'Clean CARFAX Report',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Specs */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Technical Specifications
              </h3>
              <div className="bg-slate-50 rounded-lg p-4">
                <table className="w-full">
                  <tbody>
                    {carSpecs.map((spec, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-200 last:border-b-0"
                      >
                        <td className="py-3 text-slate-600">{spec.label}</td>
                        <td className="py-3 text-slate-800 font-medium text-right">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="mt-4 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                Download Full Spec Sheet{' '}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">AuctionRide Pro</h3>
              <p className="text-slate-400">
                The premier platform for luxury and collector car auctions.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Buy</h4>
              <ul className="space-y-2 text-slate-400">
                {[
                  'All Auctions',
                  'Live Bidding',
                  'Past Results',
                  'Buyer FAQs',
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Sell</h4>
              <ul className="space-y-2 text-slate-400">
                {[
                  'Sell With Us',
                  'Consignment',
                  'Reserve Options',
                  'Seller FAQs',
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                {['About', 'Careers', 'Contact', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} AuctionRide Pro. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuctionPage;
