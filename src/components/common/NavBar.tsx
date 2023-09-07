import Image from "next/image"
import { Routes } from "../../../Routes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import  { MdKeyboardArrowDown } from 'react-icons/md'
import { useEffect, useRef, useState } from "react"
import Container from "./Container"
import { BiMenu } from "react-icons/bi"
import { GrClose } from "react-icons/gr"

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

type Props = {
    dark?:boolean;
    transparent?:boolean;
}

const NavBar = ({dark = true, transparent = false}: Props) => {

    const path = usePathname()
    const [ transparency, setTransparency ] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
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
                <div className='flex gap-3 items-center'>
                    <BiMenu onClick={() => setShowMenu(true)} className={`lg:hidden cursor-pointer ${dark ? 'text-white':'text-black'}`} size={40} />
                    <Link href={navigation[0].route}>
                        <Image  src={`Icons/logo-${dark ? 'light':'color'}.svg`}  width={200} height={20} alt="JJP's Logo"/>
                    </Link>
                </div>
                {showMenu && <MobileBar close={() => setShowMenu(false)}/>}
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

type MobileBarProps = {
    close: () => void
}

const MobileBar = ({close}: MobileBarProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const path = usePathname()
    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)){
                close()
            }
        }
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })
  return (
    <div ref={ref} className="fixed top-0 left-0 w-[50vw] h-[100vh] bg-white z-50">
        <div className="ml-auto p-2">
            <GrClose size={30} className='ml-auto p-1' onClick={close}/>
        </div>
        <div>
            {
        navigation.map((bar, index) => (
            <Link key={index} href={bar.route} className={`flex items-center gap-3 px-4 py-2 rounded-md  ${path === bar.route && 'bg-primary bg-opacity-10 text-primary'}`}>
                <div>{bar.name}</div> 
            </Link>
                ))
            }
        </div>
    </div>
  )
}

export default NavBar
