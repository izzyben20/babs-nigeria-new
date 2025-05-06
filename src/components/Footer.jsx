import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter } from './svg/SocialIcons';

const Footer = () => {
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Event', link: '/events' },
    { label: 'Partners', link: '/partners' },
    { label: 'Attendees', link: '/attendees' },
    { label: 'Contact us', link: '/contact-us' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/" className="text-xl text-center font-bold text-primary">
            <img
              src="/images/babs_logo_white.png"
              alt="Logo"
              className="h-30"
            />
          </Link>

          <div>
            <h3 className="text-lg lg:text-center font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((option, index) => (
                <li key={index} className='text-left lg:text-center'>
                  <Link
                    to={option.link}
                    className="hover:text-blue-300 font-poppins font-light transition-colors"
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="">
            <h3 className="text-lg lg:text-right font-semibold mb-4">
              Stay updated with latest info
            </h3>
            <div className="flex lg:justify-end space-x-1.5 items-center">
              <Facebook />
              <LinkedIn />
              <Instagram />
              <Twitter />
            </div>
            <address className="not-italic space-y-2 mt-2">
              <p className="font-poppins font-light lg:text-right text-sm">
                Rue Marcel Marien 13, Schaerbeek, Belgium
              </p>
              <p className="font-poppins font-light lg:text-right text-sm">
                Federal Secretariat Phase 1, Room 5A 4.58, 4th Floor, Annex
                Block, Abuja-Nigeria.
              </p>
              <div className="pt-2">
                <p className="font-poppins font-light lg:text-right text-sm">
                  <a
                    href="tel:+32465654218"
                    className="hover:text-blue-300 text-sm text-right transition-colors"
                  >
                    +32465654218
                  </a>
                </p>
                <p className="font-poppins font-light lg:text-right text-sm">
                  <a
                    href="tel:+32465333569"
                    className="hover:text-blue-300 text-sm text-right transition-colors"
                  >
                    +32465333569
                  </a>
                </p>
                <p className="font-poppins font-light lg:text-right text-sm">
                  <a
                    href="tel:+2347070680721"
                    className="hover:text-blue-300 text-sm text-right transition-colors"
                  >
                    +2347070680721
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Mission Statement */}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400"></div>

        <div className="md:col-span-1 lg:col-span-1">
          <p className="mb-4 font-poppins font-light">
            This high-level mission—organized under the theme{' '}
            <span className="italic">
              "Bridging Continents: Strengthening Trade, Investment, and
              Knowledge Transfer for Economic Growth"
            </span>
            —aims to foster strategic commercial, governmental, and
            developmental partnerships between the European Union and the
            Federal Republic of Nigeria.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors font-medium"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Copyright / Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-poppins">
              © {new Date().getFullYear()} BABS-Nigeria T R A D E M I S S I O N.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
