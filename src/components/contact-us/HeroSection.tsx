import Image from "next/image"
import Container from "../common/Container"
import "@/app/animation.scss"
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="w-[100%] h-[700px]  relative bg-[#101C3D] overflow-hidden">
     
        <Container>
          <div className="flex flex-col  relative gap-10 justify-center font-poppins items-center w-full h-full z-30">
            <div className="relative animate-fade-up animate-ease-in-out z-10 font-bold text-6xl text-white">Contact Us</div>
            <div className="relative animate-fade-up animate-ease-in-out z-10 text-center text-white text-2xl lg:max-w-[74%]">
            Get in touch with JJP Construction Inc today to discuss your next project. Our professional team is here to answer your inquiries and schedule your initial consultation meeting. We look forward to working with you to deliver outstanding results.
            </div>
          </div>
        </Container>
        {Array.from({length:100}).map((_, index) => 
          <div key={index} className="circle-container">
            <div className="circle"/>
          </div>
         )}
      <Image className="absolute  z-10 object-cover " src='/Icons/curves_2.svg' fill alt="" />
      <Image className="absolute  z-0 object-cover " src='/Icons/world-map.svg' fill alt="" />

    </div>
    
  )
}

export default HeroSection 