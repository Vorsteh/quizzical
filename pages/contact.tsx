import Input from '@/components/Input'
import React from 'react'
import { useState } from 'react'
import Navbar  from '@/components/Navbar';

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
      <form action="" className='self-center bg-slate-800 p-16 text-gray-100 font-semibold rounded-3xl shadow-lg '>
        <h2 className='text-gray-100 text-center mb-10 text-3xl'>Contact Us</h2>
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
          className='contactInput border'/>

          <fieldset className='border p-2'>
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
        <button className=' bg-slate-900 px-10 py-4 rounded-full mt-5'>Send</button>
      </form>
    </div>
  )
}

export default Contact