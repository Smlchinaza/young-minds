import { useState } from "react";
import { Menu, X, User, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-white font-bold text-xl">Logo</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
            >
              Products
            </a>
            <a
              href="/services"
              className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          {/* User and Cart Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-blue-200">
              <User size={20} />
            </button>
            {/* <button className="text-white hover:text-blue-200 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-blue-800 rounded-md"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-blue-800 rounded-md"
            >
              Products
            </a>
            <a
              href="/services"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-blue-800 rounded-md"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-blue-800 rounded-md"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white block px-3 py-2 text-base font-medium hover:bg-blue-800 rounded-md"
            >
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-800">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <User size={24} className="text-white" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">
                  User Account
                </div>
              </div>
              {/* <div className="ml-auto">
                <button className="flex-shrink-0 text-white relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
