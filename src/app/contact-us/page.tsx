'use client'
import NavBar from "@/components/common/NavBar"
import HeroSection from "@/components/contact-us/HeroSection"
import ContactUs from "@/components/homepage/ContactUs"
import MapComponent from "@/components/contact-us/MapComponent"
import Footer from "@/components/common/Footer"
type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-24">
        <NavBar />
        <HeroSection />
        <ContactUs />
        <MapComponent />
        <Footer />
    </div>
  )
}

export default page