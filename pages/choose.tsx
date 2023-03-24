import QuizInput from "@/components/QuizInput";
import SelectInput from "@/components/SelectInput";
import React from "react";
import { useState } from "react";
const Choose = () => {

    const [info, setInfo] = useState({amount: 5, category: 'Select category', difficulty: 'Medium', type: 'Multiple Choice'})

    const categorys: string[] = ['-Select category-','General knowledge', 'Science: Computers','Science: Mathematics']

    const handleChange = (e: any) => {
        setInfo(prevInfo => {
            return {
                ...prevInfo,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className="relative flex justify-center w-full h-full lg:bg-[url('/images/choose.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="w-full h-full p-16 backdrop-blur-sm">
                <div className="w-fit m-auto h-auto bg-black bg-opacity-40 rounded-3xl p-14">
                    <div className="font-semibold text-center text-gray-800">
                        <h1 className="text-6xl">Quizzical</h1>
                        <h2 className="text-2xl">You can create the type of trivia you want here!</h2>
                    </div>
                    <form className="flex flex-col self-center w-1/3 m-auto mt-10">
                        <QuizInput text="Number of Questions:" value={info.amount} onChange={handleChange} name="amount" type="text"/>
                        <SelectInput name="category" options={categorys} text='Select category' value={info.category} onChange={handleChange} />
                        <SelectInput name="difficulty" options={['Any','Easy', 'Medium', 'Hard']} text='Select difficulty' value={info.difficulty} onChange={handleChange} />
                        <SelectInput name="type" options={['Any type', 'True / False', 'Multiple Choice']} text='Select type' value={info.type} onChange={handleChange} />
                    
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Choose;