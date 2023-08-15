import { Projects } from "@/data"
import Image from "next/image"
type Props = {}

const ProjectHouseTour = (props: Props) => {
    const photo = Projects[3]
  return (
    <div>
        <div className="flex flex-col gap-2 lg:gap-4 w-fit mx-auto">
            <div className="font-poppins text-[#616161]">Go through and Explore</div>
            <div className="font-semibold font-poppins text-3xl">House Tour</div>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
            <div className="flex flex-col gap-2 lg:gap-4 w-[40%]">
                <div className="flex items-end gap-2 lg:gap-4">
                    <div className="relative w-[8%] h-[200px] lg:h-[400px]">
                        <Image  src={`/images/projects/project-1.png`} objectFit="cover" fill alt=""/>
                    </div>
                    <div className="relative w-[98%] h-[100px] lg:h-[300px]">
                        <Image  src={`/images/projects/project-2.png`} objectFit="cover" fill alt=""/>
                    </div>
                </div>
                <div className="flex items-start gap-2 lg:gap-4">
                    <div className="relative w-[28%] h-[200px] lg:h-[300px]">
                        <Image  src={`/images/projects/project-3.png`} objectFit="cover" fill alt=""/>

                    </div>
                    <div className="relative w-[72%] h-[100px] lg:h-[200px]">
                        <Image  src={`/images/projects/project-4.png`} objectFit="cover" fill alt=""/>
                    </div>
                </div>
            </div>
            <div className="relative w-[20%] h-[200px] lg:h-[400px]">
                <Image  src={`/images/projects/project-5.png`} objectFit="cover" fill alt=""/>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 w-[40%]">
                <div className="flex items-end gap-2 lg:gap-4">
                    <div className="relative w-[48%] h-[100px] lg:h-[300px]">
                        <Image  src={`/images/projects/project-6.png`} objectFit="cover" fill alt=""/>
                    </div>
                    <div className="relative w-[52%] h-[200px] lg:h-[400px]">
                        <Image  src={`/images/projects/project-7.png`} objectFit="cover" fill alt=""/>
                    </div>
                </div>
                <div className="flex items-start gap-2 lg:gap-4">
                    <div className="relative w-[44%] h-[200px] lg:h-[300px]">
                        <Image  src={`/images/projects/project-8.png`} objectFit="cover" fill alt=""/>

                    </div>
                    <div className="relative w-[56%] h-[100px] lg:h-[200px]">
                        <Image  src={`/images/projects/project-9.png`} objectFit="cover" fill alt=""/>
                    </div>
                </div>
            </div>
        
            

        </div>
    </div>
  )
}

export default ProjectHouseTour