import Image from "next/image"
import { BsArrowRight } from "react-icons/bs"

type Props = {}

const ProjectInspiration = (props: Props) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap lg:justify-end gap-5 items-center w-full h-fit bg-[#F3F4FC] p-10 pr-0">
        <div className='p-10 max-w-[550px] w-full space-y-5 h-fit'>
            {/* <div className="font-medium font-poppins text-5xl">50+ Beautiful rooms & inspirations</div>
            <div className="text-[#616161]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</div>
            <button className="text-white bg-black px-8 py-2">
                Explore More
            </button> */}
        </div>
        <div className="w-full flex justify-between gap-5">
        <div className="relative w-[60%] h-[350px] md:h-[450px] lg:h-[550px]">
            <Image className="aspect-auto" src={`/images/projects/bedroom.png`} fill alt=""/>
            <div className="absolute  flex left-5 bottom-5">
                <div className="flex flex-col justify-center w-44 lg:w-52 h-32 bg-white bg-opacity-70 p-5">
                    <div className="font-medium">01 --- Bed Room</div>
                    <div className="font-semibold text-2xl lg:text-3xl">Inner Peace</div>
                </div>
                <button className="bg-black p-2 lg:p-5 self-end ">
                    <BsArrowRight size={25} className='text-white' />
                </button>
            </div>
        </div>
        <div className="flex flex-col gap-5  w-[40%] h-[550px]">
            <Image className="aspect-auto" src={`/images/projects/bedroom-table.png`}  width={300} height={600} alt=""/>
            <div className="flex gap-2 h-[24%] p-5 pl-0">
                <div className="flex items-center justify-center p-1  w-8 h-8  border border-black rounded-full">
                    <div className="bg-black w-4 h-4 rounded-full"/>
                </div>
                <div className="flex items-center justify-center p-1  w-8 h-8 rounded-full">
                    <div className="bg-[#D8D8D8]  w-4 h-4 rounded-full"/>
                </div>
                <div className="flex items-center justify-center p-1  w-8 h-8 rounded-full">
                    <div className="bg-[#D8D8D8]  w-4 h-4 rounded-full"/>
                </div>
                <div className="flex items-center justify-center p-1  w-8 h-8 rounded-full">
                    <div className="bg-[#D8D8D8]  w-4 h-4 rounded-full"/>
                </div>
            </div>
        </div>
        </div>
        

    </div>
  )
}

export default ProjectInspiration