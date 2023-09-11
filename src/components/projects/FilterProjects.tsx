import { Projects } from "@/data"
import { Category, Project } from "@/types"
import { useEffect, useState } from "react"
import { BiFilter, BiSolidDownArrow } from "react-icons/bi"
type Props = {
    setProjects:(a:Project[]) => void
}

const FilterProjects = ({setProjects}: Props) => {
    const [ category, setCategory ] = useState<Category>('all')
    useEffect(() => {
        if(category === 'all'){
            setProjects(Projects)
        }else{
            setProjects(
                Projects.filter(project => project.type === category)
            )
        }
    }, [category])
  return (
    <div className="flex flex-wrap gap-10 justify-between">
        <button className="flex items-center gap-5 px-8 py-3 border border-black rounded-lg">
            <BiFilter /> 
            <div>Filter</div>
        </button>
     <div className="flex flex-wrap gap-5">
        <button  onClick={() => setCategory('all')} className={`px-7 py-2 rounded-full border border-black ${category === 'all' ? 'text-white bg-black':'bg-white'}`}>
            All
        </button>
        <button  onClick={() => setCategory('traditional')} className={`px-7 py-2 rounded-full border border-black ${category === 'traditional' ? 'text-white bg-black':'bg-white'}`}>
            Traditional
        </button><button onClick={() => setCategory('classic')}  className={`px-7 py-2 rounded-full border border-black ${category === 'classic' ? 'text-white bg-black':'bg-white'}`}>
            Classic
        </button><button onClick={() => setCategory('modern')}  className={`px-7 py-2 rounded-full border border-black ${category === 'modern' ? 'text-white bg-black':'bg-white'}`}>
            Modern
        </button>
     </div>
     <div className='flex items-center gap-5'>
        <div className="text-xl font-poppins">
            Sorted by
        </div>
        <div className="flex items-center gap-2">
            <div className="text-lg font-bold font-poppins">Last Updated</div>
            <BiSolidDownArrow className='cursor-pointer' />
        </div>
     </div>
    </div>
  )
}

export default FilterProjects