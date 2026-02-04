import Nav from '../Home/Nav'
import Footer from '../Home/Footer'
import Purchase from './Purchase.jsx'
import Graph from './Graph.jsx'

import ShowOff from './ShowOff.jsx'
import Rules from './Rules.jsx'

export default function Fuel()
{
    return(
        <>

        <div>
            <Nav/>
        </div>
<div className='w-full h-[12vh] sm:h-[15vh] md:h-[18vh] lg:h-[20vh] bg-gray-200 '/>

<div className='w-full flex flex-col justify-center items-center gap-10 sm:gap-12 md:gap-16 lg:gap-25 bg-gray-200 pb-[8vh] sm:pb-[9vh] md:pb-[10vh] px-3 sm:px-4 md:px-0'>


 



 

    <div className='w-full'> 
        <Purchase/>
    </div>

    <div className='w-full'>
        <Graph/>
    </div>




    <div className='w-full'>

        <Rules/>
    </div>

   


</div>

        <div>
            <Footer/>
        </div>
        
        </>
    )
}
