import { projects } from "@/data"
import Image from "next/image"

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-5 my-44 ">
        <div className="font-bold text-5xl text-center">OUR PROJECTS</div>
        <div className="text-center max-w-lg mx-auto font-montserrat text-gray-500 text-xl p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 p-2">
            {
                projects.map((project, index) => (
           <div key={index} className="relative rounded-md">
             <Image className="p-0 m-0" src={`/images/projects/${project.image}`} width={600} height={900} alt=''/>
             {/* <div className="absolute bottom-24 left-10 text-5xl max-w-[500px] font-bold text-white leading-relaxed">{project.name}</div> */}
             {/* <div className="absolute bottom-12 left-10 text-white text-2xl">View Project</div> */}
            </div>
                ))
            }
            
            
        </div>
        <button className="py-3 px-12 bg-gradient-to-br w-fit mx-auto mt-5 from-[#696CE6] to-[#1C1F9F] text-white">
          Discover More
        </button>
        
    </div>
  )
}

export default Projects