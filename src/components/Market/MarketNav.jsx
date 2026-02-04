"use client";

export default function MarketNav({ setselect, selected }) {
  const items = [
    { id: 1, name: "Cars" },
    { id: 2, name: "Jeep" },
    { id: 3, name: "Truck" },
    { id: 4, name: "Super Cars" },
  ];

  return (
    <nav className="w-full py-4 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 ">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setselect(item.id)}
              className={`
                relative px-6 py-3 md:px-8 md:py-3
                text-sm md:text-base font-medium
                transition-all duration-200
                border-b-2 dm-serif
                ${selected === item.id 
                  ? "text-blue-600 border-blue-500" 
                  : "text-gray-600 border-transparent hover:text-blue-500 hover:border-gray-300"
                }
              `}
            >
              {item.name}
              {selected === item.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}