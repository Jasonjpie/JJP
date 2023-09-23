'use client'

import HeroSection from "@/components/contents/HeroSection"
import PartByPart from "@/components/contents/WhatWeCanDo"
import ContactUs from "@/components/homepage/ContactUs"
import ExploreProjects from "@/components/contents/ExploreProjects"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-32">
        <HeroSection/>
        <PartByPart />
        <ExploreProjects/>
        <ContactUs />
    </div>
  )
}

export default page