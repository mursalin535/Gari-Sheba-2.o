import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const CarHoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animated Hover Background */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-50 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          
          <Card className="border-2 border-transparent group-hover:border-blue-500 transition-all duration-500 shadow-sm">
            {/* Image Section */}
            <div className="relative w-full h-56 overflow-hidden rounded-xl bg-gray-100">
               <img 
                src={item.img} 
                alt={`Car Asset ${item.id}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
               />
               <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-full text-[10px] font-black tracking-tighter shadow-sm">
                 GARI SHEBA AUTHENTIC
               </div>
            </div>

            {/* Content Section */}
            <div className="mt-6 px-1">
               <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Market Price</p>
               <CardTitle className="mt-0 text-3xl text-blue-900">{item.price}</CardTitle>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-4 overflow-hidden bg-white border border-gray-100 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-800 font-black tracking-tight", className)}>
      {children}
    </h4>
  );
};
