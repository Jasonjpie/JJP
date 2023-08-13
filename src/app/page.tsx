'use client'
import NavBar from '@/components/common/NavBar'
import FeaturedProperties from '@/components/homepage/FeaturedProperties'
import HeroSection from '@/components/homepage/HeroSection'
import Footer from '@/components/common/Footer'
import Benefits from '@/components/homepage/Benefits'
import FeaturedProjects from '@/components/homepage/FeaturedProjects'
import Projects from '@/components/homepage/Projects'
import ContactUs from '@/components/homepage/ContactUs'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturedProperties />
      <FeaturedProjects />
      <Benefits/>
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  )
}
