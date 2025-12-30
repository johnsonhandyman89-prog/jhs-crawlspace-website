import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Request Quote' }
  ];

  const services = [
    'Vapor Barriers',
    'Dehumidifiers',
    'Mold Control',
    'Vent Sealing',
    'Full Encapsulation',
    'Sump Pumps',
    'Free Inspections'
  ];

  const serviceAreas = [
    'Spartanburg, SC',
    'Greenville, SC',
    'Greer, SC',
    'Boiling Springs, SC',
    'Moore, SC',
    'Duncan, SC'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_f3a16e62-6e6f-4451-8594-0c0b92e67168/artifacts/ca08dsl3_600091FD-051D-4467-89A9-38D40B4931AB.png"
                alt="JHS Crawlspace Specialist - Local crawlspace vapor barrier and dehumidifier services in Upstate South Carolina"
                className="h-32"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Honest crawlspace solutions for Upstate South Carolina homeowners.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4 text-tennessee-orange-600" />
                <a href="tel:8648049384" className="hover:text-tennessee-orange-600 transition-colors">
                  (864) 804-9384
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 text-tennessee-orange-600" />
                <a href="mailto:jhscrawlspace@gmail.com" className="hover:text-tennessee-orange-600 transition-colors">
                  jhscrawlspace@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tennessee-orange-500">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-tennessee-orange-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tennessee-orange-500">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-tennessee-orange-500 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-tennessee-orange-600" />
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-gray-400">
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 mt-2 text-sm">
              & surrounding Upstate SC areas
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} JHS Crawlspace Specialist. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Family-owned & operated | Licensed & Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;