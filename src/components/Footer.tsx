
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-medical-800">PrecisionMed</h3>
            <p className="text-gray-600 mb-4">
              Delivering high-quality surgical instruments to medical professionals worldwide.
            </p>
            <div className="flex items-center mb-2">
              <Phone size={18} className="text-medical-600 mr-2" />
              <span className="text-gray-600">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="text-medical-600 mr-2" />
              <span className="text-gray-600">info@precisionmed.com</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="text-medical-600 mr-2" />
              <span className="text-gray-600">123 Medical Drive, City, Country</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-medical-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medical-600">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-medical-600">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-600">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-medical-600">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-medical-800">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/scissors" className="text-gray-600 hover:text-medical-600">Scissors</Link>
              </li>
              <li>
                <Link to="/products/needle-holders" className="text-gray-600 hover:text-medical-600">Needle Holders</Link>
              </li>
              <li>
                <Link to="/products/forceps" className="text-gray-600 hover:text-medical-600">Forceps</Link>
              </li>
              <li>
                <Link to="/products/retractors" className="text-gray-600 hover:text-medical-600">Retractors</Link>
              </li>
              <li>
                <Link to="/products/bone-instruments" className="text-gray-600 hover:text-medical-600">Bone Instruments</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} PrecisionMed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
