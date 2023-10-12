import { Projects } from "@/data";
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Container from "../common/Container";
import { Project } from "@/types";
import { useInView } from "react-intersection-observer";


type FeaturedPropertyProps = {
  property:Project
}

const FeaturedProperty = ({property}: FeaturedPropertyProps) => {
  const {ref, inView } = useInView({ triggerOnce:true })
  return (
    <div
      ref={ref}
      className={`flex flex-col ${inView ? 'animated fadeInUp':'opacity-0'} gap-3 h-fit w-[50%] xs:w-[30%] lg:w-[22%] shrink-0  bg-white overflow-hidden transition duration-300 ease-in-out hover:scale-110 shadow-lg p-3 rounded-2xl`}
    >
      <div className="relative w-full aspect-square">
        <Image
          className="transition  object-cover  rounded-2xl"
          src={property.frontview}
          fill
          alt={property.name}
        />
      </div>
      
      <div className="h-[40%]">
        <div className="font-bold">{property.name}</div>
        <div className="text-gray-400">{property.address}</div>
      </div>
    </div>
  )
}

type Props = {};

const FeaturedProperties = (props: Props) => {

  const container = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (container.current?.offsetLeft || 0));
    setScrollLeft(container.current?.scrollLeft || 0);
    if (container.current) {
      container.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (container.current) {
      container.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !container.current) return;
    const x = e.pageX - (container.current.offsetLeft || 0);
    const deltaX = x - startX;
    container.current.scrollLeft = scrollLeft - deltaX;
  };

  const handleMouseLeave = () => {
    if (isDragging && container.current) {
      setIsDragging(false);
      container.current.style.cursor = 'grab';
    }
  };
  const handleScroll = (forward:boolean) => {
    if(container.current){
      if(forward){
        container.current.scrollLeft = container.current.scrollLeft + container.current.clientWidth 
      }else{
        container.current.scrollLeft = container.current.scrollLeft - container.current.clientWidth 
      }
    }
  }


  return (
    <div className="w-full bg-[#F5F5FF]">
      <Container>
        <div className="w-full p-5 py-24  space-y-10 ">
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="font-bold text-6xl leading-normal">
              Featured Projects
            </div>
            <div className=" leading-loose font-montserrat text-gray-500 text-2xl pt-5">
              Take a look at our many finished projects that have been so amazing,
              we&apos;re sure you&apos;ll want them too.
            </div>
            <div className="flex justify-end self-start gap-3">
              <button className="relative z-10 p-4 rounded-2xl bg-white" onClick={() => handleScroll(false)}>
                <RiArrowLeftFill className="text-primary" size={30} />
              </button>
              <button className="relative z-10 p-4 rounded-2xl bg-primary shadow-primary shadow-2xl" onClick={() => handleScroll(true)}>
                <RiArrowRightFill className="text-white" size={30} />
              </button>
            </div>
          </div>
          <div ref={container}       
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} 
            className="flex scroll-smooth gap-2 lg:gap-5 xl:gap-9 w-[100%] h-fit py-5 px-2 overflow-x-auto overflow-y-clip no-scrollbar">
            {Projects.map((property, index) => <FeaturedProperty key={index} property={property}/>)}
          </div>
        </div>
      </Container>
      
    </div>
    
  );
};

export default FeaturedProperties;