import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Offer() {
  const offers = useSelector((state) => state.offers);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("show");

  const currentOffer = offers?.[index];

  // Auto-rotate offers
  useEffect(() => {
    if (!offers || offers.length === 0) return;

    const interval = setInterval(() => {
      // start hide animation
      setPhase("hide");

      // after animation duration, switch offer
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % offers.length);
        setPhase("show");
      }, 500); // match animation duration
    }, 3000); // 6s per offer

    return () => clearInterval(interval);
  }, [offers]);

  if (!offers || offers.length === 0) return null;

  return (
    <div className="w-full min-h-screen sm:min-h-[100vh] md:min-h-[100vh] flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-3 sm:px-4 md:px-0">

      {/* Heading */}
      <div className="w-full h-auto sm:h-[10%] flex justify-center items-center py-4 sm:py-6 md:py-0">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-700 text-center">
          <span className="bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent font-extrabold">
            Hot |
          </span>
          | Deals
        </span>
      </div>

      {/* Offer Section */}
      <div
        className="w-full h-auto sm:h-[85%] flex flex-col md:flex-row justify-center items-center bg-fi gap-4 sm:gap-6 md:gap-10 relative bg-cover bg-center bg-no-repeat px-3 sm:px-4 md:px-0 py-4 sm:py-6 md:py-0"
        style={{ backgroundImage: `url(${currentOffer.img})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm z-0" />

        {/* Car Image */}
        <div
          className={`w-full md:w-[40%] h-[250px] sm:h-[350px] md:h-[70%] rounded-2xl sm:rounded-3xl md:rounded-4xl z-10 overflow-hidden
            transition-all duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
            ${phase === "show" ? "scale-100 blur-0" : "scale-110 blur-sm"}
          `}
        >
          <img
            src={currentOffer.img}
            className="w-full h-full object-cover shadow-2xl rounded-2xl sm:rounded-3xl md:rounded-4xl"
            alt="Offer Car"
          />
        </div>

        {/* Offer Details */}
        <div
          className={`w-full md:w-[40%] h-auto md:h-[70%] rounded-2xl sm:rounded-3xl md:rounded-4xl z-10 border-b-2 md:border-b-0 md:border-l-2 border-blue-400
            flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-0 gap-3 sm:gap-4 md:gap-6
            transition-all duration-500 delay-100
            ${phase === "show" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
          `}
        >
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold font-serif text-blue-300
              transition-all duration-500 delay-200
              ${phase === "show" ? "opacity-100" : "opacity-0"}
            `}
          >
            {currentOffer.dis}
          </h1>

          <h2
            className={`text-lg sm:text-xl md:text-2xl dm-serif text-blue-200
              transition-all duration-500 delay-300
              ${phase === "show" ? "opacity-100" : "opacity-0"}
            `}
          >
            {currentOffer.title}
          </h2>

          <div
            className={`flex items-center gap-2 sm:gap-3 md:gap-4
              transition-all duration-500 delay-400
              ${phase === "show" ? "opacity-100" : "opacity-0"}
            `}
          >
            <span className="text-base sm:text-lg md:text-xl line-through text-gray-400">{currentOffer.prev}</span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300">{currentOffer.now}</span>
          </div>

          <button
            className="mt-3 sm:mt-4 md:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full bg-blue-600 text-white dm-serif text-sm sm:text-base md:text-lg
              hover:bg-blue-500 transition shadow-lg"
          >
            Grab Deal
          </button>
        </div>
      </div>
    </div>
  );
}

