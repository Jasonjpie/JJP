import Image from "next/image"
import { Routes } from "../../../Routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import  { MdKeyboardArrowDown } from 'react-icons/md'
import { useEffect, useState } from "react"
import Container from "./Container"
type Props = {
    dark?:boolean;
    transparent?:boolean;
}

const NavBar = ({dark = true, transparent = false}: Props) => {
    const navigation = [
        {
            name:'Home',
            route:Routes.HOME
        },
        {
            name:'About Us',
            route:Routes.ABOUT
        },
        // {
        //     name:'Our Services',
        //     route: '/#Benefits'
        // },
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
    const [ transparency, setTransparency ] = useState(true)
    useEffect(() =>{
       const handleScroll = () => {
         if(window.scrollY > 200){
            setTransparency(false)
        }else{
            setTransparency(true)
        }
       }
       window.addEventListener('scroll', handleScroll) 
       return () =>{
        window.removeEventListener('scroll', handleScroll)
       }
    },[])
  return (
    <div className={`w-full fixed animated fadeInDown top-0 z-50 ${transparency && dark && transparent ? 'bg-opacity-0':''} ${path === '/' && transparency && transparent ? 'bg-opacity-40':''} ${(dark || transparent) ? 'bg-[#101C3D]': 'bg-white'} py-3 `}>
        <Container>
            <div className="flex w-full">
                <Link href={navigation[0].route}>
                <Image  src={`Icons/logo-${dark ? 'light':'color'}.svg`}  width={200} height={20} alt="JJP's Logo"/>
                </Link>
                <div className="hidden lg:flex items-center gap-2 ml-auto">
                    {dark || transparent ? 
                    navigation.map((bar, index) => (
                        <Link key={index} href={bar.route} className={`flex items-center gap-3 px-4 py-2 rounded-md  ${path === bar.route ? 'bg-white text-black':'text-white'}`}>
                            <div>{bar.name}</div> 
                            {/* {bar.route === '/projects' && <MdKeyboardArrowDown className='text-white' />} */}
                            
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
        </Container>
    </div>
  )
}

export default NavBar
