import Image from "next/image"
import Container from "../common/Container"
import '@/app/animation.scss'
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className=" w-[100%] h-[700px]  relative bg-[#101C3D] overflow-hidden">
      <Container>
        <div className="flex flex-col relative gap-10 justify-center h-full font-poppins items-center">
          <div className="relative z-10 font-bold text-6xl text-white">About JJP</div>
            <div className="relative z-10 text-center text-white text-2xl lg:max-w-[74%]">Founded in 2010, JJP Construction is your trusted partner in Los Angeles for exceptional property and real estate projects. With unwavering integrity and a commitment to excellence, we consistently exceed expectations, offering a wide range of services to meet your needs.</div>
        </div>
      </Container>
          {Array.from({length:100}).map((_, index) => 
            <div key={index} className="circle-container">
              <div className="circle"/>
            </div>
            )}
        <Image className="absolute z-0 left-16 object-cover bottom-16" src='/Icons/dots.svg' width={120} height={300} alt="" />
        <Image className="absolute z-0 object-cover " src='/Icons/curves.svg' fill alt="" />

    </div>
  )
}

export default HeroSection