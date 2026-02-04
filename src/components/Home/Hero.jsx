import { useEffect, useState } from "react";

export default function Hero() {
  const bgs = [
    "/carMarket.webp",
    "/carInsurance.webp",
    "/carService.webp",
    "/carRecords.webp",
  ];

  const heading = ["Market", "Insurance", "Service", "Records"];

  const saying = [
    "Discover trusted vehicles, transparent pricing, and smart deals — all in one seamless marketplace.",
    "Protect what matters most with flexible, reliable insurance made for modern drivers.",
    "From maintenance to upgrades, get expert car services without the hassle.",
    "Track traffic records, history, and fines — your car records, simplified.",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev === bgs.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 500);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-auto min-h-[85vh] sm:min-h-[75vh] md:min-h-[70vh] lg:min-h-[65vh] xl:h-[65vh] bg-black relative z-10 flex flex-col lg:flex-row justify-center items-center gap-5 sm:gap-6 lg:gap-8 px-3 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 overflow-hidden">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgs[index]}
          alt="Car background"
          className={`
            w-full h-full object-cover
            transition-all duration-700 ease-in-out
            ${fade ? "opacity-50 scale-100" : "opacity-30 scale-105"}
          `}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Left Content Box */}
      <div
        className={`
          w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[45%] xl:w-[47%] 
          h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-[85%] xl:h-[90%]
          z-10 relative backdrop-blur-sm bg-black/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8
          flex justify-center items-center
          transition-all duration-700 ease-out
          ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          shadow-2xl border border-white/10
        `}
      >
        <div className="text-center space-y-3 sm:space-y-4">
          <span className="block">
            <span className="
              bg-gradient-to-r from-amber-200 to-amber-300 text-black 
              px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 
              rounded-xl sm:rounded-2xl 
              text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 
              font-extrabold inline-block
              shadow-lg
            ">
              {heading[index]}
            </span>
          </span>
          <span className="font-serif opacity-90 text-white/85 block text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg">
            All In One Place
          </span>
        </div>
      </div>

      {/* Right Content Box */}
      <div
        className={`
          w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[53%] xl:w-[52%] 
          h-auto min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:h-[90%] xl:h-[96%]
          bg-gradient-to-br from-blue-500/80 via-blue-500/75 to-indigo-500/80 
          backdrop-blur-md z-10 rounded-2xl sm:rounded-3xl
          flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8
          p-5 sm:p-6 md:p-7 lg:p-8
          transition-all duration-700 ease-out
          ${fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
          shadow-2xl border border-white/20
        `}
      >
        {/* Circle Image */}
        <div className={`
          flex-shrink-0
          transition-all duration-700 ease-out
          ${fade ? "scale-100 rotate-0" : "scale-90 -rotate-6"}
        `}>
          <img
            src={bgs[index]}
            className="
              w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52
              object-cover rounded-full 
              border-4 sm:border-[5px] border-white 
              shadow-xl
            "
            alt="Preview"
          />
        </div>

        {/* Saying Text */}
        <div className="flex-1 flex items-center justify-center">
          <p className="
            text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 
            font-semibold text-white leading-relaxed 
            text-center sm:text-left
            drop-shadow-md
            px-2 sm:px-0
          ">
            <span className="text-amber-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl dm-serif">"</span>
            <span className="dm-serif">{saying[index]}</span>
            <span className="text-amber-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">"</span>
          </p>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-2.5">
        {bgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setIndex(idx);
                setFade(true);
              }, 300);
            }}
            className={`
              transition-all duration-500 rounded-full
              ${idx === index 
                ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-gradient-to-r from-amber-300 to-amber-500 shadow-lg' 
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'
              }
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
