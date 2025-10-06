import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Mobile Services', path: '/services/mobile' },
      { name: 'Internet Plans', path: '/services/internet' },
      { name: 'Business Solutions', path: '/services/business' },
      { name: 'Device Management', path: '/services/devices' },
      { name: 'Cloud Services', path: '/services/cloud' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Our Blog', path: '/blog' },
      { name: 'Press Releases', path: '/press' },
      { name: 'Investors', path: '/investors' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Help Center', path: '/help' },
      { name: 'Network Status', path: '/status' },
      { name: 'Service Areas', path: '/coverage' },
      { name: 'Billing Support', path: '/billing' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Accessibility', path: '/accessibility' },
      { name: 'Legal Notices', path: '/legal' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="text-white bg-gray-900">
      {/* Main Footer Content */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 space-x-3">
              <div className="p-3 text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <span className="text-xl font-bold">Z</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Zuree Telecom</h2>
                <p className="text-sm text-blue-400">Connected Solutions</p>
              </div>
            </div>
            
            <p className="max-w-sm mb-6 text-gray-300">
              Leading telecommunications provider delivering innovative solutions that connect people, 
              businesses, and communities worldwide.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@zureetelecom.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>123 Telecom Ave, New York, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 transition-colors bg-gray-800 rounded-lg hover:bg-blue-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-bold">Stay Connected</h3>
              <p className="text-gray-300">
                Get the latest updates on our services, promotions, and industry insights.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-gray-400 md:mb-0">
              © {currentYear} Zuree Telecom. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 transition-colors hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 transition-colors hover:text-blue-400">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 transition-colors hover:text-blue-400">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 transition-colors hover:text-blue-400">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;