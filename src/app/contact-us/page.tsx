'use client'
import HeroSection from "@/components/contact-us/HeroSection"
import ContactUs from "@/components/homepage/ContactUs"
import Container from "@/components/common/Container"
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/contact-us/MapComponent'), {
  ssr: false, 
});
type Props = {}

const Page = (props: Props) => {
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

export default Page