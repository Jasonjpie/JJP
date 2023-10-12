'use client'

import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"
import Container from "@/components/common/Container"
import Chat from "@/components/common/Chat"
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
      <Chat />
    </div>
  )
}
