import { Navbar } from '../../Components/Navbar'
import { Footer } from '../../Components/Footer'
import { Daily } from '../../Components/Daily'
export const ContentPage = () => {
  return (
    
    <div className='flex-1 flex flex-col bg-gradient-to-r from-black to-gray-500'>
        <div className='flex flex-1 flex-row h-full'>
            <Navbar/>
            <Daily/>
        </div>
        <Footer/>
    </div>
  )
}

