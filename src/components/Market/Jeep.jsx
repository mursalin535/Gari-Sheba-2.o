import { useSelector } from "react-redux";

export default function Jeep() {
  const jeeps = useSelector((state) => state.jeeps);

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4 font-serif">
            Premium Vehicle Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto dm-serif">
            Discover our exclusive selection of luxury automobiles, each offering exceptional performance and sophisticated design.
          </p>
          <div className="w-24 h-1.5 bg-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* jeeps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jeeps.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={car.img}
                  alt={`Luxury Car ${car.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg dm-serif">
                  Premium
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 font-serif">
                      Model {car.id}
                    </h3>
                    <p className="text-gray-500 mt-1 dm-serif">Luxury Edition</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-700 dm-serif">
                      {car.price}
                    </div>
                    <p className="text-gray-500 text-sm dm-serif">Exclusive Price</p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dm-serif">5 Seats</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dm-serif">Premium</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg dm-serif">
                    View Details
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 dm-serif">
                    Compare
                  </button>
                </div>
              </div>

              {/* ID Badge */}
              <div className="absolute top-4 left-4 bg-gray-800 text-white text-sm font-bold px-3 py-1 rounded-full">
                ID: {car.id}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
