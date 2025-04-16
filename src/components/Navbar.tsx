
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm z-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/products"
              className={({ isActive }) => 
                `px-4 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'text-apex-primary font-medium' 
                    : 'text-gray-600 hover:text-apex-primary hover:bg-gray-100'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/catalog"
              className={({ isActive }) => 
                `px-4 py-2 rounded-md transition-colors flex items-center ${
                  isActive 
                    ? 'text-apex-primary font-medium' 
                    : 'text-gray-600 hover:text-apex-primary hover:bg-gray-100'
                }`
              }
            >
              <FileText className="mr-1" size={16} />
              Catalog
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `px-4 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'text-apex-primary font-medium' 
                    : 'text-gray-600 hover:text-apex-primary hover:bg-gray-100'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `px-4 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'text-apex-primary font-medium' 
                    : 'text-gray-600 hover:text-apex-primary hover:bg-gray-100'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4">
          <div className="flex flex-col space-y-2">
            <NavLink 
              to="/products"
              className={({ isActive }) => 
                `px-4 py-3 rounded-md transition-colors ${
                  isActive 
                    ? 'text-apex-primary font-medium bg-apex-primary/10' 
                    : 'text-gray-600 hover:text-apex-primary hover:bg-gray-100'
                }`
              }
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink 
              to="/catalog"
              className={({ isActive }) => 
                `px-4 py-3 rounded-md transition-colors flex items-center ${
                  isActive 
                    ? 'text-apex-primary font-medium bg-apex-primary/10' 
                    : 'text-gray-600 hover:text-apex-primary hover:bg-gray-100'
                }`
              }
              onClick={closeMenu}
            >
              <FileText className="mr-2" size={16} />
              Catalog
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `px-4 py-3 rounded-md transition-colors ${
                  isActive 
                    ? 'text-apex-primary font-medium bg-apex-primary/10' 
                    : 'text-gray-600 hover:text-apex-primary hover:bg-gray-100'
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `px-4 py-3 rounded-md transition-colors ${
                  isActive 
                    ? 'text-apex-primary font-medium bg-apex-primary/10' 
                    : 'text-gray-600 hover:text-apex-primary hover:bg-gray-100'
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            
            {/* Contact Button (Mobile) */}
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
