'use client'
import HeroSection from "@/components/about-us/HeroSection"
import MakeUsDifferent from "@/components/about-us/MakeUsDifferent"
import OurTeam from "@/components/about-us/OurTeam"
import PartnerCompanies from "@/components/about-us/PartnerCompanies"
import Container from "@/components/common/Container"
type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
       <HeroSection /> 
       {/* <Container> */}
        <MakeUsDifferent /> 
        <OurTeam /> 
        <PartnerCompanies /> 
       {/* </Container> */}
       
    </div>
  )
}

export default page