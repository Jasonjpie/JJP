import Image from "next/image"
import Container from "../common/Container"
import { useEffect, useRef, useState } from "react"
import { backgroundImages } from "@/data"
import Link from "next/link"
type Props = {}

const HeroSection = (props: Props) => {
  const container = useRef<HTMLDivElement>(null)
  const [ Images, setImages ] = useState<string[]>([])
  useEffect(() => {
    setImages(backgroundImages)
  }, [])
  useEffect(() => {
    const handleClose = () => {
      if(container.current){
        const current = container.current
        if(current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
          setImages([...Images, ...backgroundImages])
        }
      }
    }
    container.current?.addEventListener('scroll', handleClose)
    return () => {
      container.current?.removeEventListener('scroll', handleClose)
    }
  })
  
  useEffect(() => {
    const timeRef = setInterval(() => {
      if(container.current){
        const current = container.current
        current.scrollLeft = current.scrollLeft + current.clientWidth 

      }
    }, 10000) 
    return () => {
      clearInterval(timeRef)
    }
  }, )

  return (
    <div className="w-auto  bg-[#101C3D] h-[100vh]">
      <div ref={container} className="flex absolute z-10 top-0 w-full h-[100vh] scroll-smooth overflow-x-hidden">
          {
            Images.map((image, index) => 
            <div key={index} className="relative shrink-0 w-full h-full">
              <Image className="object-cover" src={image} fill alt=""/>

            </div>
            )
          }
        </div>
      <Container>
              <div className="flex flex-wrap justify-around xl:items-center items-end gap-10 relative z-10 font-poppins p-3 lg:py-12 h-[100vh]">
                  <div className="text-white text-5xl lg:text-6xl font-bold lg:max-w-xl leading-relaxed">
                  UNLEASH THE <span className="text-primary">POTENTIAL</span>  OF YOUR NEW SPACE
                  </div>
                  <div className="flex flex-col gap-10">
                    <div className="max-w-md text-white leading-loose font-montserrat">
                      ​More than 100 building and housing projects that we have built. The building owner chose us over other contractors in USA, because our work is different
                    </div>
                    <div className="flex gap-3">
                      <Link href='/projects' className="px-8 py-2 w-fit rounded-md bg-white">
                          View Projects
                      </Link>
                      <Link href='/contact-us' className="px-8 py-2 w-fit rounded-md text-white bg-[#101C3D]">
                          Contact Us
                      </Link>
                    </div>
                    
                  </div>
                  
              </div>


      </Container>
      
    </div>
    
  )
}

export default HeroSection