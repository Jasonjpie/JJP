"use client"

import { MdKeyboardArrowLeft } from 'react-icons/md'
import ProjectsPresentation from '@/components/projects/ProjectsPresentation'
import MoreProjectPhotos from '@/components/projects/MoreProjectPhotos'
import ProjectHouseTour from '@/components/projects/ProjectHouseTour'
import ContactUs from '@/components/homepage/ContactUs'
import ProjectInspiration from '@/components/projects/ProjectInspiration'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='mt-24 space-y-24 p-2 lg:p-5'>
        <div>
          <div className='flex gap-1 items-center'>
              <MdKeyboardArrowLeft size={30} />
              <div className='font-semibold'>Back to Listing</div>
          </div>
          <div>
            <div className='font-semibold text-2xl lg:text-6xl font-poppins'>
              Beverly Springfield
            </div>
            <div className='text-gray-300 font-poppins mt-2'>2821 Lake Sevilla: Palm Harbor, TX</div>
          </div>
        </div>
        
        <ProjectsPresentation />
        <MoreProjectPhotos />
        <ProjectInspiration />
        <ProjectHouseTour/>
        <ContactUs />
    </div>
  )
}

export default page