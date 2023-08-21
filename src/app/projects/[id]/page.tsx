"use client"

import { MdKeyboardArrowLeft } from 'react-icons/md'
import ProjectsPresentation from '@/components/projects/ProjectsPresentation'
import MoreProjectPhotos from '@/components/projects/MoreProjectPhotos'
import ProjectHouseTour from '@/components/projects/ProjectHouseTour'
import ContactUs from '@/components/homepage/ContactUs'
import ProjectInspiration from '@/components/projects/ProjectInspiration'
import { useEffect, useState } from 'react'
import { Projects } from '@/data'
import { Project } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { Routes } from '@/../Routes'
type Props = {
  params:{id:string}
}

const Page = ({params}: Props) => {

  const router = useRouter()
  const search = useSearchParams()
  const room  = search.get('room')

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
        <ProjectsPresentation room={room as string} images={[...project.images.slice(0,Math.min(7, project.images.length))]} />
        {project.images.length >= 11 && <MoreProjectPhotos images={[...project.images.slice(8, Math.min(11, project.images.length))]} />}
        <ProjectInspiration />
        <ContactUs />
    </div>
  )
}

export default Page