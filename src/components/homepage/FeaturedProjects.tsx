import { Projects, bathrooms, diningrooms, featuredProjects, kitchens, livingrooms } from "@/data"
import Image from "next/image"
import Link from "next/link"
import Container from "../common/Container"
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri"
import { Routes } from "../../../Routes"
import { useState } from "react"
import FeaturedProjectsModal from "./FeaturedProjectsModal"
type Props = {}

const FeaturedProjects = (props: Props) => {
    const [ index, setIndex ] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [images, setImages] = useState(kitchens)
    const project = Projects[index]
  return (
    <Container>
        <div className="w-full my-24 space-y-16">
            <div className="grid lg:grid-cols-3 gap-5">
                <div className="flex flex-col relative col-span-1 mx-auto ml-10 p-5">
                    <div className="text-md font-bold text-gray-600 tracking-[8px] font-montserrat">/ PROJECT</div>
                    <div className="font-bold text-6xl max-w-[200px] leading-relaxed">Featured <span className="text-primary">Project</span></div>
                    <Image className="absolute -bottom-5 -left-5" src={`/Icons/ellipse.svg`} width={400} height={100} alt={project.name}/>

                </div>
                <div className='col-span-2 leading-loose font-montserrat text-gray-500 text-2xl max-w-[850px] p-5'>
                    Take a look at our many finished projects that have been so amazing, we&apos;re sure you&apos;ll want them too. Projects completed with a very experienced and professional team.
                </div>
            </div>
            <div className="relative grid lg:grid-cols-4 grid-cols-2 gap-10 h-[1100px] ">
                 {/* <button disabled={index === 0} onClick={() => setIndex(index - 1)} className="absolute top-1/2 z-10 left-3 p-4 rounded-2xl bg-white cursor-pointer">
                    <RiArrowLeftFill className="text-[#101C3D]" size={30} />
                </button>
                <button disabled={index === Projects.length - 1} onClick={() => setIndex(index + 1)} className="absolute top-1/2 z-10 right-3 p-4 rounded-2xl bg-white cursor-pointer">
                    <RiArrowRightFill className="text-[#101C3D]" size={30} />
                </button> */}
                <button onClick={() =>{
                    setImages(kitchens)
                     setIsOpen(true)
                    }
                     } 
                     className="h-[80%] self-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30 p-2">
                    <div className="bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-2xl font-bold pt-8 pl-8">
                        / 01 Kitchen
                    </div>
                    <div className="relative h-[80%]">
                    <Image className='object-cover' src={project.kitchen as string} fill alt={project.name}/>
                    </div>
                </button>
                <button onClick={() =>{
                    setImages(bathrooms)
                     setIsOpen(true)
                    }
                     }  className="h-[80%] self-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30">
                    <div className="bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-2xl font-bold pt-8 pl-8">
                        / 02 Bathrooms
                    </div>
                    <div className="relative h-[80%]">
                    <Image className='object-cover' src={project.bathroom as string} fill alt={project.name}/>
                    </div>
                </button >
                <button onClick={() =>{
                    setImages(livingrooms)
                     setIsOpen(true)
                    }
                     }   className="h-[80%] self-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30">
                    <div className="bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-2xl font-bold pt-8 pl-8">
                        / 03 Living Rooms
                    </div>
                    <div className="relative h-[80%]">
                    <Image className='object-cover' src={project.livingroom as string} fill alt={project.name}/>
                    </div>
                </button>
                <button onClick={() =>{
                    setImages(diningrooms)
                     setIsOpen(true)
                    }
                     }  className="h-[80%] self-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30">
                    <div className="bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-2xl font-bold pt-8 pl-8">
                        / 04 Dining Rooms
                    </div>
                    <div className="relative h-[80%]">
                    <Image className='object-cover' src={project.diningroom as string} fill alt={project.name}/>
                    </div>
                </button>

            </div>
        </div>
        <FeaturedProjectsModal isOpen={isOpen} closeModal={() => setIsOpen(false)} images={images}/>
    </Container>

    
    
  )
}

export default FeaturedProjects