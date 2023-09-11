'use client'

import ContactUs from "@/components/homepage/ContactUs"
import FilterProjects from "@/components/projects/FilterProjects"
import ProjectsList from "@/components/projects/ProjectsList"
import { Projects } from "@/data"
import { Project } from "@/types"
import { useState } from "react"

type Props = {}

const Page = (props: Props) => {
  const [projects, setProjects] = useState(Projects)
  return (
    <div className="flex flex-col gap-10 mt-24 p-3">
        <div className="text-6xl  font-bold ">Our Projects</div>
        <FilterProjects setProjects={(a:Project[]) => setProjects(a)}/>
        <ProjectsList projects={projects}/>
        <ContactUs />
    </div>
  )
}

export default Page