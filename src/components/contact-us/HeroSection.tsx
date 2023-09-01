import Image from "next/image"
import Container from "../common/Container"
import "@/app/animation.scss"
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="relative flex w-full bg-[#101C3D]">
     
        <Container>
          <div className="flex flex-col  relative gap-10 justify-center font-poppins items-center w-full  h-[700px]">
            <div className="relative animate-fade-up animate-ease-in-out z-10 font-bold text-6xl text-white">Contact Us</div>
            <div className="relative animate-fade-up animate-ease-in-out z-10 text-center text-white text-2xl lg:max-w-[74%]">Drop us a message. We will respond to you in just a day.</div>
          </div>
        </Container>
        {Array.from({length:100}).map((_, index) => 
          <div key={index} className="circle-container">
            <div className="circle"/>
          </div>
         )}
      <Image className="absolute  z-0 object-cover " src='/Icons/curves_2.svg' fill alt="" />
    </div>
    
  )
}

export default HeroSection 