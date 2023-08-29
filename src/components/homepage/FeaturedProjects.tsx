import { Projects, rooms } from "@/data"
import Image from "next/image"
import Container from "../common/Container"
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri"
import { useRef, useState } from "react"
import FeaturedProjectsModal from "./FeaturedProjectsModal"
import { kitchen } from "@/data/featuredProjects"
type Props = {}

const FeaturedProjects = (props: Props) => {
    const container = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [images, setImages] = useState<{name:string, project_id:string, url:string}[]>(kitchen)
    const handleScroll = (forward:boolean) => {
        if(container.current){
          if(forward){
            container.current.scrollLeft = container.current.scrollLeft + container.current.clientWidth / 2
          }else{
            container.current.scrollLeft = container.current.scrollLeft - container.current.clientWidth / 2
          }
        }
    }
  return (
    <Container>
        <div className="w-full my-24 space-y-16">
            <div className="grid lg:grid-cols-3 gap-5">
                <div className="flex flex-col relative col-span-1 mx-auto ml-10 p-5">
                    <div className="text-md font-bold text-gray-600 tracking-[8px] font-montserrat">/ PROJECT</div>
                    <div className="font-bold text-6xl max-w-[200px] leading-relaxed">Featured <span className="text-primary">Project</span></div>
                    <Image className="absolute -bottom-5 -left-5" src={`/Icons/ellipse.svg`} width={400} height={100} alt=''/>

                </div>
                <div className='col-span-2 leading-loose font-montserrat text-gray-500 text-2xl max-w-[850px] p-5'>
                    Take a look at our many finished projects that have been so amazing, we&apos;re sure you&apos;ll want them too. Projects completed with a very experienced and professional team.
                </div>
            </div>
            <div className="relative">
                <button onClick={() => handleScroll(false)} className="absolute hidden lg:block top-1/2 z-10 left-3 p-4 rounded-2xl bg-white">
                    <RiArrowLeftFill className="text-[#101C3D]" size={30} />
                </button>
                <div ref={container} className=" flex gap-2 lg:gap-10 h-[500px] sm:h-[800px] lg:h-[1100px] w-full overflow-x-scroll no-scrollbar scroll-smooth">
                    {rooms.map((room, index) =>
                    <button key={index} onClick={() =>{
                        setImages(room.images)
                        setIsOpen(true)
                        }
                        } 
                        className="h-[80%] w-[23%] shrink-0 even:self-end odd:self-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30 p-2">
                        <div className="flex items-center justify-center bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-lg lg:text-3xl font-bold">
                            {room.name}
                        </div>
                        <div className="relative h-[80%]">
                        <Image className='object-cover' src={room.image} fill alt={room.name}/>
                        </div>
                    </button>)}
                </div>
                <button onClick={() => handleScroll(true)} className="absolute hidden lg:block top-1/2 z-10 right-3 p-4 rounded-2xl bg-white">
                    <RiArrowRightFill className="text-[#101C3D]" size={30} />
                </button>
            </div>

        </div>
        <FeaturedProjectsModal isOpen={isOpen} closeModal={() => setIsOpen(false)} images={images}/>
    </Container>

    
    
  )
}

export default FeaturedProjects