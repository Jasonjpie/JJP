'use client'
import NavBar from '@/components/common/NavBar'
import FeaturedProperties from '@/components/homepage/FeaturedProperties'
import HeroSection from '@/components/homepage/HeroSection'
import Footer from '@/components/common/Footer'
import Benefits from '@/components/homepage/Benefits'
import FeaturedProjects from '@/components/homepage/FeaturedProjects'
import Projects from '@/components/homepage/Projects'
import ContactUs from '@/components/homepage/ContactUs'
import Testmonials from '@/components/homepage/Testmonials'
import Container from '@/components/common/Container'
export default function Home() {
  return (
    <div>
      <NavBar transparent={true} dark={true} />
      <HeroSection />
      <FeaturedProperties />
      <FeaturedProjects />
      <div id='Benefits'></div>
      <Benefits/>
      <Container>
        <Projects />
        <ContactUs />
        <Testmonials /> 
      </Container>
       
      <Footer />
    </div>
  )
}
