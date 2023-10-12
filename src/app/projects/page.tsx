'use client'

import ContactUs from "@/components/homepage/ContactUs"
import FilterProjects from "@/components/projects/FilterProjects"
import ProjectsList from "@/components/projects/ProjectsList"
import { Projects } from "@/data"
import { Category, Project } from "@/types"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

type Props = {}

const Page = (props: Props) => {
  const [projects, setProjects] = useState(Projects)
  const params = useSearchParams()
  const type = params.get('type') as Category
  return (
    <div className="flex flex-col gap-10 mt-24 p-3">
        <div className="text-6xl  font-bold ">Our Projects</div>
        <FilterProjects setProjects={(a:Project[]) => setProjects(a)} type={type}/>
        <ProjectsList projects={projects}/>
        <ContactUs />
    </div>
  )
}

export default Page