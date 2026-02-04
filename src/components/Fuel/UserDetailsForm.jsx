import { User, Mail, MapPin, ShoppingCart } from "lucide-react";

export default function UserDetailsForm({ 
  name, 
  setName, 
  email, 
  setEmail, 
  location, 
  setLocation, 
  activeFuel, 
  onPurchase 
}) {
  const InputField = ({ icon: Icon, value, setValue, placeholder, type = "text" }) => (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 md:pl-10 pr-3 py-2 md:py-3 border-2 border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base"
      />
    </div>
  );

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex flex-col gap-3 md:gap-4">
      <h2 className={`text-lg md:text-xl font-bold ${activeFuel.textTheme}`}>
        Your Details
      </h2>
      
      <InputField 
        icon={User} 
        value={name} 
        setValue={setName} 
        placeholder="Full Name" 
      />
      
      <InputField 
        icon={Mail} 
        value={email} 
        setValue={setEmail} 
        placeholder="Email Address" 
        type="email"
      />
      
      <InputField 
        icon={MapPin} 
        value={location} 
        setValue={setLocation} 
        placeholder="Delivery Location" 
      />

      <button
        onClick={onPurchase}
        className={`mt-2 md:mt-4 w-full ${activeFuel.color} ${activeFuel.hoverColor} text-white py-3 md:py-4 rounded-lg md:rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg text-sm md:text-base`}
      >
        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 font-serif" />
        Complete Purchase
      </button>
    </div>
  );
}
