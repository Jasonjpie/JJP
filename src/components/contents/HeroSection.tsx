import VideoComponent from "./VideoComponent"
import { videos } from "@/data"
import { useRef } from "react"
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
type Props = {}

const HeroSection = (props: Props) => {
  const container = useRef<HTMLDivElement>(null)
  const handleScroll = (forward:boolean) => {
    if(container.current){
      if(forward){
        container.current.scrollLeft = container.current.scrollLeft + container.current.clientWidth 
      }else{
        container.current.scrollLeft = container.current.scrollLeft - container.current.clientWidth 
      }
    }
  }
  return (
    <div className=" h-fit items-center justify-around relative p-3">
      
      <div ref={container} className="flex overflow-auto lg:overflow-x-hidden scroll-smooth mt-24">
        <button onClick={() => handleScroll(false)} className="items-center hidden lg:flex justify-center absolute transform translate-y-1/3 top-1/2 left-5 media-buffering:hidden media-playing:hidden z-40  bg-white rounded-full w-6 h-6  lg:w-12 lg:h-12">
          <BsArrowLeftShort size={30}/>
        </button>
        {videos.map(video => 
        <VideoComponent key={video.id} title={video.title} source={video.source} poster={video.poster} >
          <div className='flex flex-col lg:gap-5 font-poppins absolute media-buffering:hidden media-playing:hidden bottom-2 lg:bottom-16 left-2 lg:left-10 z-30 max-w-[90%] text-white'>
              <div className='text-xl lg:text-3xl font-semibold'>Watch The Whole Journey</div>
              <div className='text-md lg:text-2xl hidden lg:block'>Welcome to our Media Page! Here, you can embark on a journey to explore not only the beautifully crafted homes we offer but also the stories of our valued customers who have found their dream homes with us. </div>
          </div>
        </VideoComponent>)}
        <button onClick={() => handleScroll(true)} className="items-center hidden lg:flex justify-center absolute transform translate-y-1/3 top-1/2 right-5 media-playing:hidden media-buffering:hidden  z-40  bg-white rounded-full w-6 h-6  lg:w-12 lg:h-12">
          <BsArrowRightShort size={30} />
        </button>
      </div>
      
    </div>
    
  )
}

export default HeroSection