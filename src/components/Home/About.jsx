import { useState } from 'react';

function About() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            title: "MarketPlace",
            img:'/market.webp',
            description: "Buy and sell cars with confidence. Access the best deals from verified sellers and reach thousands of potential buyers.",
           
            gradient: "from-blue-500 to-cyan-500",
            features: ["Verified Listings", "Best Deals", "Secure Transactions"],
          
        },
        {
            title: "Traffic Records",
              img:'/records.webp',
            description: "Get legal car information, traffic records, past histories just by the license number of that car.Ensuring proper emphasis of triaffic rules",
            icon: "📊",
            gradient: "from-purple-500 to-pink-500",
            features: ["Expert Reviews", "Detailed Specs", "Comparisons"],
          
        },
        {
            title: "Services",
              img:'/services.webp',
            description: "Connect with trusted service centers for maintenance, repairs, and modifications. Keep your car running smoothly.",
            icon: "🔧",
            gradient: "from-orange-500 to-red-500",
            features: ["Certified Centers", "Easy Booking", "Quality Service"],
           
        },
        {
            title: "Insurance",
              img:'/insurance.webp',
            description: "Find the perfect insurance coverage for your vehicle. Compare plans and get the best rates from top providers.",
            icon: "🛡️",
            gradient: "from-green-500 to-emerald-500",
            features: ["Best Rates", "Easy Compare", "Quick Claims"],
            
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:py-16 lg:py-20">
            {/* Animated Heading Section */}
            <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-5xl font-bold font-serif bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-12">
                What We Do?
            </h1>
                
                <p className='text-lg sm:text-xl lg:text-2xl text-gray-600 font-light mt-3 sm:mt-4 px-4'>
                    One Platform for <span className='font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dm-serif'>All Your Automotive Needs</span>
                </p>
            </div>

            {/* Cards Grid */}
            <div className='w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className='relative group'
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                      
                        
                        {/* Card */}
                        <div className='relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden'>
                            {/* Icon with flip animation */}
                           
                            {/* Title with gradient on hover */}
                            <img 
                                src={service.img} 
                                alt={service.title}
                                className='w-full h-auto object-cover rounded-full mb-3 sm:mb-4 border-2 border-gray-300 scale-70 opacity-70'
                            />

                            <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-all duration-300 ${hoveredCard === index ? `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent` : 'text-blue-900'}`}>
                                {service.title}
                            </h3>
                            
                            {/* Description */}
                            <p className='text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed dm-serif'>
                                {service.description}
                            </p>
                            
                          
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom decorative element */}
            <div className='flex justify-center mt-8 sm:mt-12 gap-1 sm:gap-2'>
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={i}
                        className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce'
                        style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                ))}
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div>
    );
}

export default About;
