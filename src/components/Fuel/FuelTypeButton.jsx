export default function FuelTypeButton({ fuel, isActive, onClick }) {
  const Icon = fuel.icon;

  return (
    <button
      onClick={onClick}
      className={`p-2 md:p-3 rounded-lg md:rounded-xl font-bold transition-all duration-300 ${
        isActive
          ? `${fuel.color} text-white scale-105 shadow-lg`
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow"
      }`}
    >
      <div className="flex items-center gap-2">
        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? "text-white" : fuel.textTheme}`} />
        <span className="text-sm md:text-base dm-serif">{fuel.name}</span>
      </div>
    </button>
  );
}
