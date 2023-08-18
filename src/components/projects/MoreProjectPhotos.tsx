import { Projects } from "@/data"
import Image from "next/image"
import { IoImageOutline } from 'react-icons/io5'
type Props = {}

const MoreProjectPhotos = (props: Props) => {
    const photos = Projects
  return (
    <div className="flex  gap-2 w-full  h-[300px] xs:h-[500px] lg:h-[700px] relative">
        <div className="relative w-[70%] h-full">
         <Image className="aspect-auto" src={`/images/projects/${photos[1]}`} fill alt=""/>
        </div>
        <div className="flex flex-col gap-2 w-[30%] h-full">
            <div className="w-full h-[50%] relative">
                <Image className=" aspect-auto  " src={`/images/projects/${photos[2]}`} fill alt=""/>
            </div>
            <div className="w-full h-[50%] relative">
                <Image className="aspect-auto" src={`/images/projects/${photos[3]}`} fill alt=""/>
            </div>
        </div>
        <button className="flex items-center gap-3 bg-white rounded-md px-5 py-2 absolute bottom-10 right-10">
            <IoImageOutline />
            <div>View all the photos</div>
        </button>
    </div>
  )
}

export default MoreProjectPhotos