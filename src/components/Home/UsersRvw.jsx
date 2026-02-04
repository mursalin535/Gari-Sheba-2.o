import { useSelector } from "react-redux";
import Marquee from "react-fast-marquee";

export default function UsersRvw() {
  const testimonials = useSelector((state) => state.testimonials);

  return (
    <div className="w-full min-h-[65vh] flex flex-col justify-center py-12 px-4 sm:px-8 bg-gray-100 rounded-3xl">
      
      {/* Premium Section Heading */}
      <div className="w-full flex justify-center items-center my-6">
       <div className="w-full flex justify-center my-8">
  <h1 className="relative text-4xl sm:text-5xl font-extrabold font-serif 
                 text-center bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 
                 bg-clip-text text-transparent tracking-wide">
      <span className="text-5xl font-bold font-serif bg-gradient-to-r from-blue-800 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-12">
                User's
            </span>
    <span className="inline-block w-1 h-8 bg-blue-400 mx-3 align-middle rounded-sm"></span>
    <span className="text-gray-700">Reviews</span>
  </h1>
</div>

      </div>

      <div className="w-full h-[10vh] sm:h-[15vh]" />

      {/* Marquee of user reviews */}
      <Marquee
        speed={30}
        pauseOnHover
        gradient={false}
      >
        {testimonials.map((user) => (
          <div
            key={user.id}
            className="w-[320px] sm:w-[400px] lg:w-[460px] mx-4 sm:mx-6 p-5 sm:p-6 bg-blue-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex gap-4 relative overflow-hidden"
          >
            {/* Blurred overlay */}
            <div className="w-full h-full bg-gray-400 absolute inset-0 z-0 backdrop-blur-sm opacity-70"/>

            {/* User Image */}
            <img
              src={`/${user.image}`}
              alt={`${user.name}`}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-md z-10 flex-shrink-0"
            />

            {/* Content */}
            <div className="flex-1 z-10">
              <div className="bg-white rounded-2xl p-3 sm:p-4 mb-3 shadow-sm">
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed dm-serif">
                  "{user.saying}"
                </p>
              </div>
              
              <div className="border-t border-white/30 pt-2">
                <p className="font-semibold text-white font-serif text-sm sm:text-base drop-shadow-sm">
                  {user.name}
                </p>
                <p className="text-xs sm:text-sm text-white/90 drop-shadow-sm">
                  With Us: {user.userExp} years · Rating: {user.rating}⭐
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

