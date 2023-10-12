'use client'
import HeroSection from "@/components/about-us/HeroSection"
import MakeUsDifferent from "@/components/about-us/MakeUsDifferent"
import OurTeam from "@/components/about-us/OurTeam"
import Container from "@/components/common/Container"
import Apply from "@/components/contact-us/Apply"
type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Container>
        <MakeUsDifferent />
        <OurTeam />
        <Apply />
      </Container>

    </div>
  )
}

export default page