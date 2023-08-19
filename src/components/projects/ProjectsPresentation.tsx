import { useState } from "react"
import Image from "next/image"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

type Props = {
    images: {url:string, name:string}[]
}

const ProjectsPresentation = ({images}: Props) => {
    const [ index, setIndex ] = useState(0)
  return (
    <div className="w-full space-y-5">
        <div className="flex items-center justify-end gap-2 w-full"> 
            <span className="font-bold text-2xl">
                {index < 10 ? '0' + (index + 1):index + 1}
            </span>
            <span className="text-xl font-semibold text-[#A2A3B1]">/</span>
            <span className="text-xl font-semibold text-[#A2A3B1]">{images.length < 10 ? '0' + images.length:images.length}</span>
        </div>
        <div className="relative w-full h-[300px] xs:h-[500px] lg:h-[700px]">
        <Image className="aspect-auto" src={images[index].url} fill alt=""/>
        </div>
        <div className="flex justify-evenly w-full overflow-x-auto">
            <button disabled={index == 0} className="space-y-2 hidden xl:block p-5" onClick={() => setIndex(Math.max(index - 1, 0))}>
                <BsArrowLeft size={40}/>
                {/* <div className="text-xs font-semibold font-poppins">BATH ROOM</div> */}
            </button>
            <div className="flex gap-3">
                {
                   images.map((photo, _index) => 
                        <button onClick={() => setIndex(_index)} className={`rounded-md relative w-[100px] h-[100px] border-2 ${index === _index ? 'border-[#3AA39F]':'border-[#D1D1D8]'}`} key={_index}>
                            <Image className="p-2 rounded-md aspect-square" src={photo.url} fill alt=""/>
                        </button>
                   ) 
                }
            </div>
            <button disabled={index === images.length - 1} className="space-y-2 hidden xl:block p-5" onClick={() => setIndex((index + 1) % images.length)}>
                <BsArrowRight size={40}/>
                {/* <div className="text-xs font-semibold font-poppins">LIVING ROOM</div> */}
            </button>
        </div>
        
    </div>
  )
}

export default ProjectsPresentation