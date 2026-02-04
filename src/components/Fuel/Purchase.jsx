import { useState } from "react";
import FuelTypeButton from "./FuelTypeButton";
import AmountSelector from "./AmountSelector";
import UserDetailsForm from "./UserDetailsForm";
import  fuelTypes  from "./fuelData";

export default function Purchase() {
  const [nav, setNav] = useState("petrol");
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const activeFuel = fuelTypes.find((f) => f.id === nav);

  const handlePurchase = () => {
    if (!name || !email || !location || amount <= 0) {
      alert("Please fill all fields and select a valid amount!");
      return;
    }
    
    alert(
      `✅ Purchase Successful!\n\n` +
      `Name: ${name}\n` +
      `Fuel Type: ${activeFuel.name}\n` +
      `Amount: ${amount} ${nav === "electric" ? "kWh" : "liters"}\n` +
      `Total Cost: $${(amount * activeFuel.pricePerLiter).toFixed(2)}\n` +
      `Location: ${location}\n\n` +
      `Thank you for your purchase!`
    );
    
    // Reset form
    setAmount(0);
    setName("");
    setEmail("");
    setLocation("");
  };

  return (
    <div className="w-full min-h-screen  p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-cyan-300 to-blue-600 bg-clip-text text-transparent mb-2 font-serif">
            Purchase Fuel
          </h1>
          <p className="text-sm md:text-base text-gray-600 dm-serif">
            Select your fuel type, choose amount, and complete your order
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Fuel Type Selector */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 md:gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {fuelTypes.map((fuel) => (
              <FuelTypeButton
                key={fuel.id}
                fuel={fuel}
                isActive={nav === fuel.id}
                onClick={() => setNav(fuel.id)}
              />
            ))}
          </div>

          {/* Amount Selector */}
          <div className="lg:col-span-2">
            <AmountSelector
              amount={amount}
              setAmount={setAmount}
              activeFuel={activeFuel}
              nav={nav}
            />
          </div>

          {/* User Details Form */}
          <div className="lg:col-span-1">
            <UserDetailsForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              location={location}
              setLocation={setLocation}
              activeFuel={activeFuel}
              onPurchase={handlePurchase}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
