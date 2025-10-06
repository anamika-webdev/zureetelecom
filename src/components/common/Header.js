import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Our Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blockchain', path: '/services/blockchain' },
        { name: 'BI & Analytics', path: '/services/analytics' },
        { name: 'VR & AR Solutions', path: '/services/vr-ar' },
        { name: 'Application Development', path: '/services/development' },
        { name: 'Digital Services', path: '/services/digital' },
        { name: 'IT Consulting', path: '/services/consulting' },
      ]
    },
    { name: 'Communities', path: '/communities' },
    { name: 'Our Blogs', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Login', path: '/login' }
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 text-white transform rotate-45 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800">
              <div className="transform -rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5z"/>
                </svg>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 lg:flex">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      className={`flex items-center space-x-1 py-2 px-3 text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                        isActivePath(item.path) ? 'text-blue-600' : ''
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.path}
                          className="block px-6 py-3 text-gray-700 transition-all hover:text-blue-600 hover:bg-blue-50"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`py-2 px-3 text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                      isActivePath(item.path) ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="p-2 text-gray-600 transition-colors lg:hidden hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="py-4 border-t border-gray-100 lg:hidden">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 transition-all rounded-lg hover:text-blue-600 hover:bg-gray-50"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="mt-2 ml-4 space-y-1">
                          {item.dropdownItems.map((dropItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              to={dropItem.path}
                              className="block px-4 py-2 text-gray-600 transition-all rounded-lg hover:text-blue-600 hover:bg-gray-50"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 font-medium text-gray-700 transition-all rounded-lg hover:text-blue-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;