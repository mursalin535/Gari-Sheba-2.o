import Nav from '../Home/Nav'
import SearchBar from './SearchBar'
import Rules from './Rules'
import Footer from '../Home/Footer'
import Track from './Track'

export default function Records() {
  return (
    <>
    <div>
      <Nav/>
    </div>

    <div className='w-full flex flex-col justify-center items-center gap-6 sm:gap-10 md:gap-12 lg:gap-20 bg-gray-200 pt-[15vh] sm:pt-[20vh] md:pt-[25vh] px-3 sm:px-4 md:px-0'>
      
      <div className='w-full'>

        <Track/>

      </div>

      <div className='w-full px-3 sm:px-4 md:px-0'>

        <div className='w-full h-auto py-4 sm:py-5 md:py-6 lg:h-[20vh] flex justify-center items-center'>

          <span className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-bold bg-amber-50 rounded-2xl sm:rounded-3xl md:rounded-4xl text-gray-700 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-center'>Search A vehicle</span>

        </div>
        <SearchBar/>
        
      </div>

    </div>

    
    </>
  )
}
