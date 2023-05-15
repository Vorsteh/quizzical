import Input from '@/components/Input'
import React from 'react'
import { useState } from 'react'
import Navbar  from '@/components/Navbar';
import router from 'next/router';

const Contact = () => {
  const [formData, setFormdata] = useState({
    name: '',
    email: '',
    text: '',
    gender: ''
  })

  const handleChange = (e: any) => {
    setFormdata(prevInfo => {
        return {
            ...prevInfo,
            [e.target.name]: e.target.value
        }
    })
    console.log(formData)
}

  return (
    <div className={`p-6 flex justify-center w-full h-full lg:bg-[url('/images/stool.jpg')] bg-no-repeat bg-center bg-fixed bg-cover`}>
      <Navbar />
      <form action="" className='self-center p-16 font-semibold text-gray-100 shadow-lg bg-slate-800 rounded-3xl '>
        <h2 className='mb-10 text-3xl text-center text-gray-100'>Contact Us</h2>
        <div>
          <h3>Name:</h3>
          <input type="text" 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
          placeholder='Name'
          className='contactInput'/>

          <h3>Email:</h3>
          <input type="email" 
          name='email' 
          value={formData.email} 
          onChange={handleChange}
          placeholder='Email'
          className='contactInput'/>

          <h3>Message:</h3>
          <textarea
          name='text' 
          value={formData.text} 
          onChange={handleChange}
          placeholder='Message'
          className='border contactInput'/>

          <fieldset className='p-2 border'>
            <legend>Gender</legend>

            <input type="radio" 
            id='man' 
            name='gender' 
            value="man" 
            onChange={handleChange}/>
            <label htmlFor="man">Man</label>
            <br />

            <input type="radio" 
            id='woman' 
            name='gender' 
            value="woman" 
            onChange={handleChange}/>
            <label htmlFor="woman">Woman</label>
          </fieldset>
        </div>
        <button onClick={() => router.push('/submit')} className='px-10 py-4 mt-5 rounded-full bg-slate-900'>Send</button>
      </form>
    </div>
  )
}

export default Contact