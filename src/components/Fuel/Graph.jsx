import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function FuelGraph() {
  const [fuelData, setFuelData] = useState([]);

  useEffect(() => {
    // Mock data for last 12 months
    const mockData = [
      { month: "Feb 2025", petrol: 1.2, diesel: 1.1, electric: 0.15, cng: 0.8 },
      { month: "Mar 2025", petrol: 1.25, diesel: 1.15, electric: 0.16, cng: 0.82 },
      { month: "Apr 2025", petrol: 1.3, diesel: 1.18, electric: 0.17, cng: 0.85 },
      { month: "May 2025", petrol: 1.35, diesel: 1.2, electric: 0.18, cng: 0.87 },
      { month: "Jun 2025", petrol: 1.33, diesel: 1.22, electric: 0.18, cng: 0.88 },
      { month: "Jul 2025", petrol: 1.38, diesel: 1.25, electric: 0.19, cng: 0.9 },
      { month: "Aug 2025", petrol: 1.4, diesel: 1.28, electric: 0.2, cng: 0.92 },
      { month: "Sep 2025", petrol: 1.42, diesel: 1.3, electric: 0.21, cng: 0.94 },
      { month: "Oct 2025", petrol: 1.45, diesel: 1.32, electric: 0.22, cng: 0.96 },
      { month: "Nov 2025", petrol: 1.48, diesel: 1.35, electric: 0.23, cng: 0.98 },
      { month: "Dec 2025", petrol: 1.5, diesel: 1.37, electric: 0.24, cng: 1.0 },
      { month: "Jan 2026", petrol: 1.52, diesel: 1.4, electric: 0.25, cng: 1.02 },
    ];

    setFuelData(mockData);
  }, []);

  return (
    <div className="w-full min-h-screen sm:min-h-[70vh] md:min-h-[70vh] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-0 py-6 sm:py-8 md:py-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-600 bg-blue-200 rounded-2xl sm:rounded-3xl md:rounded-4xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">Track Price 🔍</h1>
      
      <div className="w-full h-auto md:h-full flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={fuelData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} interval={window.innerWidth < 768 ? 1 : 0} />
            <YAxis label={{ value: "Price ($)", angle: -90, position: "insideLeft" }} width={50} />
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            <Line type="monotone" dataKey="petrol" stroke="#ff1b00" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="diesel" stroke="#dab407" />
            <Line type="monotone" dataKey="electric" stroke="#8884d8" />
            <Line type="monotone" dataKey="cng" stroke="#ff00ff" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
