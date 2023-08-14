import { Projects } from "@/data"
import Image from "next/image"
type Props = {}

const ProjectsList = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {Projects.map((project, index) => 
        <div key={index} className="relative w-full">
            <Image className="" src={`/images/projects/${project}`} width={600} height={900} alt=''/>
            <div className="absolute flex flex-col justify-center bottom-5 left-6 bg-black h-24 w-[90%]">
              <div className="flex justify-between px-5">
                <div className="text-gray-400 text-sm">Product Name</div>
                <div className="text-gray-400 text-sm">Year</div>
              </div>
              <div className="flex justify-between px-5">
                <div className="text-white text-2xl font-bold font-poppins">Edoardo Sofa</div>
                <div className="text-white text-2xl font-bold font-poppins">2023</div>
              </div>
            </div>
        </div>)}
    </div>
  )
}

export default ProjectsList