"use client";

import { useState } from "react";

import Nav from "../Home/Nav";
import Footer from "../Home/Footer";

import Offer from "./Offer";
import MarketNav from "./MarketNav";

import Car from "./Car";
import Jeep from "./Jeep";
import Truck from "./Truck";
import SuperCar from "./SuperCar";

export default function Market() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      {/* Top Nav */}
      <div className="fixed z-50 w-full">
        <Nav />
      </div>

      {/* Page Content */}
      <div className="w-full flex flex-col items-center pt-[12vh] sm:pt-[14vh] md:pt-[15vh] bg-gray-200 px-3 sm:px-4 md:px-0">

        {/* Offer Section */}
        <div className="w-full">
          <Offer />
        </div>

        {/* Market Navigation */}
        <div className="w-full sm:w-[85%] md:w-[80%] lg:w-[70%] sticky top-16 sm:top-[70px] md:top-[80px] z-40 bg-white shadow-sm rounded-2xl sm:rounded-3xl md:rounded-4xl opacity-70">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
            <MarketNav setselect={setSelected} selected={selected} />
          </div>
        </div>
        {/* Market Content */}
        <div className="w-full flex justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-3 sm:px-4 md:px-0">
          {selected === 1 && <Car />}
          {selected === 2 && <Jeep />}
          {selected === 3 && <Truck />}
          {selected === 4 && <SuperCar />}

     
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

