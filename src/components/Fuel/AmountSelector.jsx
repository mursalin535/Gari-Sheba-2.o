import { Plus, Minus } from "lucide-react";

export default function AmountSelector({ amount, setAmount, activeFuel, nav }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex flex-col gap-4">
      <h2 className={`text-lg md:text-xl font-bold ${activeFuel.textTheme}`}>
        Select Amount
      </h2>

      {/* Amount Controls */}
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <button
          onClick={() => setAmount(Math.max(0, amount - 1))}
          className={`w-10 h-10 md:w-12 md:h-12 ${activeFuel.color} text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md`}
        >
          <Minus className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        
        <div className="flex-1 text-center">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            {amount}
          </span>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            {nav === "electric" ? "kWh" : "liters"}
          </p>
        </div>
        
        <button
          onClick={() => setAmount(amount + 1)}
          className={`w-10 h-10 md:w-12 md:h-12 ${activeFuel.color} text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md`}
        >
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Price Information */}
      <div className={`${activeFuel.bgTheme} p-3 md:p-4 rounded-xl space-y-2`}>
        <div className="flex justify-between items-center">
          <span className="text-xs md:text-sm text-gray-600">
            Price per {nav === "electric" ? "kWh" : "liter"}:
          </span>
          <span className="text-sm md:text-base font-semibold text-gray-800">
            ${activeFuel.pricePerLiter.toFixed(2)}
          </span>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t-2 border-white">
          <span className={`text-base md:text-lg font-bold ${activeFuel.textTheme}`}>
            Total:
          </span>
          <span className={`text-lg md:text-xl font-bold ${activeFuel.textTheme}`}>
            ${(amount * activeFuel.pricePerLiter).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
