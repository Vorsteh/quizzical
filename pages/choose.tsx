import QuizInput from "@/components/QuizInput";
import SelectInput from "@/components/SelectInput";
import React from "react";
import { useState, useEffect } from "react";
import { categories } from "@/components/categories";
import Navbar from "@/components/Navbar";
import Link from 'next/link'

const Choose = () => {

    const [info, setInfo] = useState({amount: 5, category: '19', difficulty: 'any', type: 'any'})
    const [isDone, setIsDone] = useState(false)

    const handleChange = (e: any) => {
        setInfo(prevInfo => {
            return {
                ...prevInfo,
                [e.target.name]: e.target.value
            }
        })
        console.log(info)
    }

    return (
        <div className="relative flex justify-center w-full min-h-full lg:bg-[url('/images/choose.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
            <Navbar />
            <div className="w-full h-full mt-16 lg:mt-0 lg:p-16 backdrop-blur-sm">
                <div className="w-full h-full m-auto bg-black bg-opacity-100 lg:h-auto lg:w-fit lg:bg-opacity-70 lg:rounded-3xl lg:p-14">
                    <div className="font-semibold text-center text-gray-800">
                        <h1 className="text-6xl">Quizzical</h1>
                        <h2 className="text-2xl">You can create the type of trivia you want here!</h2>
                    </div>
                    <form className="flex flex-col self-center w-2/3 m-auto mt-10">
                        <QuizInput text="Number of Questions:" value={info.amount} onChange={handleChange} name="amount" type="number" min={'1'} max={'50'}/>
                        <SelectInput name="category" options={categories} text='Select category:' value={info.category} onChange={handleChange} />
                        
                        <SelectInput name="difficulty" options={[
                            {name: 'Any', id: ''}, 
                            {name: 'Easy', id: 'easy'}, 
                            {name: 'Medium', id: 'medium'}, 
                            {name: 'Hard', id: 'hard'}
                            ]} text='Select difficulty:' value={info.difficulty} onChange={handleChange} />

                        <SelectInput name="type" options={[
                            {name: 'Any Type', id: 'any'}, 
                            {name: 'True / False',id: 'boolean'}, 
                            {name: 'Multiple Choice', id: 'multiple'}
                            ]} text='Select Type:' value={info.difficulty} onChange={handleChange} />
                    
                    
                    <Link href={{
                        pathname: '/quiz',
                        query: info
                    }} className="self-center w-full py-3 text-xl font-bold text-center bg-gray-200 rounded-lg lg:w-1/3">Start Quiz</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Choose;