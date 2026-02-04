import { useState, useEffect } from "react";

export default function Services() {

const serviceProp = [
  {
    title: "Fast",
    des: "Our services are optimized for speed, ensuring quick turnaround times while maintaining high quality standards, seamless execution, and dependable performance you can rely on.",
    img1: "/fastService.webp",
    img2: "/fastService2.webp"
  },
  {
    title: "Accurate",
    des: "We prioritize precision and attention to detail, delivering carefully verified results, consistent data accuracy, and reliable outcomes that help you make confident, informed decisions.",
    img1: "/accurateService.webp",
    img2: "/accurateService2.webp"
  },
  {
    title: "Expertise",
    des: "Our team brings years of hands-on experience and deep industry insight, applying proven strategies and advanced knowledge to deliver solutions that meet real-world business needs.",
    img1: "/expertService.webp",
    img2: "/expertService2.webp"
  }
];

  const [selected, setSelected] = useState(serviceProp[0]);

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected(prev => {
        const currentIndex = serviceProp.findIndex(s => s.title === prev.title);
        const nextIndex = (currentIndex + 1) % serviceProp.length;
        return serviceProp[nextIndex];
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full min-h-screen sm:min-h-[85vh] md:min-h-[85vh] flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-0">



<h1 className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
  bg-gradient-to-r from-blue-700 via-blue-200 to-blue-500
  bg-clip-text text-transparent font-serif">
  
  <hr className="flex-grow border-t-2 border-black" />
   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-0 sm:mb-8 md:mb-12 whitespace-nowrap">
                We Provide
            </h1>
  <hr className="flex-grow border-t-2 border-black" />
</h1>





<div className="w-full flex-1 flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5">
      {/* Left Side */}
      <div className="w-full md:w-[35%] h-auto md:h-full flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-5">
        {serviceProp.map((service) => (
          <div
            key={service.title}
            onClick={() => setSelected(service)}
            className={`w-full cursor-pointer rounded-2xl sm:rounded-3xl md:rounded-4xl p-3 sm:p-4 md:p-6 transition-all duration-300
              ${selected.title === service.title
                ? "bg-blue-100 border-l-4 sm:border-l-6 md:border-l-8 border-blue-600"
                : "bg-amber-100 hover:bg-gray-300"
              }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-blue-900">
              {service.title}
            </h1>
          </div>
        ))}
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[65%] h-auto md:h-[90%] border-t-2 md:border-t-0 md:border-l-2 md:border-r-2 border-black rounded-2xl md:rounded-full flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 px-3 sm:px-6 md:px-10 py-4 md:py-0 bg-white">
        <div className="w-full h-1"/>

        {/* Images */}
        <div className="w-full h-auto md:h-[40%] flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 md:gap-5">
          <img
            src={selected.img1}
            alt={selected.title}
            className="w-full sm:w-[45%] md:w-[35%] h-[200px] sm:h-[250px] md:h-full rounded-2xl sm:rounded-3xl md:rounded-4xl object-cover border-4 border-gray-400"
          />
          <img
            src={selected.img2}
            alt={selected.title}
            className="w-full sm:w-[45%] md:w-[35%] h-[200px] sm:h-[250px] md:h-full rounded-2xl sm:rounded-3xl md:rounded-4xl object-cover border-4 border-gray-400"
          />
        </div>

        {/* Text */}
        <div className="w-full h-auto md:h-[50%] flex flex-col justify-center items-center text-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dm-serif max-w-xl">
            {selected.des}
          </p>
        </div>

      </div>
</div>
    </div>
  );
}

