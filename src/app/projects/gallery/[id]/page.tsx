"use client"

import { MdKeyboardArrowLeft } from 'react-icons/md'
import ContactUs from '@/components/homepage/ContactUs'
import { Projects } from '@/data'
import { Project } from '@/types'
import { useRouter } from 'next/navigation'
import { Routes } from '@/../Routes'
import MoreProjectPhotos from '@/components/projects/MoreProjectPhotos'
import { useEffect, useState } from 'react'
import { bathroom, bedroom, kitchen, livingRoom } from '@/data/featuredProjects'
type Props = {
  params:{id:string}
}

const rooms = [
  {id:2, name:'Living Room'},
  {id:3, name:'Kitchen'},
  {id:4, name:'Bedroom'},
  {id:5, name:'Bathroom'},
]

const Page = ({params}: Props) => {
  const router = useRouter()
  const [ activeRooms, setActiveRooms ] = useState<number[]>([1])
  const project = Projects.find(project => project.id === params.id) as Project
  const [ images, setImages ] = useState(project.images)
  const handleSelection = (id:number) => {
    if(activeRooms.includes(id)){
      if(activeRooms.length === 1){
        setActiveRooms([1])
      }else{
        setActiveRooms(activeRooms.filter(_id => _id !== id))
      }
    }else{
      if(activeRooms.includes(1)){
        setImages([])
      }
      setActiveRooms([...activeRooms.filter(room => room !== 1), id])      
    }
  }
  useEffect(() => {
    if(activeRooms.includes(2)){
      setImages([...images, ...livingRoom])
    }else if (activeRooms.includes(3)){
      setImages([...images, ...kitchen])
    }else if(activeRooms.includes(4)){
      setImages([...images, ...bedroom])
    }else if(activeRooms.includes(5)){
      setImages([...images, ...bathroom])
    }else{
      setImages([...project.images])
    }
  }, [activeRooms])
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
        <div className="flex gap-5">
          <button disabled={!activeRooms.includes(1)} className={`rounded-xl border px-5 py-2 ${activeRooms.includes(1) ? 'bg-[#051242] text-white':'bg-white text-gray-500'}`}>All</button>
        {
          rooms.map((room, index) => 
          <button key={index} disabled={activeRooms.length === 3 && !activeRooms.includes(room.id)} onClick={() => handleSelection(room.id)} className={`rounded-xl border px-5 py-2 ${activeRooms.includes(room.id) ? 'bg-[#051242] text-white':'bg-white text-gray-500'}`}>{room.name}</button>
          )
        }
        </div>
        <MoreProjectPhotos id={params.id} showDetails={true} images={images} />
        <ContactUs />
    </div>
  )
}

export default Page