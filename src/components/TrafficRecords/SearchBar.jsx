import React, { useEffect, useRef } from "react";

export default function SearchBar() {
  const rulesContainerRef = useRef(null);
  
  // Auto-scroll effect
  useEffect(() => {
    const container = rulesContainerRef.current;
    if (!container) return;
    
    let scrollPosition = 0;
    let scrollDirection = 1; // 1 for down, -1 for up
    let animationId;
    
    const scrollRules = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      
      if (scrollPosition >= maxScroll) {
        scrollDirection = -1;
      } else if (scrollPosition <= 0) {
        scrollDirection = 1;
      }
      
      scrollPosition += scrollDirection * 0.5; // Adjust speed here
      container.scrollTop = scrollPosition;
      
      animationId = requestAnimationFrame(scrollRules);
    };
    
    // Start scrolling after a short delay
    const startTimeout = setTimeout(() => {
      animationId = requestAnimationFrame(scrollRules);
    }, 1000);
    
    // Pause on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };
    
    const handleMouseLeave = () => {
      if (!animationId) {
        animationId = requestAnimationFrame(scrollRules);
      }
    };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearTimeout(startTimeout);
      if (animationId) cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const trafficRules = [
    { id: 1, rule: "Speed limit in residential areas: 30 km/h", fine: "$500" },
    { id: 2, rule: "Mandatory seat belt for driver and front passenger", fine: "$300" },
    { id: 3, rule: "Zero tolerance for drunk driving (above 0.05% BAC)", fine: "$5,000 + License Suspension" },
    { id: 4, rule: "Use of mobile phone while driving prohibited", fine: "$400" },
    { id: 5, rule: "No parking within 15 meters of intersections", fine: "$600" },
    { id: 6, rule: "All vehicles must have valid fitness certificate", fine: "$2,000" },
    { id: 7, rule: "Mandatory third-party insurance for all vehicles", fine: "$1,500" },
    { id: 8, rule: "Helmet mandatory for motorcycle riders and pillion", fine: "$200" },
    { id: 9, rule: "Overtaking from wrong side prohibited", fine: "$800" },
    { id: 10, rule: "No honking in silent zones (hospitals, schools)", fine: "$300" },
    { id: 11, rule: "Vehicles must stop at pedestrian crossings", fine: "$500" },
    { id: 12, rule: "Pollution Under Control (PUC) certificate mandatory", fine: "$1,000" },
    { id: 13, rule: "No unauthorized modifications to vehicle structure", fine: "$3,000" },
    { id: 14, rule: "Lane discipline must be maintained on highways", fine: "$700" },
    { id: 15, rule: "Children under 4 must use child restraint systems", fine: "$400" },
    { id: 16, rule: "No carrying of excess passengers", fine: "$300 per extra passenger" },
    { id: 17, rule: "All lights must be functional during night driving", fine: "$350" },
    { id: 18, rule: "Proper disposal of vehicle waste materials", fine: "$1,200" },
    { id: 19, rule: "No unauthorized use of sirens or beacon lights", fine: "$2,500" },
    { id: 20, rule: "Keep left unless overtaking on multi-lane roads", fine: "$600" },
  ];

  return (
    <div className="w-full min-h-screen sm:min-h-[80vh] md:min-h-[80vh] flex flex-col lg:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 bg-white/50 px-3 sm:px-4 md:px-0 py-4 sm:py-6 md:py-0">

      <div></div>
      {/* Left Section - Search */}
      <div className="h-auto lg:h-[90%] w-full lg:w-[42%] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <input
          placeholder="Enter License Number"
          className="w-full sm:w-[70%] lg:w-[60%] h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl dm-serif text-gray-600/95 border-4 border-white/40 outline-2 outline-gray-600 rounded-lg sm:rounded-xl md:rounded-2xl px-4 sm:px-5 md:px-6 focus:border-blue-400 focus:outline-none transition-colors duration-300"
        />

        <button
          className="
            bg-white w-24 sm:w-28 md:w-32 h-10 sm:h-12 md:h-14 rounded-2xl sm:rounded-3xl md:rounded-4xl border border-black/60
            dm-serif text-blue-600 text-sm sm:text-base md:text-xl py-2 sm:py-2.5 md:py-3
            transition-all duration-300 ease-out
            hover:bg-blue-50 hover:text-blue-700 hover:border-blue-400
            hover:shadow-lg hover:-translate-y-0.5
            active:translate-y-0 active:scale-95
          "
        >
          Search
        </button>

        <div className="w-full sm:w-[80%] lg:w-[80%] h-40 sm:h-48 md:h-64 lg:h-[50%] bg-blue-50 rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 border-blue-100 flex justify-center items-center px-4">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-gray-800 opacity-75 text-center">
            🚫 NO Result Yet
          </span>
        </div>
      </div>

      {/* Right Section - Rules */}
      <div className="w-full lg:w-[57%] h-auto lg:h-[85%] border-t-2 lg:border-t-0 lg:border-l-2 border-gray-400 rounded-t-2xl lg:rounded-t-none lg:rounded-l-4xl bg-gray-200 flex flex-col justify-center items-center gap-1 px-3 sm:px-4 md:px-0 py-4 sm:py-6 md:py-0">
        <div className="w-full h-auto lg:h-[15%] rounded-xl sm:rounded-2xl md:rounded-3xl flex justify-center items-center py-3 sm:py-4 md:py-0">
          <span className="text-lg sm:text-2xl md:text-3xl font-bold font-serif bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent text-center px-2">
            New Traffic Rules <span className="dm-serif text-blue-900 text-2xl sm:text-3xl md:text-4xl block sm:inline">(2024-2025)</span>
          </span>
        </div>

        {/* Rules Container */}
        <div className="w-full h-auto lg:h-[80%] relative overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 md:h-12 bg-gradient-to-b from-gray-200 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 md:h-12 bg-gradient-to-t from-gray-200 to-transparent z-10 pointer-events-none" />
          
          {/* Rules List with Auto-scroll */}
          <div
            ref={rulesContainerRef}
            className="w-full h-full overflow-y-auto scrollbar-hide py-3 sm:py-4 md:py-4 px-3 sm:px-5 md:px-8"
            style={{ scrollBehavior: 'smooth', maxHeight: '400px' }}
          >
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {trafficRules.map((rule) => (
                <div
                  key={rule.id}
                  className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold font-serif text-gray-800 mb-1">
                        Rule #{rule.id.toString().padStart(2, '0')}
                      </h3>
                      <p className="text-gray-700 dm-serif text-xs sm:text-sm md:text-lg leading-relaxed">
                        {rule.rule}
                      </p>
                    </div>
                    <div className="ml-0 sm:ml-4 flex-shrink-0 w-full sm:w-auto">
                      <span className="bg-red-100 text-red-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-serif font-bold text-xs sm:text-sm md:text-lg border border-red-200 block sm:inline-block text-center sm:text-left">
                        Fine: {rule.fine}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More Rules Link */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 z-20">
            <a
              href="https://www.brta.gov.bd/traffic-rules"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-blue-400 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-bold text-xs sm:text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group dm-serif"
            >
              More Rules
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
