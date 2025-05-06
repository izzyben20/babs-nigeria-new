import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Event', href: '/events' },
  { label: 'Partners', href: '/partners' },
  { label: 'Attendees', href: '/attendees' },
  { label: 'Contact us', href: '/contact-us' },
];

// Social Icons (same as in Contact component)
const SocialIcons = {
  Facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
    </svg>
  ),
  Twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
    </svg>
  ),
  LinkedIn: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
    </svg>
  ),
  Instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
    </svg>
  ),
};

// Contact Icons
const EmailIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      fill="white"
    />
    <path
      d="M22 6l-10 7L2 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
      fill="white"
    />
  </svg>
);

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const isActive = (href) => location.pathname === href;

  const getLinkClass = (href, isMobile = false) => {
    const activeBase = isMobile
      ? 'text-[#003DB4] font-bold'
      : 'text-[#003DB4] font-bold border-b-2 border-[#003DB4] pb-1';

    const inactiveBase = isMobile
      ? 'text-gray-700 hover:text-[#003DB4]'
      : 'text-gray-700 hover:text-[#003DB4]';

    return `text-sm transition-all duration-200 ${
      isActive(href) ? activeBase : inactiveBase
    }`;
  };

  return (
    <>
      {/* Main Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        {/* Top Contact Bar - Desktop */}
        <div className="hidden md:flex bg-[#003DB4] text-white px-6 py-2 justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {EmailIcon}
              <span className="text-sm">info@babsnigeriatrademission.com</span>
            </div>
            <div className="flex items-center space-x-2">
              {PhoneIcon}
              <span className="text-sm">
                +32465654218 +32465333569 +2347070680721
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            {Object.entries(SocialIcons).map(([name, Icon], index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-[#FFD700] transition-colors"
                aria-label={name}
              >
                <div className="w-5 h-5">{Icon}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src="/images/babs_logo.png" alt="Logo" className="h-16" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map(({ label, href }) => (
              <Link key={href} to={href} className={getLinkClass(href)}>
                {label}
              </Link>
            ))}
            <Link
              to="/registration"
              className="bg-[#003DB4] text-white rounded-md px-6 py-2 text-sm font-semibold hover:bg-[#002a80] transition-colors"
            >
              Register
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-6">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 ${getLinkClass(href, true)}`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/registration"
                  className="block w-full bg-[#003DB4] text-white px-4 py-3 rounded-md text-center font-semibold hover:bg-[#002a80] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  {EmailIcon}
                  <span className="text-sm text-gray-700">
                    info@babsnigeriatrademission.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  {PhoneIcon}
                  <span className="text-sm text-gray-700">+32465654218</span>
                </div>
                <div className="flex space-x-4 pt-2">
                  {Object.entries(SocialIcons).map(([name, Icon], index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-[#003DB4] hover:text-[#002a80] transition-colors"
                      aria-label={name}
                    >
                      <div className="w-5 h-5">{Icon}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
