import { Projects as projects } from "@/data"
import { Project } from "@/types";
import Image from "next/image"
import { useEffect, useState, useRef } from "react";
import { RiArrowDropRightLine } from 'react-icons/ri';
import { useInView } from "react-intersection-observer";
import '@/app/animation.css'

type ProjectProps = {
  project:Project
}

const ProjectCard = ({project}: ProjectProps) => {
  const { ref, inView } = useInView({triggerOnce:true, threshold:0})
  return (
    <div ref={ref} className={`relative ${inView ? 'animated fadeInUp':'opacity-0'} rounded-md h-[500px] group-hover:opacity-25 shadow-lg`}>
      <div className="relative rounded-md h-[100%] overflow-hidden">
        <Image className="p-0 m-0 object-cover object-center" src={project.frontview} layout="fill" alt=''/>
      </div>
      <div className="absolute bottom-0 left-10 text-3xl max-w-[500px] font-bold text-white h-[20%] group-hover:opacity-25">
        {project.category}
        <div className="text-lg font-semibold flex items-center">
          <div>View Project</div>
          <RiArrowDropRightLine className="" size={50} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">
          Description goes here
        </div>
      </div>
   </div>
  )
}
type Props = {}

const Projects = (props: Props) => {
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [showMore, setShowMore] = useState<boolean>(true);

  useEffect(() => {
    setDisplayedProjects(projects.slice(0, 6));
  }, []);

  const handleDiscoverMore = () => {
    const remainingProjects = projects.slice(displayedProjects.length, displayedProjects.length + 3);
    const newDisplayedProjects = [...displayedProjects, ...remainingProjects];
    setDisplayedProjects(newDisplayedProjects);

    if (newDisplayedProjects.length === projects.length) {
      setShowMore(false);
    }
  };

  return (
    <div className="w-full  flex flex-col gap-5 my-44 ">
        <div className="font-bold text-5xl text-center">OUR PROJECTS</div>
        <div className="text-center mx-auto font-montserrat text-gray-500 text-2xl p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 p-2 h-fit">
            {
                displayedProjects.map((project, index) => <ProjectCard key={index} project={project}/>)
            }
            
            
        </div>
        {showMore && (
          <button className="py-3 px-12 bg-gradient-to-br w-fit mx-auto mt-5 bg-[#101C3D] text-white" onClick={handleDiscoverMore}>
            Discover More
          </button>
        )}
        
    </div>
  )
}

export default Projects