'use client'

import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"
import Container from "@/components/common/Container"
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <NavBar dark={false} />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
