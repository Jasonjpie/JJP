import Modal from 'react-modal'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Routes } from '../../../Routes'

type Props = {
    images:{url:string, name:string, project_id:string}[],
    isOpen:boolean,
    closeModal:() => void
}

const FeaturedProjectsModal = ({images, isOpen, closeModal}: Props) => {
    const [ index, setIndex ] = useState(0)
    const modal = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClick = (e:MouseEvent) => {
            if(modal.current && !modal.current.contains(e.target as Node)){
                closeModal()
            }

        }
        const handleKeyPress = (e:KeyboardEvent) =>{
            console.log('here')
            if(e.key === 'Escape'){
                closeModal()
            }
        }

        document.addEventListener('click', handleClick)
        document.addEventListener('keypress', handleKeyPress)
        return () => {
            document.removeEventListener('click', handleClick)
            document.removeEventListener('keypress', handleKeyPress)
        }
    })

  return (
    <Modal className="flex justify-center h-[100vh] w-[100vw] items-center  p-5 bg-transparent" style={{overlay:{zIndex:1000}}}  isOpen={isOpen}>
            <div ref={modal} className="flex flex-col max-w-[1260px] h-fit px-5 pb-5 mx-auto w-full relative z-50 border-2 bg-white overflow-y-auto">
                <button className='absolute right-5 top-0' onClick={closeModal}><MdClose className='p-3' size={50}/></button>
                <Link href={`${Routes.PROJECTS}/${images[index].project_id}`} className="font-bold capitalize font-playfair text-2xl lg:text-4xl leading-relaxed p-5">
                    <button className="flex items-center gap-3 px-5 py-2 text-white bg-[#416FF4] rounded-md">
                        <div>{images[index].name}</div>
                        <BsArrowRight size={25}/>
                    </button>
                </Link>               
                <div className="w-full space-y-5">
                    <div className="relative w-full h-[30vh] sm:h-[65vh] max-h-[800px]">
                    <Image className="aspect-auto object-cover" src={images[index].url} fill alt=""/>
                    </div>
                    <div className="flex gap-3 max-w-[92%] w-fit mx-auto overflow-x-auto scroll-smooth no-scrollbar">
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