import { useSelector } from 'react-redux';
import { Star, MapPin, User, Wrench, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServiceCompany() {
  const navigate = useNavigate();
  const serviceCompanies = useSelector((state) => state.ServiceCompany);

  if (!serviceCompanies || serviceCompanies.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center p-6 bg-white rounded-xl shadow-md max-w-md w-full">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-3">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No Services Available</h2>
          <p className="text-gray-600 text-sm mb-4">
            We couldn’t find any service companies. Check back later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-300 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-400 transition"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

 

  return (
    <div className="w-full px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-cyan-400 to-blue-700 bg-clip-text text-transparent">Trusted Garage <span className='text-gray-700 text-3xl font-serif'>Partners</span></h2>
          <p className="text-gray-600 text-sm dm-serif">Top-rated auto service centers across  @Dhaka</p>
        </div>

        <div className="space-y-6">
          {serviceCompanies.map((company, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={company.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 bg-gray-300 p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1`}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl shadow-sm"
                />

                <div className="flex-1 space-y-2 sm:pl-4 sm:pr-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 font-serif">{company.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full text-xs">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900 dm-serif">{company.rating}</span>
                      <span className="text-gray-500">({company.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <User className="w-4 h-4 text-blue-300 dm-serif" /> <span className="dm-serif">{company.Owner}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <MapPin className="w-4 h-4 text-red-500" /> <span className="dm-serif">{company.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 text-sm">
                    {company.top.split(',').map((service, idx) => (
                      <span key={idx} className="bg-blue-200 text-gray-800 dm-serif px-2 py-0.5 rounded-full">
                        {service.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-2">
                    <button
                    
                      className="bg-blue-400 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 hover:bg-blue-400 transition"
                    >
                      <Wrench className="w-3 h-3" /> Book
                    </button>

                    <button
                      onClick={() => {
                        const address = encodeURIComponent(company.location);
                        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
                      }}
                      className="bg-green-300 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 hover:bg-green-400 transition"
                    >
                      <MapPin className="w-3 h-3" /> Map
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
