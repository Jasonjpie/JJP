'use client'
import HeroSection from "@/components/contact-us/HeroSection"
import ContactUs from "@/components/homepage/ContactUs"
import MapComponent from "@/components/contact-us/MapComponent"
import Container from "@/components/common/Container"
type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-24">
        <HeroSection />
        <Container>
          <ContactUs />
          <MapComponent />
        </Container>
        
    </div>
  )
}

export default page