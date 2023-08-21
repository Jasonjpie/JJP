import VideoComponent from "./VideoComponent"
import Image from "next/image"
import { Rooms, videos } from "@/data"
import { CiPlay1 } from "react-icons/ci"
import { useEffect, useState } from "react"
import { Video } from "@/types"
type Props = {}

const PartByPart = (props: Props) => {
    const [currentId, setCurrentId ] = useState(1)

  return (
    <div className="relative space-y-8 p-3">
      <div className="font-poppins font-semibold text-2xl lg:text-5xl">Go Part by Part</div>
      <div className="font-poppins text-md lg:text-2xl">Immerse yourself in property tours, insightful market trends, expert interviews, and inspiring success stories.</div>
        {videos.map(video => 
        currentId === video.id &&
         <VideoComponent key={video.id} title={video.title} source={video.source} poster={video.poster} >
            <> 
                <div className='flex flex-col lg:gap-5 font-poppins absolute media-buffering:hidden media-playing:hidden bottom-2 lg:bottom-16 left-2 lg:left-10 z-40 max-w-[90%] text-white'>
                    <Image className=" rounded-lg" src='/Icons/living-house.svg' width={30} height={30} alt=""/>
                    <div className='text-xl lg:text-3xl font-semibold'>Watch The Journey</div>
                    <div className='text-lg lg:text-2xl'>Setup a stream to start a new live video now  </div>
                </div>
                <div className="absolute z-50 flex flex-col gap-3 top-5 right-5 w-[30%] h-full">
                    {
                    videos.map(video => 
                        <button key={video.id} onClick={() => setCurrentId(video.id)} className={`relative media-buffering:hidden media-playing:hidden rounded-lg w-[100%] h-[30%] ${video.id === currentId && 'border-4 border-white'}`}>
                            <Image className=" rounded-lg" src={video.poster} fill alt=""/>
                            <div className='absolute z-40 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6  lg:w-12 lg:h-12 flex justify-center items-center  rounded-full bg-white bg-opacity-50'>
                                <CiPlay1 className='text-white text-xs lg:text-xl' />
                            </div>
                        </button>
                        )
                    }
                </div>
            </>
         
        </VideoComponent>)}
        <div className="flex flex-wrap gap-8 mx-auto w-fit">
          {
            Rooms.map((room, index) => 
              <button key={index} className="flex flex-col items-center gap-3">
                <div className="p-1 border-4 aspect-square border-black rounded-full">
                  <div className="w-16 h-16 p-5 bg-gray-700 rounded-full">
                    <Image className="" src={`/Icons/${room.icon}`} width={50} height={50} alt=""/>
                  </div>
                </div>
                <div className="font-poppins font-medium text-sm">{room.name}</div>
              </button>
              
              )
          }
        </div>
    </div>
    
  )
}

export default PartByPart