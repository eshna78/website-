import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Namal Alumni Network</h3>
            <p className="mb-4">Connecting graduates, building futures, and strengthening the Namal community worldwide.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-yellow-400 transition-colors">Events & Reunions</Link></li>
              <li><Link to="/success-stories" className="hover:text-yellow-400 transition-colors">Success Stories</Link></li>
              <li><Link to="/membership" className="hover:text-yellow-400 transition-colors">Membership</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Job Portal</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Mentorship Program</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Discussion Forums</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Photo Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-yellow-400" />
                <span>Namal University, Mianwali, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-yellow-400" />
                <span>+92 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-yellow-400" />
                <span>alumni@namal.edu.pk</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Namal Alumni Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;