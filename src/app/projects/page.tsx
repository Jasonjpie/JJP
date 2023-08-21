'use client'

import ContactUs from "@/components/homepage/ContactUs"
import FilterProjects from "@/components/projects/FilterProjects"
import ProjectsList from "@/components/projects/ProjectsList"

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 mt-24 p-3">
        <div className="text-6xl  font-bold ">Our Projects</div>
        <FilterProjects />
        <ProjectsList />
        <ContactUs />
    </div>
  )
}

export default Page