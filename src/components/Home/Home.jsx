import Nav from './Nav' 
 
import About  from './About';
import WorldWide from './WorldWide';
import { useState, useEffect } from 'react'; 

import UsersRvw from './UsersRvw';
import Offers  from './Offers';
import TopCompanies from './TopCompanies';
import Track from './Track';
import Services from './Services'
import Footer from './Footer';
import Hero from './Hero'
import Fuel from './Fuel'

function Home(){ 
  
    return( 
        <> 
            {/* Nav - Fixed Positioning Fix */}
            <div className='fixed w-full z-50'> 
                <Nav/> 
            </div> 
           
            {/* Spacer for fixed nav */}
            <div className='h-14 sm:h-16 md:h-20 lg:h-24'/>
 
            <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col bg-gray-200 gap-6 sm:gap-8 md:gap-12 md:gap-16 lg:gap-20 pt-2 sm:pt-3 md:pt-4"> 

                {/* Hero Section */}
                <div className='w-full rounded-3xl'>
                    <Hero/>
                </div>

                {/* What we do */}
                <div className='w-full '>
                 <About/>
                </div>

                {/* World Wide */}
                <div className='w-full '>
                    <WorldWide/>
                </div>



              

                {/* Offers */}
                <div className='w-full '>
                    <Offers/>
                </div>

                {/* Top Companies */}
                <div className='w-full '>
                    <TopCompanies/>
                </div>

                

                {/* Track */}
                <div className='w-full '>
                    <Track/>
                </div>

                {/* Services */}
                <div className='w-full '>
                    <Services/>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <Fuel/>
                </div>

                <div className='w-full'>
                    <UsersRvw/>

                </div>


                

                {/* Footer */}
                <div className='w-full'>
                    <Footer/>
                </div>
            </div> 
        </> 
    ) 
} 

export default Home;
