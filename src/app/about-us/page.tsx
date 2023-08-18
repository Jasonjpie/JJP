'use client'
import HeroSection from "@/components/about-us/HeroSection"
import MakeUsDifferent from "@/components/about-us/MakeUsDifferent"
import OurTeam from "@/components/about-us/OurTeam"
import PartnerCompanies from "@/components/about-us/PartnerCompanies"
import NavBar from "@/components/common/NavBar"
type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
       <NavBar /> 
       <HeroSection /> 
       <MakeUsDifferent /> 
       <OurTeam /> 
       <PartnerCompanies /> 
    </div>
  )
}

export default page