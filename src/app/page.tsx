'use client'
import NavBar from '@/components/common/NavBar'
import FeaturedProperties from '@/components/homepage/FeaturedProperties'
import HeroSection from '@/components/homepage/HeroSection'
import Footer from '@/components/common/Footer'
import Benefits from '@/components/homepage/Benefits'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturedProperties />
      <Benefits/>
      <Footer />
    </div>
  )
}
