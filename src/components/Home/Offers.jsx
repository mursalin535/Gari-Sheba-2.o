import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Offers() {
  const offerCars = useSelector((state) => state.offers);
  const [index, setIndex] = useState(0);

  const navigator=useNavigate();

  function Navigate(){
    navigator('/market');
  }

  const car = offerCars?.[index];

  // Auto slide every 4 seconds
  useEffect(() => {
    if (!offerCars?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offerCars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [offerCars]);

  if (!car) return null;

  return (
    <div className="w-full min-h-screen sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[70vh] relative flex flex-col">
      {/* Header */}
      <div className="flex gap-1 sm:gap-2 md:gap-3 bg-amber-50 w-[50%] sm:w-[35%] md:w-[28%] lg:w-[22%] rounded-2xl sm:rounded-3xl h-auto md:h-[15%] items-center px-3 sm:px-4 py-2 sm:py-0">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-light font-serif text-black">Best</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light font-serif text-blue-400">
          Deals
        </h1>
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 flex flex-col md:flex-row justify-center items-center mt-3 sm:mt-5 gap-4 sm:gap-6 md:gap-10 px-3 sm:px-4 md:px-0">
        {/* Image Section */}
        <div className="w-full md:w-[40%] h-[250px] sm:h-[350px] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-gray-300 relative flex justify-center items-center">
          {/* Platform */}
          <div
            className="
              absolute bottom-1 sm:bottom-3 left-1/2
              w-[75%] h-[25%] sm:h-[30%]
              -translate-x-1/2
              bg-black
              rounded-[100%]
              opacity-10
              skew-x-12
            "
          />

          {/* Car Image */}
          <img
            src={car.img}
            alt={car.title}
            className="h-[70%] sm:h-[60%] object-contain z-10 transition-opacity duration-500 rounded-full"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-[50%] bg-blue-300 rounded-2xl sm:rounded-3xl flex flex-col justify-center px-4 sm:px-8 md:px-10 py-6 md:py-0 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 dm-serif">
            {car.dis}
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 dm-serif">
            {car.title}
          </h2>

          <div className="flex gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-lg">
            <span className="line-through opacity-70 dm-serif">
              {car.prev}
            </span>
            <span className="font-extrabold dm-serif">
              {car.now}
            </span>
          </div>
        </div>
      </div>

<button
  onClick={Navigate}
  className="
    fixed sm:absolute
    bottom-4 sm:bottom-6
    right-4 sm:right-6
    px-4 sm:px-6 py-2 sm:py-3
    bg-white
    text-black
    text-xs sm:text-sm font-semibold
    rounded-2xl sm:rounded-3xl
    shadow-md
    transition-all duration-200
    hover:shadow-xl
    active:scale-95
    focus:outline-none
    focus:ring-2 focus:ring-blue-300
    z-10
  "
>
  Browse More →
</button>


    </div>
  );
}

