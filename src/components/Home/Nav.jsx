import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Traffic Records', path: '/records' },
    { name: 'Market Place', path: '/market' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Fuel Prices', path: '/fuel' }
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const index = navItems.findIndex(item => 
      item.path === currentPath || 
      (currentPath.startsWith(item.path) && item.path !== '/')
    );
    
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [location.pathname]);

  const handleClick = (item, index) => {
    setActiveIndex(index);
    navigate(item.path);
    setIsMobileMenuOpen(false);
  };

  const handleAuthClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-3 border-gray-400">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-2 sm:py-0">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0"
            onClick={() => handleClick(navItems[0], 0)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg sm:text-xl font-bold">GS</span>
            </div>
            <span className="text-lg sm:text-2xl font-bold text-gray-800 font-serif whitespace-nowrap">
              Gari Sheba
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-wrap justify-center">
            {navItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => handleClick(item, index)}
                className={`
                  px-2 xl:px-4 py-2 text-xs xl:text-sm rounded-md transition-colors dm-serif flex-shrink-0
                  ${activeIndex === index
                    ? 'bg-blue-400 text-white font-bold' 
                    : 'text-gray-700 hover:bg-gray-100 font-medium'
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Auth Section - Desktop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <button 
              className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors dm-serif"
              onClick={() => handleAuthClick('/signin')}
            >
              Sign In
            </button>
            <button 
              className="px-3 xl:px-5 py-2 bg-blue-600 text-white rounded-md text-xs xl:text-sm font-medium hover:bg-blue-700 transition-colors dm-serif"
              onClick={() => handleAuthClick('/login')}
            >
              Login
            </button>
            <div 
              className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors flex-shrink-0"
              onClick={() => handleAuthClick('/profile')}
            >
              <svg className="w-4 h-4 xl:w-5 xl:h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-gray-700 hover:bg-gray-100 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-3 px-2 sm:px-0">
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item, index) => (
                <button
                  key={item.path}
                  onClick={() => handleClick(item, index)}
                  className={`
                    px-3 py-2.5 sm:px-4 sm:py-3 text-sm font-medium rounded-md transition-colors
                    ${activeIndex === index
                      ? 'bg-blue-400 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex gap-2 sm:gap-3 pt-3">
                <button 
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 text-white rounded-md text-xs sm:text-sm font-medium hover:bg-blue-700"
                  onClick={() => handleAuthClick('/login')}
                >
                  Login
                </button>
                <button 
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 text-gray-700 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-50"
                  onClick={() => handleAuthClick('/signin')}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
