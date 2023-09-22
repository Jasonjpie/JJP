import { useEffect, useRef } from "react"
import Modal from "react-modal"
import Image from "next/image"
import { MdClose } from "react-icons/md"

type Props = {
    image:string,
    isOpen:boolean,
    closeModal:() => void
}

const ImageModal = ({image, isOpen, closeModal}: Props) => {
    const modal = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClick = (e:MouseEvent) => {
            if(modal.current && !modal.current.contains(e.target as Node)){
                closeModal()
            }

        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    })

  return (
    <Modal className="flex justify-center h-[100vh] w-[100vw] items-center  p-5 bg-transparent" style={{overlay:{zIndex:1000}}}  isOpen={isOpen}>
        <div ref={modal} className="flex flex-col max-w-[1360px] h-[90%] px-5 pb-5 mx-auto w-full relative z-50 border-2 bg-white">
            <button className='absolute -right-5 -top-5 z-50'  onClick={closeModal}>
                <MdClose className='rounded-full bg-white border p-3' size={50}/>
            </button>
            <Image className="object-cover" src={image} fill alt="" />
        </div>
    </Modal>
  )
}

export default ImageModal