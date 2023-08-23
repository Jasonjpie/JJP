import Modal from 'react-modal'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

type Props = {
    images:{url:string, project_id:string}[],
    isOpen:boolean,
    closeModal:() => void
}

const FeaturedProjectsModal = ({images, isOpen, closeModal}: Props) => {
    const [ index, setIndex ] = useState(0)

  return (
    <Modal className="flex justify-center h-[100vh] w-[100vw] items-center  p-5 bg-transparent" style={{overlay:{zIndex:1000}}}  isOpen={isOpen}>
            <div className="max-w-[90%]  h-fit p-16 mx-auto w-full relative z-50 bg-white overflow-y-auto">
                <button className='absolute right-5 top-8' onClick={closeModal}><MdClose className='p-3' size={50}/></button>
                <Link href='' className="font-bold font-playfair text-2xl lg:text-4xl leading-relaxed py-2">
                    Beck
                </Link>               
                <div className="w-full space-y-5">
                    <div className="relative w-full h-[30vh] lg:h-[65vh]">
                    <Image className="aspect-auto object-cover" src={images[index].url} fill alt=""/>
                    </div>
                    <div className="flex justify-evenly w-full overflow-x-auto">
                        <button disabled={index == 0} className="space-y-2 hidden xl:block p-5" onClick={() => setIndex(Math.max(index - 1, 0))}>
                            <BsArrowLeft size={40}/>
                        </button>
                        <div className="flex gap-3">
                            {
                            images.map((photo, _index) => 
                                    <button onClick={() => setIndex(_index)} className={`rounded-md relative w-[100px] h-[100px] border-2 ${index === _index ? 'border-[#3AA39F]':'border-[#D1D1D8]'}`} key={_index}>
                                        <Image className="p-2 rounded-md aspect-square object-cover" src={photo.url} fill alt=""/>
                                    </button>
                            ) 
                            }
                        </div>
                        <button disabled={index === images.length - 1} className="space-y-2 hidden xl:block p-5" onClick={() => setIndex((index + 1) % images.length)}>
                            <BsArrowRight size={40}/>
                        </button>
                    </div>
                    
                </div>
            </div>
        </Modal>
  )
}

export default FeaturedProjectsModal