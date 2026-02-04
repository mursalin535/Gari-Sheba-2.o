import { useNavigate } from "react-router-dom"

export default function TopCompanies(){

const navigator=useNavigate();

function Navigate(){
    navigator('/insurance');
}

    return(
        <>

        <div className="w-full min-h-screen sm:min-h-[85vh] md:min-h-[85vh] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative z-10 rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 border-gray-400 px-3 sm:px-4 md:px-0">

           <img 
  src='/insuBG.webp'
  className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-2xl sm:rounded-3xl md:rounded-4xl"
/>

<div
  className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-blue-400"


/>


            <div className="w-full flex-1 flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 z-10 px-2 sm:px-4">
 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-700 text-center">What About Insurance?</h1>
 <span className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl dm-serif text-center">Your car is valuable, and accidents can happen anytime. Protect yourself and your vehicle with the right car insurance. From collisions to theft, proper coverage gives peace of mind. Explore our insurance plans today to stay secure, drive with confidence, and ensure you're fully protected on every journey <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500 font-bold">We Ensure</span> </span>

            </div>

           


            <div className="w-full flex-1 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-7 z-10 px-2 sm:px-4">

                <div className="w-full sm:w-[30%] h-[120px] sm:h-full bg-blue-50 rounded-2xl sm:rounded-3xl md:rounded-4xl border-b-2 sm:border-b-0 sm:border-r-2 border-gray-500 flex flex-col justify-center items-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrablod text-gray-700 font-serif">100%</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrablod text-gray-700 dm-serif">Trust</span>
                </div>
                
                <div className="w-full sm:w-[30%] h-[120px] sm:h-full bg-green-50 rounded-2xl sm:rounded-3xl md:rounded-4xl border-b-2 sm:border-b-0 sm:border-r-2 border-gray-500 flex flex-col justify-center items-center">
 <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrablod text-gray-700 font-serif">Reliable</span>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrablod text-gray-700 dm-serif">Contracts</span>

                </div>
                
                <div className="w-full sm:w-[30%] h-[120px] sm:h-full bg-amber-50 rounded-2xl sm:rounded-3xl md:rounded-4xl border-b-2 sm:border-b-0 sm:border-r-2 border-gray-500 flex flex-col justify-center items-center">
                    
                     <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrablod text-gray-700 font-serif">Affordable</span>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrablod text-gray-700 dm-serif">Plans</span>
                    
                    </div>  

            </div>


        </div>
<div className="w-full h-3 sm:h-4 md:h-5 lg:h-[5vh]"/>
<div className="flex justify-center items-center px-3 sm:px-4"><button className="dm-serif bg-blue-500 rounded-2xl sm:rounded-3xl md:rounded-4xl text-white font-bold w-32 sm:w-40 md:w-44 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg animate-bounce hover:bg-white hover:text-blue-600 hover:border-1 hover:border-black" onClick={(e)=>Navigate(e)}>Check Out</button></div>


 
        
        
        
        </>
    )
}
