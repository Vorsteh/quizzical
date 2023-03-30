import React from 'react'
import { useState } from 'react'
import { useRouter } from "next/router";
import { BsList } from 'react-icons/bs'

interface NavLinkProps {
    text: string,
    link: string
}

interface MmProps {
    links: string[],
    toggleFun: any,
    show: boolean
}

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    
    const router = useRouter()
  return (
    <div className='absolute z-50 w-full p-2 bg-gray-100 shadow-md '>
        {showMobileMenu && <MobileMenu links={['/home', '/about', '/contact', '/choose']} toggleFun={setShowMobileMenu} show={showMobileMenu}/>}
        <div className='flex justify-between p-2 items-center'>
            <h2 className='md:hidden font-bold text-lg'>Quizzical</h2>
            <span className='md:hidden' onClick={() => setShowMobileMenu(prev => !prev)}><BsList size={32}/></span>
        </div>
        <div className='md:flex justify-around hidden '>
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

const MobileMenu: React.FC<MmProps> = ({links, toggleFun, show}) => {

    const router = useRouter();

    const linksList = links.map((link, inc) => {
        return (
            <div key={inc} onClick={() => router.push(link)}>
                <p className='p-3 font-semibold transition-all rounded-md hover:bg-gray-300 hover:cursor-pointer'>{link.replace('/', '')}</p>
                <hr />
            </div>
        )
    })

    return (
        <div className={`absolute w-full min-h-full bg-gray-100`}>
            <div>
                {linksList}
            </div>
            <p className='p-3 font-semibold' onClick={() => toggleFun((prev: any) => !prev)}>X Close  </p>
        </div>
    )
}   

export default Navbar