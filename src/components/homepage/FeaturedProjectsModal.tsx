import Modal from 'react-modal'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Routes } from '../../../Routes'

type Props = {
    images:{url:string, name:string, project_id:string}[],
    isOpen:boolean,
    closeModal:() => void
}

const FeaturedProjectsModal = ({images, isOpen, closeModal}: Props) => {
    const [ index, setIndex ] = useState(0)

  return (
    <Modal className="flex justify-center h-[100vh] w-[100vw] items-center  p-5 bg-transparent" style={{overlay:{zIndex:1000}}}  isOpen={isOpen}>
            <div className="flex flex-col max-w-[1260px] h-fit px-16 pb-5 mx-auto w-full relative z-50 border-2 bg-white overflow-y-auto">
                <button className='absolute right-5 top-0' onClick={closeModal}><MdClose className='p-3' size={50}/></button>
                <Link href={`${Routes.PROJECTS}/${images[index].project_id}`} className="font-bold capitalize font-playfair text-2xl lg:text-4xl leading-relaxed p-5">
                    {images[index].name}
                </Link>               
                <div className="w-full space-y-5">
                    <div className="relative w-full h-[90%] lg:h-[65vh]">
                    <Image className="aspect-auto object-cover" src={images[index].url} fill alt=""/>
                    </div>
                    <div className="flex justify-center gap-3 w-[92%] mx-auto overflow-x-auto scroll-smooth no-scrollbar">
                        {
                        images.map((photo, _index) => 
                            <button onClick={() => setIndex(_index)} className={`rounded-md shrink-0 relative w-[100px] h-[100px] border-2 ${index === _index ? 'border-[#3AA39F]':'border-[#D1D1D8]'}`} key={_index}>
                                <Image className="p-2 rounded-md aspect-square object-cover" src={photo.url} fill alt=""/>
                            </button>
                        ) 
                        }
                    </div>
                    
                </div>
            </div>
        </Modal>
  )
}

export default FeaturedProjectsModal