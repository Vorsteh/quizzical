import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';
import Question from '@/components/Question';

const Quiz = () => {
    const router = useRouter()
    const data = router.query

    const [questionsData, setQuestionsData] = useState([])

    useEffect(() => {
        let link = 'https://opentdb.com/api.php?amount=' +data.amount+'&category='+data.category+'&difficulty='+data.difficulty+'&type='+data.type
        console.log(data)
        console.log(link)
        fetch(link)
        .then(res => res.json())
        .then(data => setQuestionsData(data.results))
    }, [])


    const questions = questionsData.map(question => {
        return <Question title={question['question']} wrong={question['incorrect_answers']} correct={question['correct_answer']}/>
    })

  return (
    <div className='w-full h-screen p-16'>
        <h2 className='text-center text-3xl font-semibold text-gray-100' onClick={() => {console.log(questionsData)}}>Quiz category: {data.category}</h2>
        <div className=''>
            {questions}
        </div>
    </div>
  )
}

export default Quiz