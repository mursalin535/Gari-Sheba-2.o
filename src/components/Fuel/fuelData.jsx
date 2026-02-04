import { Fuel, Zap, Leaf, Droplets } from "lucide-react";

const fuelTypes = [
  {
    id: "petrol",
    name: "Petrol",
    icon: Fuel,
    color: "bg-red-300",
    hoverColor: "hover:bg-red-600",
    bgTheme: "bg-red-100",
    borderTheme: "border-red-300",
    textTheme: "text-red-700 dm-serif",
    pricePerLiter: 1.5
  },
  {
    id: "diesel",
    name: "Diesel",
    icon: Droplets,
    color: "bg-amber-300",
    hoverColor: "hover:bg-yellow-400",
    bgTheme: "bg-yellow-100",
    borderTheme: "border-yellow-300",
    textTheme: "text-yellow-700 dm-serif",
    pricePerLiter: 1.35
  },
  {
    id: "electric",
    name: "Electric",
    icon: Zap,
    color: "bg-blue-300",
    hoverColor: "hover:bg-blue-600",
    bgTheme: "bg-blue-100",
    borderTheme: "border-blue-300",
    textTheme: "text-blue-700 dm-serif",
    pricePerLiter: 0.3
  },
  {
    id: "hybrid",
    name: "Hybrid",
    icon: Leaf,
    color: "bg-green-300",
    hoverColor: "hover:bg-green-600",
    bgTheme: "bg-green-100",
    borderTheme: "border-green-300",
    textTheme: "text-green-700 dm-serif",
    pricePerLiter: 1.4
  },
  {
    id: "cng",
    name: "Compressed Natural Gas (CNG)",
    icon: Fuel,
    color: "bg-purple-300",
    hoverColor: "hover:bg-purple-600",
    bgTheme: "bg-purple-100",
    borderTheme: "border-purple-300",
    textTheme: "text-purple-700 dm-serif",
    pricePerLiter: 0.85
  }
];

export default fuelTypes;
