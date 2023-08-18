'use client'

import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <NavBar dark={true} transparent={true}/>
      <div>{children}</div>
      <Footer />
    </div>
  )
}
