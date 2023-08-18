import { Projects } from "@/data"
import { useState } from "react"
import Image from "next/image"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

type Props = {}

const ProjectsPresentation = (props: Props) => {
    const [ index, setIndex ] = useState(1)
    const photos = Projects
  return (
    <div className="w-full space-y-5">
        <div className="flex items-center justify-end gap-2 w-full"> 
            <span className="font-bold text-2xl">
                {index < 10 ? '0' + index:index}
            </span>
            <span className="text-xl font-semibold text-[#A2A3B1]">/</span>
            <span className="text-xl font-semibold text-[#A2A3B1]">{photos.length < 10 ? '0' + photos.length:photos.length}</span>
        </div>
        <div className="relative w-full h-[300px] xs:h-[500px] lg:h-[700px]">
        <div className="overflow-hidden after:clear-both">
            {
                photos.map(photo => 
                <Image className="hidden duration-700 ease-in-out" src={`/images/projects/${photos[index - 1]}`} fill alt="" key={""} />
                    )
            }
        </div>
        <Image className="aspect-auto" src={`/images/projects/${photos[index - 1]}`} fill alt=""/>
        </div>
        <div className="flex justify-evenly w-full overflow-x-auto">
            <button disabled={index == 1} className="space-y-2 hidden xl:block p-5" onClick={() => setIndex(Math.max(index - 1, 1))}>
                <BsArrowLeft size={40}/>
                <div className="text-xs font-semibold font-poppins">BATH ROOM</div>
            </button>
            <div className="flex gap-3">
                {
                   photos.map((photo, _index) => 
                   <button onClick={() => setIndex(_index + 1)} className={`rounded-md relative w-[100px] h-[100px] border-2 ${index === _index + 1 ? 'border-[#3AA39F]':'border-[#D1D1D8]'}`} key={index}>
                     <Image className="p-2 rounded-md aspect-square" src={`/images/projects/${photo}`} fill alt=""/>
                    </button>
                   ) 
                }
            </div>
            <button disabled={index === photos.length} className="space-y-2 hidden xl:block p-5" onClick={() => setIndex((index + 1) % (photos.length + 1))}>
                <BsArrowRight size={40}/>
                <div className="text-xs font-semibold font-poppins">LIVING ROOM</div>
            </button>
        </div>
        
    </div>
  )
}

export default ProjectsPresentation