"use client"
import { useState } from "react";

export default function Why() {

 const imp = [
  {
    img: "/financialProtecion.jpg",
    title: "Financial Protection",
    des: "Car insurance acts as a financial safety net when life takes an unexpected turn. Accidents, theft, or natural disasters can lead to heavy expenses that are difficult to manage alone. Insurance ensures you are not forced to drain your savings or take on debt, allowing you to recover financially while continuing your daily life without long-term stress."
  },
  {
    img: "/accidentDamage.webp",
    title: "Accident Damage Coverage",
    des: "Even a minor accident can result in costly vehicle repairs. Car insurance covers repair or replacement costs, helping you restore your vehicle quickly without financial pressure. This coverage is especially important in urban traffic conditions, where accidents are more frequent. It ensures that mistakes or unforeseen events do not turn into long-term financial setbacks."
  },
  {
    img: "/medicalExpense.webp",
    title: "Medical Expenses",
    des: "Road accidents can cause injuries that require immediate and sometimes long-term medical care. Car insurance helps cover hospital bills, treatment costs, and emergency care for you and your passengers. This support ensures timely medical attention without worrying about expenses, allowing you to focus on recovery and well-being during critical situations."
  },
  {
    img: "/secured.webp",
    title: "Peace of Mind",
    des: "Insurance provides confidence every time you step behind the wheel. Knowing that you are legally compliant and financially protected reduces anxiety while driving. Whether it’s an accident, damage, or emergency, insurance allows you to handle situations calmly and responsibly, giving you peace of mind and a safer driving experience every day."
  }
];


  const [active, setActive] = useState(0);

  return (
    <div className="w-full min-h-screen sm:min-h-[90vh] md:min-h-[90vh] flex flex-col items-center gap-6 sm:gap-10 md:gap-12 lg:gap-20 px-3 sm:px-4 md:px-6 lg:px-12 py-4 sm:py-6 md:py-0">

      {/* Heading */}
      <div className="h-auto sm:h-[15vh] flex items-center py-4 sm:py-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif bg-gradient-to-r from-blue-800 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
          Why Insurance Is <span className="text-gray-600 block sm:inline">| Important</span>
        </h1>
      </div>

      {/* Content */}
      <div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">

        {/* LEFT : Paper */}
        <div className="w-full md:w-[55%] h-auto md:h-full relative rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">

          {/* Paper Texture */}
          <img
            src="/paper.webp"
            className="absolute inset-0 w-full h-full object-cover"
            alt="paper texture"
          />

          {/* Light overlay */}
          <div className="absolute inset-0 bg-gray-200/80" />

          {/* Content */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 min-h-[300px] md:min-h-0">
            <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-serif text-gray-900">
              {imp[active].title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed dm-serif">
              {imp[active].des}
            </p>
          </div>
        </div>

        {/* RIGHT : Cards */}
        <div className="w-full md:w-[45%] h-auto md:h-full flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center">

          {imp.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`cursor-pointer flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border transition-all duration-300
                ${active === index
                  ? "bg-gray-400/80 text-white shadow-lg scale-[1.02]"
                  : "bg-white hover:bg-gray-100 text-gray-700"
                }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain flex-shrink-0"
              />

              <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
