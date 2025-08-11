import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Filter,
  Search,
  Clock,
  MapPin,
  Gavel,
  ChevronDown,
  ChevronUp,
  Star,
  Calendar,
  ArrowRight,
  Grid,
  List,
  Gem,
} from 'lucide-react';

const AuctionListings = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const auctions = [
    {
      id: 1,
      title: '2023 Porsche 911 Turbo S',
      price: '$145,000',
      bids: 24,
      timeLeft: '2h 45m',
      image: '/cars/item-1.jpg',
      year: '2023',
      mileage: '1,200 mi',
      location: 'Miami, FL',
      featured: true,
      status: 'live',
    },
    {
      id: 2,
      title: '1967 Ford Mustang GT Fastback',
      price: '$89,500',
      bids: 42,
      timeLeft: '1h 15m',
      image: '/cars/item-2.jpg',
      year: '1967',
      mileage: '32,000 mi',
      location: 'Dallas, TX',
      featured: true,
      status: 'live',
    },
    {
      id: 3,
      title: '2022 Tesla Model S Plaid',
      price: '$98,750',
      bids: 18,
      timeLeft: '4h 30m',
      image: '/cars/item-3.jpg',
      year: '2022',
      mileage: '5,800 mi',
      location: 'San Francisco, CA',
      featured: false,
      status: 'live',
    },
    {
      id: 4,
      title: '2018 Ferrari 488 GTB',
      price: '$275,000',
      bids: 9,
      timeLeft: '6h 10m',
      image: '/cars/item-3.jpg',
      year: '2018',
      mileage: '8,200 mi',
      location: 'New York, NY',
      featured: true,
      status: 'live',
    },
    {
      id: 5,
      title: '1995 Toyota Supra MKIV',
      price: '$125,000',
      bids: 37,
      timeLeft: '3h 25m',
      image: '/cars/item-1.jpg',
      year: '1995',
      mileage: '45,000 mi',
      location: 'Los Angeles, CA',
      featured: false,
      status: 'upcoming',
    },
    {
      id: 6,
      title: '2020 Lamborghini Huracán EVO',
      price: '$245,000',
      bids: 12,
      timeLeft: '5h 50m',
      image: '/cars/item-2.jpg',
      year: '2020',
      mileage: '3,500 mi',
      location: 'Las Vegas, NV',
      featured: true,
      status: 'live',
    },
    {
      id: 7,
      title: '1970 Chevrolet Chevelle SS',
      price: '$110,000',
      bids: 29,
      timeLeft: '2h 05m',
      image: '/cars/item-3.jpg',
      year: '1970',
      mileage: '28,000 mi',
      location: 'Chicago, IL',
      featured: false,
      status: 'live',
    },
    {
      id: 8,
      title: '2021 Mercedes-Benz G63 AMG',
      price: '$185,000',
      bids: 15,
      timeLeft: '7h 20m',
      image: '/cars/item-1.jpg',
      year: '2021',
      mileage: '6,700 mi',
      location: 'Houston, TX',
      featured: false,
      status: 'upcoming',
    },
  ];

  const filteredAuctions = auctions.filter((auction) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'live') return auction.status === 'live';
    if (activeFilter === 'upcoming') return auction.status === 'upcoming';
    if (activeFilter === 'featured') return auction.featured;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
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
              <a href="#" className="text-blue-600 font-medium">
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

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-800/50 border border-blue-700 mb-6"
            >
              <Gavel className="w-5 h-5 mr-2" />
              <span>Premium Vehicle Marketplace</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Discover Extraordinary Vehicles
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto"
            >
              Bid on rare collectibles, modern supercars, and investment-grade
              automobiles from trusted sellers worldwide.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${
                  viewMode === 'list'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <span className="text-slate-600 ml-2">
                Showing {filteredAuctions.length} vehicles
              </span>
            </div>

            {/* Search and Filter */}
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search makes, models, keywords..."
                  className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center justify-between px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50"
              >
                <Filter className="w-5 h-5 mr-2 text-slate-600" />
                <span>Filters</span>
                {filtersOpen ? (
                  <ChevronUp className="w-5 h-5 ml-2 text-slate-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 ml-2 text-slate-600" />
                )}
              </button>
            </div>
          </div>

          {/* Expanded Filters */}
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-medium text-slate-800 mb-3">
                    Auction Status
                  </h4>
                  <div className="space-y-2">
                    {[
                      { id: 'all', label: 'All Auctions' },
                      { id: 'live', label: 'Live Bidding' },
                      { id: 'upcoming', label: 'Upcoming' },
                      { id: 'featured', label: 'Featured' },
                    ].map((filter) => (
                      <div key={filter.id} className="flex items-center">
                        <input
                          id={filter.id}
                          name="status-filter"
                          type="radio"
                          checked={activeFilter === filter.id}
                          onChange={() => setActiveFilter(filter.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <label
                          htmlFor={filter.id}
                          className="ml-3 text-sm text-slate-700"
                        >
                          {filter.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-3">
                    Price Range
                  </h4>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-slate-500">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-3">Year</h4>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      placeholder="From"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-slate-500">to</span>
                    <input
                      type="number"
                      placeholder="To"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-3">
                    Vehicle Type
                  </h4>
                  <div className="space-y-2">
                    {[
                      'Sports Cars',
                      'Classic Cars',
                      'Luxury',
                      'SUVs',
                      'Muscle Cars',
                    ].map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          id={type}
                          name="vehicle-type"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                        />
                        <label
                          htmlFor={type}
                          className="ml-3 text-sm text-slate-700"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50">
                  Reset
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Apply Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Auction Listings */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAuctions.map((auction) => (
              <motion.div
                key={auction.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-all"
              >
                <div className="relative">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-48 object-cover"
                  />
                  {auction.featured && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {auction.timeLeft}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-800">
                        {auction.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {auction.year} • {auction.mileage}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Current Bid</p>
                      <p className="font-bold text-blue-600">{auction.price}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {auction.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Gavel className="w-4 h-4 mr-1" />
                      {auction.bids} bids
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center justify-center">
                    View Auction <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAuctions.map((auction) => (
              <motion.div
                key={auction.id}
                whileHover={{ x: 5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src={auction.image}
                      alt={auction.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    {auction.featured && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          {auction.title}
                        </h3>
                        <p className="text-slate-600">
                          {auction.year} • {auction.mileage} •{' '}
                          {auction.location}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right">
                        <p className="text-sm text-slate-500">Current Bid</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {auction.price}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <div className="flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {auction.timeLeft} left
                      </div>
                      <div className="flex items-center px-3 py-1 bg-slate-100 rounded-full text-sm">
                        <Gavel className="w-4 h-4 mr-1" />
                        {auction.bids} bids
                      </div>
                      {auction.status === 'live' && (
                        <div className="flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                          Live Now
                        </div>
                      )}
                      {auction.status === 'upcoming' && (
                        <div className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          Starts Soon
                        </div>
                      )}
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex-1">
                        Place Bid
                      </button>
                      <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition flex-1">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded border border-slate-300 text-slate-600 hover:bg-slate-100">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded border border-slate-300 text-slate-600 hover:bg-slate-100">
              2
            </button>
            <button className="px-3 py-1 rounded border border-slate-300 text-slate-600 hover:bg-slate-100">
              3
            </button>
            <span className="px-2 text-slate-600">...</span>
            <button className="px-3 py-1 rounded border border-slate-300 text-slate-600 hover:bg-slate-100">
              8
            </button>
            <button className="px-3 py-1 rounded border border-slate-300 text-slate-600 hover:bg-slate-100">
              Next
            </button>
          </nav>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Sell Your Vehicle?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of sellers who trust AuctionRide Pro to get the best
            value for their vehicles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition">
              Start Selling
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
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

export default AuctionListings;
