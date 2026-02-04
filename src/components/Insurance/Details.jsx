import { useSelector } from "react-redux";
import { useRef, useState } from "react";

export default function Details() {
  const comps = useSelector((state) => state.insuranceCompany);
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(comps[0]);
  const [active, setActive] = useState(0);

  function handleClick(comp, index) {
    setCurrent(comp);
    setActive(index);
  }

  return (
    <div className="w-full min-h-screen sm:min-h-[80vh] md:min-h-[80vh] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-0 py-4 sm:py-6 md:py-0">

      {/* ───────── COMPANIES (TOP HORIZONTAL CAROUSEL) ───────── */}
      <div className="w-full h-auto sm:h-[30%] flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl md:rounded-4xl">

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="
            w-full h-auto sm:h-full flex-1
            flex flex-row items-center gap-3 sm:gap-4 md:gap-6
            overflow-x-auto
            scroll-smooth
            py-4 sm:py-5 md:py-6
            no-scrollbar
            px-2 sm:px-4 md:px-0
          "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {comps.map((comp, index) => (
            <div
              key={comp.id}
              className={`flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px] h-auto sm:h-full rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center gap-1.5 sm:gap-2 p-2 sm:p-3 border-r-4 ${active === index ? 'border-blue-400' : 'border-gray-300 '} cursor-pointer hover:scale-105 transition-transform duration-300`}
              style={{ scrollSnapAlign: "center" }}
              onClick={() => handleClick(comp, index)}
            >
              <img
                src={comp.logo}
                alt={comp.company}
                className="
                  w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                  rounded-full
                  border-2 border-white
                  outline outline-black
                  object-contain
                  bg-white
                "
              />
              <h5 className="text-xs sm:text-sm font-serif text-gray-600 font-bold text-center leading-tight">
                {comp.company}
              </h5>
            </div>
          ))}
        </div>
      </div>

      {/* ───────── DETAILS SECTION ───────── */}
      <div className="w-full h-auto sm:h-[78%] rounded-xl sm:rounded-2xl flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 px-2 sm:px-4 md:px-0">

        <div className='w-full md:w-[59%] h-auto md:h-full border-b-2 md:border-b-0 md:border-r-2 border-gray-500 rounded-none md:rounded-r-4xl flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-10 py-4 sm:py-6 md:py-0 px-3 sm:px-6 md:px-0'>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-blue-300">Details:</h1>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 dm-serif px-3 sm:px-6 md:px-15 text-center">{current.details}</span>
        </div>

        <div className="w-full md:w-[39%] h-auto md:h-full flex flex-col justify-center items-center gap-3 sm:gap-6 md:gap-10 px-3 sm:px-6 md:px-0 py-4 sm:py-6 md:py-0">
          <img
            src={current.logo}
            className="w-40 h-32 sm:w-48 sm:h-40 md:w-full md:h-[40%] rounded-2xl sm:rounded-3xl md:rounded-4xl object-contain"
          />
          <div className="w-full h-auto md:h-[50%] flex justify-center items-start sm:items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-gray-600 text-center">{current.company}</h1>
          </div>
        </div>

      </div>

      {/* ───────── SCROLLBAR HIDE STYLES ───────── */}
      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </div>
  );
}
