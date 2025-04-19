import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Financial Goals', path: '/goals' },
    { name: 'Learn & Grow', path: '/learn' },
    { name: 'Community', path: '/community' },
    { name: 'Resources', path: '/resources' },
    { name: 'Assessments', path: '/assessments' },
    { name: 'Contact', path: '/contact' },
  ];

  // Show different navigation items for onboarding pages
  const isOnboarding = ['/', '/auth', '/assessment'].includes(location.pathname);
  const onboardingItems = [
    { name: 'Home', path: '/' },
    { name: 'Financial Goals', path: '/goals' },
    { name: 'Learn & Grow', path: '/learn' },
    { name: 'Community', path: '/community' },
    { name: 'Resources', path: '/resources' },
    { name: 'Assessments', path: '/assessments' },
    { name: 'Contact', path: '/Contact' },
  ];

  const currentNavItems = isOnboarding ? onboardingItems : navItems;

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                MindSync
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {currentNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            {isOnboarding && (
              <Link
                to="/auth"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Get Started
              </Link>
            )}
            {!isOnboarding && (
              <Link to="/profile" className="text-white hover:text-blue-200">
                <User size={20} />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {currentNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white block px-3 py-2 text-base font-medium hover:bg-blue-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {isOnboarding && (
              <Link
                to="/auth"
                className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            )}
          </div>
          {!isOnboarding && (
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
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
