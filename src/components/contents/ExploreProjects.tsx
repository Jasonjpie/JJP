import { Projects, projects, videos } from "@/data"
import { Project, Video } from "@/types"
import Image from "next/image"
import { useRef, useState } from "react"
import  { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
type Props = {}

const ExploreProjects = (props: Props) => {
    const container = useRef<HTMLDivElement>(null)
    const [currentId, setCurrentId ] = useState(1)
    const project = Projects.find(project => parseInt(project.id) === currentId) as Project
    const handleScroll = (forward:boolean) => {
        if(container.current){
          if(forward){
            container.current.scrollLeft = container.current.scrollLeft + (container.current.clientWidth / 2)
          }else{
            container.current.scrollLeft = container.current.scrollLeft - (container.current.clientWidth / 2)
          }
        }
      }
  return (
    <div className="flex flex-col gap-10">
        <div className="font-poppins font-semibold text-5xl">Explore Projects</div>
        <div className="w-full flex flex-wrap items-end justify-between relative h-[500px]">
        <Image className="object-cover rounded-lg" src={project.frontview} fill alt=""/>
        <div className="relative z-40  flex flex-col gap-5 p-10">
            <div className="font-poppins text-white">
                <div className="font-semibold text-4xl">{project.name}</div>
                <div>{project.address}</div>
            </div>
            <button className="px-12 py-3 bg-white rounded-2xl self-start">
              Explore
            </button>
        </div>
        <div className="relative z-40  px-6  w-[500px] mb-5 lg:m-10">
            <button onClick={() => handleScroll(false)} className="hidden md:block absolute rounded-full z-20 bottom-1/4 left-0 bg-black p-3">
                <IoIosArrowBack className='text-white' />
            </button>
            <div ref={container} className="flex gap-3 overflow-x-auto lg:overflow-x-hidden scroll-smooth w-[440px] mx-auto">
                
                {
                    Projects.map(_project => 
                        <Image key={_project.id} onClick={() => setCurrentId(parseInt(_project.id))} className={`object-cover cursor-pointer rounded-lg ${parseInt(_project.id)=== currentId && ' border-[6px] border-white'}`} src={_project.frontview} width={100} height={100} alt=""/>
                        )
                }
            </div>
            <button onClick={() => handleScroll(true)} className="hidden md:block absolute rounded-full  bottom-1/4 right-0 z-20 bg-black p-3">
                <IoIosArrowForward className='text-white' />
            </button>
        </div>
        
        
        </div>
    </div>
  )
}

export default ExploreProjects