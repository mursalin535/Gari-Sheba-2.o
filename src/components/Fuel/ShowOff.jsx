import { Droplets, DollarSign, Clock, Truck } from "lucide-react";

export default function ShowOff() {
  const stats = [
    {
      title: "Fuel Sold",
      value: "2.4k+",
      unit: "Liters",
      desc: "Safely delivered",
      icon: Droplets,
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
    {
      title: "Revenue",
      value: "$18k+",
      unit: "",
      desc: "Total transactions",
      icon: DollarSign,
      bg: "bg-green-100",
      text: "text-green-700",
    },
    {
      title: "Delivery Speed",
      value: "<20",
      unit: "Minutes",
      desc: "Fast delivery",
      icon: Clock,
      bg: "bg-yellow-100",
      text: "text-yellow-700",
    },
    {
      title: "Happy Customers",
      value: "50K+",
      unit: "",
      desc: "Trust us",
      icon: Truck,
      bg: "bg-purple-100",
      text: "text-purple-700",
    },
  ];

  return (
    <div className="w-full min-h-[50vh] flex flex-col justify-center items-center px-4 md:px-8 lg:px-10 py-12">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900 mb-3 md:mb-4 text-center">
        Real Numbers. Real Impact. 🚀
      </h1>

      <p className="text-sm md:text-base text-gray-600 max-w-2xl text-center mb-8 md:mb-10 px-4">
        We power vehicles, businesses, and journeys every day — with speed, safety, and reliability you can trust.
      </p>

      {/* Stats Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`rounded-2xl md:rounded-3xl p-5 md:p-6 ${item.bg} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <Icon className={`w-8 h-8 md:w-10 md:h-10 ${item.text}`} />
                <span className={`text-xs font-bold ${item.text}`}>
                  VERIFIED
                </span>
              </div>

              <h2 className={`text-2xl md:text-3xl font-extrabold ${item.text}`}>
                {item.value}
              </h2>
              {item.unit && (
                <p className={`text-sm ${item.text} font-semibold`}>{item.unit}</p>
              )}

              <p className="text-gray-800 font-semibold mt-2 text-sm md:text-base">
                {item.title}
              </p>

              <p className="text-gray-600 text-xs md:text-sm mt-1">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
