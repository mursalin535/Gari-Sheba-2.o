'use client'; // Add this for client-side interactivity

import { useEffect, useState, useRef } from 'react';

export default function WorldWide() {
  const showOffs = [
    { head: 'Countries', number: 119 },
    { head: 'Service Centers', number: 150 },
    { head: 'Global Connections', number: 100000 },
    { head: 'Vehicles Served', number: 1000000 },
    { head: 'Trusted Partners', number: 500 },
    { head: '24/7 Support Regions', number: 80 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayNumbers, setDisplayNumbers] = useState(showOffs.map(() => 0));
  const intervalRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  // Format numbers with commas and + sign where needed
  const formatNumber = (num, index) => {
    if (index === 1) return num.toLocaleString() + '+'; // Service Centers: 150+
    if (index === 2) return num.toLocaleString() + '+'; // Global Connections: 100K+
    if (index === 3) return num.toLocaleString() + '+'; // Vehicles Served: 1M+
    if (index === 5) return num.toLocaleString() + '+'; // 24/7 Support Regions: 80+
    return num.toLocaleString();
  };

  // Animate a single number
  const animateNumber = (targetValue, index, duration = 1500) => {
    const steps = 60; // Number of animation steps
    const increment = targetValue / steps;
    let current = 0;
    let step = 0;

    const animate = () => {
      if (step >= steps) {
        current = targetValue;
        setDisplayNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[index] = Math.round(current);
          return newNumbers;
        });
        return;
      }

      current += increment;
      step++;
      
      setDisplayNumbers(prev => {
        const newNumbers = [...prev];
        newNumbers[index] = Math.round(current);
        return newNumbers;
      });

      requestAnimationFrame(animate);
    };

    animate();
  };

  // Cycle through items one by one
  useEffect(() => {
    const startAnimationCycle = () => {
      // Reset all numbers to 0
      setDisplayNumbers(showOffs.map(() => 0));
      setCurrentIndex(0);

      const animateNext = (index) => {
        if (index >= showOffs.length) {
          // Restart cycle after a pause
          animationTimeoutRef.current = setTimeout(() => {
            startAnimationCycle();
          }, 3000);
          return;
        }

        setCurrentIndex(index);
        
        // Animate the current number
        const targetValue = showOffs[index].number;
        animateNumber(targetValue, index);

        // Move to next item after delay
        intervalRef.current = setTimeout(() => {
          animateNext(index + 1);
        }, 2000); // 2 seconds per item
      };

      animateNext(0);
    };

    startAnimationCycle();

    // Cleanup
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full min-h-[60vh] flex flex-col lg:flex-row items-center relative z-10 px-4 sm:px-8 lg:px-16 py-8 lg:py-0">
      {/* LEFT : Image */}
      <div className="w-full lg:w-[60%] h-[40vh] sm:h-[50vh] lg:h-full relative flex items-center mb-8 lg:mb-0">
        <img
          src="/global reach.webp"
          alt="Global reach visualization"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl" />
        {/* fade for text visibility on mobile/tablet */}
        <div className="absolute left-0 h-full w-full lg:w-[30%] z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent rounded-3xl" />
        </div>
      </div>

      {/* RIGHT : Stats */}
      <div className="w-full lg:w-[40%] h-full flex flex-col justify-center gap-6 sm:gap-8 lg:gap-10 lg:pl-16">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 leading-tight font-serif">
            Global Presence,
            <br />
            <span className="text-blue-400 font-serif">Local Excellence</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-md dm-serif">
            Delivering trusted automotive services across continents with a
            unified digital experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {showOffs.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col transition-all duration-1000 ${
                currentIndex === idx 
                  ? 'scale-105 transform-gpu' 
                  : 'opacity-80'
              }`}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-500 transition-all duration-300">
                {formatNumber(displayNumbers[idx], idx)}
              </span>
              <span 
                className={`text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 dm-serif ${
                  currentIndex === idx 
                    ? 'text-gray-900 font-semibold ' 
                    : 'text-gray-500'
                }`}
              >
                {item.head}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
