import Nav from "../Home/Nav";

import Why from "./Why";
import ExpertsSay from "./ExpertsSay";
import Table from "./Table";
import Method from "./Method";
import Details from "./Details";
import Footer from "../Home/Footer";

export default function Insurance() {
  return (
    <>
      <Nav />
      
      {/* Main Container */}
      <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-18 pt-[15vh] sm:pt-[18vh] md:pt-[22vh] lg:pt-[25vh] pb-[20vh] sm:pb-[24vh] md:pb-[28vh] lg:pb-[30vh] bg-gray-200 px-3 sm:px-4 md:px-0">
        
       

       

     
        
          
        <div className="w-full">
          <Why/>
        </div>

          {/* METHOD */}
          <div className="w-full">
            
             <ExpertsSay />
            <Method />
            </div>
           
         
          {/* CHART */}
          <div className="w-full">

 <Table />
          </div>
           
         

        <div className="w-full">
 <Details />
        </div>


           
         

        </div>

        <Footer/>
     
    </>
  );
}
