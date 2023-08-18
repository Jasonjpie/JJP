import { companies } from "@/data"
import Image from "next/image"
type Props = {}

const PartnerCompanies = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-10 my-44">
      <div className="font-poppins font-semibold text-4xl">Partner Companies</div>
      <div className="flex flex-wrap items-center justify-center gap-16">
        {
          companies.map((company, index) => 
          <Image src={`/icons/${company}`} width={200} height={100} alt="logo" key={index} />
          )
        }
      </div>
    </div>
  )
}

export default PartnerCompanies