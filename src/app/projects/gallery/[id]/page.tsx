"use client"

import { MdKeyboardArrowLeft } from 'react-icons/md'
import ContactUs from '@/components/homepage/ContactUs'
import { Projects } from '@/data'
import { Project } from '@/types'
import { useRouter } from 'next/navigation'
import { Routes } from '@/../Routes'
import MoreProjectPhotos from '@/components/projects/MoreProjectPhotos'
type Props = {
  params:{id:string}
}

const Page = ({params}: Props) => {
  const router = useRouter()

  const project = Projects.find(project => project.id === params.id) as Project
  return (
    <div className='mt-24 space-y-16 p-2 '>
        <div className='space-y-2'>
          <button className='flex gap-1 items-center' onClick={() => router.push(Routes.PROJECTS)}>
              <MdKeyboardArrowLeft size={30} />
              <div className='font-semibold'>Back to Listing</div>
          </button>
          <div>
            <div className='font-semibold text-2xl lg:text-6xl font-poppins'>
              {project?.name}
            </div>
            <div className='text-gray-300 font-poppins mt-2'>2821 Lake Sevilla: Palm Harbor, TX</div>
          </div>
        </div>
        <MoreProjectPhotos id={params.id} showDetails={true} images={[...project.images]} />
        <ContactUs />
    </div>
  )
}

export default Page