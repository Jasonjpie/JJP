import { Projects as projects } from "@/data"
import { Project } from "@/types";
import Image from "next/image"
import { useEffect, useState, useRef } from "react";
import { RiArrowDropRightLine } from 'react-icons/ri';
import { useInView } from "react-intersection-observer";
import '@/app/animation.css'
import Link from "next/link";
import { Routes } from "../../../Routes";

type ProjectProps = {
  category: string
}

const ProjectCard = ({ category }: ProjectProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 })
  const project = projects.find(project => project.type === category) as Project;
  return (
    <Link ref={ref} href={`${Routes.PROJECTS}?type=${category}`} className={`relative ${inView ? 'animated fadeInUp' : 'opacity-0'} rounded-md h-[500px] group-hover:opacity-25 shadow-lg`}>
      <div className="relative rounded-md h-[100%] overflow-hidden">
        <Image className="p-0 m-0 object-cover object-center" src={project.frontview} layout="fill" alt='' />
      </div>
      <div className="absolute bottom-0 left-10 text-xl xl:text-3xl max-w-[500px] font-bold text-white h-[20%] group-hover:opacity-25 capitalize">
        {category}
        <div className="text-md xl:text-lg font-semibold flex items-center">
          <div>View Project</div>
          <RiArrowDropRightLine className="" size={50} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">
          Description goes here
        </div>
      </div>
    </Link>
  )
}
type Props = {}

const category = ["traditional", "farmhouse", "modern", "apartment"]

const Projects = (props: Props) => {

  return (
    <div className="w-full  flex flex-col gap-5 my-44 ">
      <div className="font-bold text-5xl text-center">OUR PROJECTS</div>
      <div className="text-center mx-auto font-montserrat text-gray-500 text-2xl p-5">
        JJP Construction: Bringing Your Ideas to Life in Los Angeles, CA Since 2010. Explore Our Diverse Portfolio of Small and Large-Scale Projects, Where We Remain Involved from Concept to Implementation.      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 p-2 h-fit">
        {
          category.map((category, index) => <ProjectCard key={index} category={category} />)
        }


      </div>

    </div>
  )
}

export default Projects