import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';

const Quiz = () => {
    const router = useRouter()
    const data = router.query

    const [questionsData, setQuestionsData] = useState({})

    useEffect(() => {
        let link = 'https://opentdb.com/api.php?amount=' +data.amount+'&category='+data.category+'&difficulty='+data.difficulty+'&type='+data.type
        console.log(data)
        console.log(link)
        fetch(link)
        .then(res => res.json())
        .then(data => setQuestionsData(data))
    }, [])



  return (
    <div>
        <div>
        {data && (
            <div className='pt-44 '>
                <h1 className='text-3xl text-center text-white hover:cursor-pointer' onClick={() => {console.log(questionsData)}}>See data!</h1>
            </div>
            
        )}
        </div>
    </div>
  )
}

export default Quiz