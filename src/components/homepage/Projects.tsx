import { Projects as projects } from "@/data"
import { Project } from "@/types";
import Image from "next/image"
import { useEffect, useState } from "react";
import { RiArrowDropRightLine } from 'react-icons/ri';
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
    <div className="w-full flex flex-col gap-5 my-44 md:px-32">
        <div className="font-bold text-5xl text-center">OUR PROJECTS</div>
        <div className="text-center max-w-lg mx-auto font-montserrat text-gray-500 text-xl p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 p-2 h-[1400px] ">
            {
                displayedProjects.map((project, index) => (
           <div key={index} className="relative rounded-md h-[100%]">
             <div className="relative rounded-md h-full overflow-hidden">
               <Image className="p-0 m-0 object-cover object-center" src={project.frontview} layout="fill" alt=''/>
             </div>
            <div className="absolute bottom-12 left-10 text-5xl max-w-[500px] font-bold text-white leading-relaxed h-[20%]">
              {project.category}
        
              <div className="text-2xl flex">
              View Project <RiArrowDropRightLine className="pb-3" size={50} />
              </div>
              
              </div>
            </div>
                ))
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