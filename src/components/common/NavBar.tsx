import Image from "next/image"
import { Routes } from "../../../Routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import  { MdKeyboardArrowDown } from 'react-icons/md'

type Props = {
    dark?:boolean
}

const NavBar = ({dark = true}: Props) => {
    const navigation = [
        {
            name:'Home',
            route:Routes.HOME
        },
        {
            name:'About Us',
            route:Routes.ABOUT
        },
        {
            name:'Our Services',
            route:Routes.SERVICES
        },
        {
            name:'Projects',
            route:Routes.PROJECTS
        },
        {
            name:'Contents',
            route:Routes.CONTENT
        },
        {
            name:'Contact Us',
            route:Routes.CONTACT
        }
    ]

  const path = usePathname()

  return (
    <div className="flex w-full bg-[#101C3D] py-3 px-16">
        <Image  src='/Icons/logo-light.svg'  width={200} height={20} alt="JJP's Logo"/>
    <div className="hidden lg:flex items-center gap-2 ml-auto">
            {dark ? 
            navigation.map((bar, index) => (
                <Link key={index} href={bar.route} className={`flex items-center gap-3 px-4 py-2 rounded-md  ${path === bar.route ? 'bg-white text-primary':'text-white'}`}>
                    <div>{bar.name}</div> 
                    {bar.route === '/projects' && <MdKeyboardArrowDown className='text-white' />}
                </Link>
               
            )):
            navigation.map((bar, index) => (
                    <Link key={index} href={bar.route} className={`flex items-center gap-3 px-4 py-2 rounded-md  ${path === bar.route && 'bg-primary bg-opacity-10 text-primary'}`}>
                        <div>{bar.name}</div> 
                        {bar.route === '/projects' && <MdKeyboardArrowDown  />}
                    </Link>
                
            ))
            }
        </div>
    </div>
  )
}

export default NavBar
