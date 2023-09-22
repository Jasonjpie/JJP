import Image from "next/image"

type Props = {}

const OurTeam = (props: Props) => {
  return (
    <div className="flex flex-col gap-5  items-center font-poppins w-full my-16" id="Team">
      <div className="font-semibold text-2xl text-gray-500">MEET JJP CONSTRUCTION</div>
      <div className="font-semibold text-4xl lg:text-5xl">Our Amazing Team</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 lg:gap-y-24 gap-x-12 lg:gap-x-32 mt-16">
        {
          Array.from({length: 12}).map((_, index) => 
              <div className="flex flex-col gap-3 items-center" key={index}>
                <Image src={`/images/about/profile${index + 1}.png`} width={100} height={100} alt=""/>
                <div className="font-bold text-xl">Alfredo George</div>
                <div className="text[#687588] text-sm">HR Manager</div>
              </div>
            )
        }

      </div>
    </div>
  )
}

export default OurTeam