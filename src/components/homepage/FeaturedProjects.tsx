import { featuredProjects } from "@/data"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const FeaturedProjects = (props: Props) => {
    const project = featuredProjects[0]
  return (
    <div className="w-full my-24 space-y-16">
        <div className="grid lg:grid-cols-3 gap-5">
            <div className="flex flex-col relative col-span-1 mx-auto ml-10 p-5">
                <div className="text-md font-bold text-gray-600 tracking-[8px] font-montserrat">/ PROJECT</div>
                <div className="font-bold text-6xl max-w-[200px] leading-relaxed">Featured <span className="text-primary">Project</span></div>
                <Image className="absolute -bottom-5 -left-5" src={`/icons/ellipse.svg`} width={400} height={100} alt={project.name}/>

            </div>
            <div className='col-span-2 leading-loose font-montserrat text-gray-500 text-2xl max-w-[850px] p-5'>
                 Take a look at our many finished projects that have been so amazing, we're sure you'll want them too. Projects completed with a very experienced and professional team.
            </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 h-[1100px] ">
            
            <div className="h-[80%] self-end p-2">
                <div className="bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-2xl font-bold pt-8 pl-8">
                    / 01 Kitchen
                </div>
                <div className="relative h-[50%]">
                  <Image src={`/images/featured-projects/${project.kitchen}`} fill alt={project.name}/>
                </div>
                <div className="space-y-3 bg-[#222831] h-[30%]">
                    <div className="text-white font-bold font-playfair text-2xl lg:text-5xl leading-relaxed py-5 px-10">
                        Dellacorte House
                    </div>
                    <Link className="text-gray-400 ml-10" href=''>See Details</Link>
                </div>
            </div>
            <div className="h-[80%] self-start">
                <div className="bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-2xl font-bold pt-8 pl-8">
                    / 02 Bathrooms
                </div>
                <div className="relative h-[80%]">
                  <Image src={`/images/featured-projects/${project.bathroom}`} fill alt={project.name}/>
                </div>
            </div>
            <div className="h-[80%] self-end">
                <div className="bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-2xl font-bold pt-8 pl-8">
                    / 03 Living Rooms
                </div>
                <div className="relative h-[80%]">
                  <Image src={`/images/featured-projects/${project.livingRoom}`} fill alt={project.name}/>
                </div>
            </div>
            <div className="h-[80%] self-start">
                <div className="bg-[#222831] font-montserrat h-[20%] text-[#4F8A8B] text-2xl font-bold pt-8 pl-8">
                    / 04 Bathrooms
                </div>
                <div className="relative h-[80%]">
                  <Image src={`/images/featured-projects/${project.bathroom2}`} fill alt={project.name}/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default FeaturedProjects