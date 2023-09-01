import { benefits } from "@/data"
import Image from "next/image"
import Container from "../common/Container"

type Props = {}

const Benefits = (props: Props) => {
  return (
    <div className="w-full bg-[#101C3D] ">
      <Container>
        <div className="grid grid-cols-12 w-full text-white py-10 ">
            <div className="lg:col-span-4 col-span-12 flex flex-col gap-10 w-full p-2">
                <div className="text-3xl">What do you get?</div>
                <div className="text-4xl lg:text-5xl leading-relaxed font-bold">We always provide various <span className="text-primary">benefits</span> for you</div>
                <div className=" leading-loose text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </div>
            </div>
            <div className="lg:col-span-8 col-span-12 grid lg:grid-cols-3 gap-5 w-full items-center p-5">
                {
                    benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center justify-start gap-5">
                            <div className="bg-[#52D3FD] bg-opacity-10 px-5 py-5 rounded-2xl">
                              <Image src={`/Icons/${benefit.icon}`} width={50} height={50} alt={benefit.name}/>
                            </div>
                        <div className="text-center">{benefit.name}</div>
                        <div className="text-gray-400 text-center p-3">{benefit.detail}</div>
                        </div>
                    ))
                }
            </div>
        </div>
      </Container>

    </div>

  )
}

export default Benefits