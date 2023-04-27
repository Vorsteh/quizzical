import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {
  return (
    <div className='w-full h-screen relative'>
      <Navbar />
      <div className='text-center text-gray-100 mt-10'>
        <p className='font-bold text-4xl mb-10'>About Us</p>
        <p className=' w-1/3 m-auto'>We are a trivia company that allow you to make your own random quiz. We are based in EU sweden dragonskolan #1</p>
      </div>
    </div>
  )
}

export default about