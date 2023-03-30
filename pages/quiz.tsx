import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';
import Question from '@/components/Question';

const Quiz = () => {
    const router = useRouter()
    const data = router.query

    const [questionsData, setQuestionsData] = useState([])
    const [userAnswer, setUserAnswer] = useState([])

    useEffect(() => {
        let link = 'https://opentdb.com/api.php?amount=' +data.amount+'&category='+data.category+'&difficulty='+data.difficulty+'&type='+data.type
        console.log(data)
        console.log(link)
        fetch(link)
        .then(res => res.json())
        .then(data => setQuestionsData(data.results))
    }, [])


    const questions = questionsData.map((question, inc) => {

        const array = [{isCorrect: true, question: question['correct_answer']}]

        for(var i = 0; i < 3; i++){
            array.push({isCorrect: false, question: question['incorrect_answers'][i]})
        }


        return <Question title={question['question']} key={inc} quesitons={array} addAnswer={setUserAnswer}/>
    })

  return (
    <div className='w-full h-screen p-16'>
        <h2 className='text-3xl font-semibold text-center text-gray-100' onClick={() => {console.log(questionsData)}}>Quiz category: {data.category}</h2>
        <div className=''>
            {questions}
        </div>
    </div>
  )
}

export default Quiz