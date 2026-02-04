import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Traffic Records', path: '/records' },
    { name: 'Market Place', path: '/market' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Fuel Prices', path: '/fuel' }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle responsive active navigation
  useEffect(() => {
    const currentPath = location.pathname;
    const index = navItems.findIndex(item => 
      item.path === currentPath || 
      (currentPath.startsWith(item.path) && item.path !== '/')
    );
    
    if (index !== -1) {
      setActiveIndex(index);
    }
    
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
          : 'bg-white shadow-md border-b border-gray-200'
      }`}
      ref={mobileMenuRef}
    >
      <div className="w-full max-w-[1920px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2 xs:gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => handleClick(navItems[0], 0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClick(navItems[0], 0)}
          >
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300 shadow-md">
              <span className="text-white text-base xs:text-lg sm:text-xl font-bold tracking-tight">GS</span>
            </div>
            <span className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-serif whitespace-nowrap tracking-tight">
              Gari Sheba
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 flex-1 justify-center max-w-4xl">
            {navItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => handleClick(item, index)}
                className={`
                  px-3 xl:px-4 2xl:px-5 py-2 text-sm xl:text-base 2xl:text-lg rounded-lg transition-all duration-300 dm-serif flex-shrink-0 relative
                  ${activeIndex === index
                    ? 'text-blue-700 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50'
                  }
                `}
              >
                {item.name}
                {activeIndex === index && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Auth Section - Desktop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-4 flex-shrink-0">
            <button 
              className="px-3 xl:px-4 2xl:px-5 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 dm-serif hover:bg-gray-50 rounded-lg"
              onClick={() => handleAuthClick('/signin')}
            >
              Sign In
            </button>
            <button 
              className="px-4 xl:px-5 2xl:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm xl:text-base font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 dm-serif shadow-md hover:shadow-lg"
              onClick={() => handleAuthClick('/login')}
            >
              Login
            </button>
            <div 
              className="w-9 h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center cursor-pointer hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-inner flex-shrink-0 border border-gray-300"
              onClick={() => handleAuthClick('/profile')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleAuthClick('/profile')}
            >
              <svg className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            lg:hidden absolute left-0 right-0 bg-white border-t border-gray-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden
            ${isMobileMenuOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
            }
          `}
        >
          <div className="py-3 px-3 sm:px-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => handleClick(item, index)}
                className={`
                  w-full text-left px-4 py-3 sm:py-3.5 text-base sm:text-lg font-medium rounded-lg transition-all duration-300 flex items-center
                  ${activeIndex === index
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:border-l-4 hover:border-blue-200'
                  }
                `}
              >
                <span className="flex-1">{item.name}</span>
                {activeIndex === index && (
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  className="flex-1 px-4 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-base sm:text-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => handleAuthClick('/login')}
                >
                  Login
                </button>
                <button 
                  className="flex-1 px-4 py-3 sm:py-3.5 border-2 border-gray-300 text-gray-700 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                  onClick={() => handleAuthClick('/signin')}
                >
                  Sign In
                </button>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <button 
                  className="w-full px-4 py-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                  onClick={() => handleAuthClick('/profile')}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0 border border-gray-300">
                    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg font-medium">Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;