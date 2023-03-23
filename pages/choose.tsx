import QuizInput from "@/components/QuizInput";
import React from "react";
import { useState } from "react";
const Choose = () => {

    const [info, setInfo] = useState({amount: 5, category: 'Science: Mathematics', difficulty: 'Medium', type: 'Multiple Choice'})

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
                <div className="font-semibold text-center text-gray-800">
                    <h1 className="text-6xl ">Quizzical</h1>
                    <h2 className="text-2xl">You can create the type of trivia you want here!</h2>
                </div>
                <form className="flex flex-col self-center w-1/3 m-auto mt-10">
                    <QuizInput text="Number of Questions:" value={info.amount} onChange={handleChange} name="amount" type="text"/>
                    <QuizInput text="Select Category:" value={info.category} onChange={handleChange} name="category" type="select"/>
                </form>
            </div>
        </div>
    )
}


export default Choose;