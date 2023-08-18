import Image from "next/image"
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full relative bg-[#101C3D] p-10">
        <div className="flex flex-col gap-10 font-poppins p-3 lg:p-12 lg:pt-32">
            <div className="text-white text-5xl lg:text-6xl font-bold lg:max-w-xl leading-snug">
            UNLEASH THE <span className="text-primary">POTENTIAL</span>  OF YOUR NEW SPACE
            </div>
            <div className="max-w-md text-white leading-loose">
               ​More than 100 building and housing projects that we have built. The building owner chose us over other contractors in USA, because our work is different
            </div>
            <div className="px-5 py-4 w-fit rounded-full text-white bg-[#416FF4]">
                Explore our projects
            </div>
        </div>
        <Image className="relative z-10" src='/images/house-livingroom.png' width={500} height={1000} alt=""/>
        <div className="absolute bottom-0 hidden 2xl:block left-0 w-0 h-0
          border-t-[20vw] border-t-transparent
          border-r-[94vw] border-r-white
          border-b-[0px] border-b-transparent">
        </div>
        

    </div>
  )
}

export default HeroSection