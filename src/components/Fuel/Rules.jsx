export default function Rules() {
  const fuelTips = [
    { heading: "Keep Tires Properly Inflated", img: "fuelRule1.jpg", description: "Maintaining the correct tire pressure reduces rolling resistance and improves fuel efficiency. Check tires monthly and inflate to recommended PSI." },
    { heading: "Regular Engine Maintenance", img: "fuelRule2.jpg", description: "Timely oil changes, clean air filters, and well-functioning spark plugs ensure optimal engine performance and reduce fuel wastage." },
    { heading: "Use the Correct Fuel", img: "fuelRule3.jpg", description: "Always use the fuel type recommended for your vehicle. Using incorrect or higher-octane fuel rarely improves performance." },
    { heading: "Drive Smoothly", img: "fuelRule4.jpg", description: "Avoid rapid acceleration and hard braking. Smooth driving reduces fuel consumption and minimizes wear on your car." },
    { heading: "Check Wheel Alignment", img: "fuelRule5.jpg", description: "Misaligned wheels increase friction and tire wear, forcing the engine to use more fuel. Get alignment checked regularly." },
    { heading: "Use Air Conditioning Wisely", img: "fuelRule6.jpeg", description: "Air conditioning increases fuel consumption. Use it sparingly; open windows at low speeds and AC at higher speeds." },
    { heading: "Reduce Excess Weight", img: "fuelRule7.webp", description: "Extra weight forces the engine to work harder. Remove unnecessary cargo and avoid roof racks when not needed." },
    { heading: "Maintain Your Brakes", img: "fuelRule8.webp", description: "Worn or misadjusted brakes cause extra friction, reducing fuel efficiency. Inspect and maintain brakes regularly." },
    { heading: "Shift Gears Properly", img: "fuelRule9.jpeg", description: "Use the correct gear and shift at appropriate RPMs to optimize engine performance and fuel consumption." }
  ];

  return (
    <div className="w-full min-h-fit flex flex-col justify-center items-center relative px-3 sm:px-4 md:px-0">
      {/* Header */}
      <div className="w-full h-auto sm:h-[15vh] flex flex-col justify-center items-center bg-fixed py-4 sm:py-6 md:py-0">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 font-bold text-center px-2">
          ---Rules <span className='text-gray-600'>| Book---</span>
        </span>
        <span className="text-xs sm:text-sm md:text-base dm-serif text-center px-2">@ Best Ways to Maintain Your Vehicle for Efficient Fuel Usage</span>
      </div>

      {/* Grid container */}
      <div className="w-full sm:w-[95%] md:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 pb-6 sm:pb-8 md:pb-10">
        {fuelTips.map((tip, index) => (
          <div
            key={index}
            className="rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-lg hover:shadow-xl border-r-4 border-blue-300 p-3 sm:p-4 md:p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-1000"
          >
            <img
              src={tip.img}
              alt={tip.heading}
              className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-lg sm:rounded-xl border-4 outline-1 outline-black border-white mb-2 sm:mb-3 md:mb-4"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2 md:mb-2 font-serif text-gray-700">{tip.heading}</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dm-serif">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
