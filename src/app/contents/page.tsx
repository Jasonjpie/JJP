'use client'

import HeroSection from "@/components/contents/HeroSection"
import PartByPart from "@/components/contents/PartByPart"
import ContactUs from "@/components/homepage/ContactUs"
import ExploreProjects from "@/components/contents/ExploreProjects"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-32 lg:px-32">
        <HeroSection/>
        <PartByPart />
        <ExploreProjects/>
        <ContactUs />
    </div>
  )
}

export default page