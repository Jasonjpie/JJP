import { Projects } from "@/data"
import { Project } from "@/types"
import Image from "next/image"
import Link from "next/link"
type Props = {
  projects:Project[]
}

const ProjectsList = ({projects}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {projects.map((project, index) => 
        <Link href={`/projects/${project.id}`} key={index} className="relative w-full h-96">
            <Image className=" object-cover aspect-video" src={project.frontview} fill alt=''/>
            <div className="absolute flex flex-col justify-center bottom-5 left-6 bg-black h-24 w-[90%]">
              <div className="flex justify-between px-5">
                <div className="text-gray-400 text-sm">Product Name</div>
                <div className="text-gray-400 text-sm">Year</div>
              </div>
              <div className="flex justify-between px-5">
                <div className="text-white text-2xl font-bold font-poppins">{project.name}</div>
                <div className="text-white text-2xl font-bold font-poppins">{project.year}</div>
              </div>
            </div>
        </Link>)}
    </div>
  )
}

export default ProjectsList