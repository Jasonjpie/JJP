import Image from "next/image"
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="w-full relative bg-[#101C3D] h-[1000px]">
        <div className="flex flex-col gap-10 p-12 pt-32">
            <div className="text-white text-6xl font-bold max-w-xl leading-snug">
            UNLEASH THE <span className="text-primary">POTENTIAL</span>  OF YOUR NEW SPACE
            </div>
            <div className="max-w-md text-white leading-loose">
               ​More than 100 building and housing projects that we have built. The building owner chose us over other contractors in USA, because our work is different
            </div>
            <div className="px-5 py-4 w-fit rounded-full text-white bg-[#416FF4]">
                Explore our projects
            </div>
        </div>
        <Image className="absolute top-20 right-4 z-10" src='/images/house-livingroom.png' width={700} height={1200} alt=""/>
        <div className="absolute bottom-0 w-fit h-0
        border-t-[300px] border-t-transparent
        border-r-[1440px] border-r-white
        border-b-[0px] border-b-transparent">
        </div>

    </div>
  )
}

export default HeroSection