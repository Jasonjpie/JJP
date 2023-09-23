import { teams } from "@/data"
import Image from "next/image"

type Props = {}

const OurTeam = (props: Props) => {
  return (
    <div className="flex flex-col gap-5  items-center font-poppins w-full my-16" id="Team">
      <div className="font-semibold text-2xl text-gray-500">MEET JJP CONSTRUCTION</div>
      <div className="font-semibold text-4xl lg:text-5xl">Our Amazing Team</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-12 lg:gap-y-24 gap-x-12 lg:gap-x-32 mt-16">
        {
          teams.map((team, index) => 
              <div className="flex flex-col gap-3 items-center" key={index}>
                {team.image ? <Image className="rounded-full" src={team.image} width={100} height={100} alt=""/>:<div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary text-white text-4xl">{team.name.charAt(0)}{team.name.split(' ')[1].charAt(0)}</div>}
                <div className="font-bold text-xl capitalize">{team.name}</div>
                <div className="text[#687588] text-sm">{team.role}</div>
              </div>
            )
        }

      </div>
    </div>
  )
}

export default OurTeam