import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Track() {
  const [plateNumber, setPlateNumber] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const navigator = useNavigate();

  function Navigate() {
    navigator('/records');
  }

  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Criminal Records",
      description: "Check if the vehicle was involved in any criminal activities or reported stolen",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: 2,
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Traffic Fines & Penalties",
      description: "View all unpaid fines, challan history, and traffic violations",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 3,
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Legal Cases",
      description: "Discover any ongoing or past legal cases associated with the vehicle",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      id: 4,
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Accident History",
      description: "Complete accident records and insurance claim history",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <div className="w-full min-h-screen sm:min-h-[90vh] md:min-h-[90vh] flex items-center px-3 sm:px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start w-full">

        {/* Left Side */}
        <div
          className="rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl min-h-[300px] sm:min-h-[400px] flex items-center justify-center relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src="/maginify.webp"
            alt="Background"
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300 ${
              isHovering ? "blur-xs scale-105" : ""
            }`}
          />

          {isHovering && (
            <button
              onClick={Navigate}
              className="absolute z-20 bg-blue-400 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition text-sm sm:text-base"
            >
              <span className='dm-serif'>Check</span>
            </button>
          )}

          <h1
            className={`relative z-10 font-bold font-serif transition-opacity duration-300 text-center px-2 leading-tight ${
              isHovering ? "opacity-10" : "opacity-100"
            } text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Trac</span>
            <span className="block">k Traffic Records</span>
          </h1>
        </div>

        {/* Right Side */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex items-start gap-3 sm:gap-4 ${feature.bgColor} rounded-lg sm:rounded-xl p-3 sm:p-4 border ${feature.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div
                className={`bg-gradient-to-br ${feature.color} rounded-full p-2 sm:p-3 flex-shrink-0 transition-all duration-300 ${
                  activeFeature === feature.id ? 'scale-110' : ''
                }`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon.props.children}
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-0.5 sm:mb-1 font-serif">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dm-serif">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

