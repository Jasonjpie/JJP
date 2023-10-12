import { Projects, rooms } from "@/data"
import Image from "next/image"
import Container from "../common/Container"
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri"
import { useEffect, useRef, useState } from "react"
import FeaturedProjectsModal from "./FeaturedProjectsModal"
import { kitchen } from "@/data/featuredProjects"
import { useInView } from "react-intersection-observer"


type FeaturedProjectProps = {
  index: number,
  room: {
    name: string;
    image: string;
    images: {
      project_id: string;
      name: string;
      url: string;
    }[]
  }
}

const FeaturedProject = ({ index, room }: FeaturedProjectProps) => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState<{ name: string, project_id: string, url: string }[]>(kitchen)
  return (
    <>

      <button ref={ref} onClick={() => {
        setImages(room.images)
        setIsOpen(true)
      }
      }
        className={`h-[80%] w-[50%] sm:w-[30%] lg:w-[23%] shrink-0 ${inView ? index % 2 === 0 ? 'animated fadeInDown' : 'animated fadeInUp' : 'opacity-0'} hover:-translate-y-1 hover:scale-110 p-2`}>
        <div className="flex items-center justify-center bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-lg lg:text-3xl font-bold">
          {room.name}
        </div>
        <div className="relative h-[80%]">
          <Image className='object-cover' src={room.image} fill alt={room.name} />
        </div>
      </button>
      <FeaturedProjectsModal isOpen={isOpen} closeModal={() => setIsOpen(false)} images={images} />
    </>
  )
}
type Props = {}

const FeaturedProjects = (props: Props) => {
  const container = useRef<HTMLDivElement>(null)


  const handleScroll = (forward: boolean) => {
    if (container.current) {
      if (forward) {
        container.current.scrollLeft = container.current.scrollLeft + container.current.clientWidth / 2
      } else {
        container.current.scrollLeft = container.current.scrollLeft - container.current.clientWidth / 2
      }
    }
  }
  return (
    <Container>
      <div className="w-full my-24 space-y-16">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="flex flex-col relative col-span-1 mx-auto ml-10 p-5">
            <div className="text-md font-bold text-gray-600 tracking-[8px] font-montserrat">PART OF HOUSE</div>
            <div className="font-bold text-6xl max-w-[200px] leading-relaxed">Featured <span className="text-primary">Sections</span></div>
            <Image className="absolute -bottom-5 -left-5" src={`/Icons/ellipse.svg`} width={400} height={100} alt='' />

          </div>
          <div className='col-span-2 leading-loose font-montserrat text-gray-500 text-2xl max-w-[850px] p-5'>
            Take a look at some of the highlighted features areas!                </div>
        </div>
        <div className="relative">
          <button onClick={() => handleScroll(false)} className="absolute top-1/2 z-10 left-3 p-4 rounded-2xl bg-white">
            <RiArrowLeftFill className="text-[#101C3D]" size={30} />
          </button>
          <div ref={container} className=" flex gap-2 sm:gap-5 xl:gap-10 h-[500px] sm:h-[800px] lg:h-[1100px] w-full overflow-y-clip overflow-x-scroll no-scrollbar scroll-smooth">
            {rooms.map((room, index) => <FeaturedProject key={index} index={index} room={room} />)}
          </div>
          <button onClick={() => handleScroll(true)} className="absolute top-1/2 z-10 right-3 p-4 rounded-2xl bg-white">
            <RiArrowRightFill className="text-[#101C3D]" size={30} />
          </button>
        </div>

      </div>
    </Container>



  )
}

export default FeaturedProjects