import Image from "next/image"
type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="flex flex-col relative gap-10 justify-center font-poppins items-center w-full bg-[#101C3D] h-[100vh]">
        <div className="relative z-10 font-bold text-6xl text-white">About JJP</div>
        <div className="relative z-10 text-center text-white text-2xl lg:max-w-[74%]">At JJP Construction, we&apos;re more than just builders, we&apos;re your partners in turning dreams into reality. With a legacy of excellence spanning 7+ years, we&apos;ve earned a reputation as a trusted construction firm that delivers exceptional results.</div>
        <Image className="absolute z-0 left-16 bottom-16" src='/Icons/dots.svg' width={120} height={300} alt="" />
        <Image className="absolute z-0 object-cover " src='/Icons/curves.svg' fill alt="" />

    </div>
  )
}

export default HeroSection