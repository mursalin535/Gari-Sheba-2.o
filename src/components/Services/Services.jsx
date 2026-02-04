import Nav from '../Home/Nav';
import Footer from '../Home/Footer';
import Maintain from './Maintain';
import ShowOff from './ShowOff';
import ServiceCompany from './ServiceCompany';
import { useNavigate } from 'react-router-dom';

export default function Servieces() {
  const navigate = useNavigate();

  const texts = [
    '24/7', 'In No Time', 'From Experts', 'At Your Door',
    'Best Prices', 'Trusted Care', 'No Hassle', 'Quick Fix',
    'Top Rated', 'Guaranteed', 'Same Day', 'Professional',
    'Premium', 'Certified', 'Fair Pricing', 'On Demand'
  ];

  return (
    <>
      {/* Navbar */}
      <div className="fixed z-50 w-full">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col justify-center items-center gap-16 pt-20 pb-[20vh] bg-gray-200">

        {/* Maintenance Section */}
        <div className='w-full'>
          <Maintain />
        </div>

        {/* ShowOff Section */}
        <div className='w-full'>
          <ShowOff />
        </div>

        {/* Your Smile / Banner Section */}
        <div className='w-full rounded-3xl h-[80vh]   flex justify-center items-center px-4'>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-6 w-full max-w-6xl'>
            
            {/* Image */}
            <div className='w-full lg:w-1/2 h-full flex justify-center items-center'>
              <img
                src='happy.jpg'
                alt="Happy Customer"
                className='rounded-3xl border-4 border-white shadow-lg object-cover w-full h-64 lg:h-80'
              />
            </div>

            {/* Text Content */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-start gap-3 px-4 lg:px-10'>
              <h1 className='text-3xl sm:text-4xl font-serif font-bold text-gray-700'>
                Your Smile, Our Mission
              </h1>
             <p className='text-gray-600 text-sm sm:text-base'>
  We provide reliable, professional auto care right at your doorstep, ensuring your vehicle gets expert attention without the hassle. Our team works quickly and efficiently, delivering top-quality service, trusted solutions, and peace of mind. Enjoy convenient, stress-free maintenance and repairs, tailored to your schedule and needs.
</p>


              
            </div>

          </div>
        </div>

        {/* Service Companies Section */}
        <div id="service-company" className="w-full">
          <ServiceCompany />
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
