import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/service-areas', label: 'Service Areas' },
    { path: '/why-trust-us', label: 'Why Homeowners Trust JHS' },
    { path: '/about', label: 'About' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact / Free Inspection' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_f3a16e62-6e6f-4451-8594-0c0b92e67168/artifacts/ca08dsl3_600091FD-051D-4467-89A9-38D40B4931AB.png" 
              alt="JHS Crawlspace Specialist" 
              className="h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-tennessee-orange-600'
                    : 'text-gray-700 hover:text-tennessee-orange-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="bg-tennessee-orange-600 hover:bg-tennessee-orange-700 text-white transition-all duration-300"
              onClick={() => window.location.href = 'tel:8648049384'}
            >
              <Phone className="mr-2 h-4 w-4" />
              (864) 804-9384
            </Button>
          </div>

          {/* Mobile Call Now Button and Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              size="sm"
              className="bg-tennessee-orange-600 hover:bg-tennessee-orange-700 text-white transition-all duration-300"
              onClick={() => window.location.href = 'tel:8648049384'}
            >
              <Phone className="mr-1 h-4 w-4" />
              Call Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-tennessee-orange-600'
                      : 'text-gray-700 hover:text-tennessee-orange-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;