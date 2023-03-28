import React from 'react'
import { useRouter } from "next/router";

interface NavLinkProps {
    text: string,
    link: string
}

const Navbar = () => {
    
    const router = useRouter()
  return (
    <div className='absolute z-50 w-full p-2 bg-gray-100 shadow-md '>
        <div className='flex justify-around'>
            <NavLink link={'/home'} text={'Home'}/>
            <NavLink link={'/about'} text={'About Us'}/>
            <NavLink link={'/contact'} text={'Contact'}/>
            <NavLink link={'/choose'} text={'Start a quiz'}/>
        </div>
    </div>
  )
}

const NavLink: React.FC<NavLinkProps> = ({link, text}) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(link)}>
            <p className='p-3 font-semibold transition-all rounded-md hover:bg-gray-300 hover:cursor-pointer'>{text}</p>
        </div>
    )
}

export default Navbar