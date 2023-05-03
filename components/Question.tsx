import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface questionData {
    title: string,
    quesitons: Array<any>,
    addAnswer: any
}

interface ansButtonData {
    answear: string,
    isCorrect: boolean,
    selected: boolean
    handleClick: any
}

const Question: React.FC<questionData> = ({title, quesitons}) => {

    const qList = quesitons
    console.log('Question List: ' + quesitons)

    const [selAnswears, setSelAnswears] = useState({})


    const handleQuestionClick = (e: any, isCorrect: boolean) => {
        setSelAnswears(prevInfo => {
            return {
                ...prevInfo,
                [e.target.name]: e.target.value
            }
        })
        console.log(selAnswears)
    }

    const questionList = qList.sort(() => (Math.random() > .5) ? 1 : -1).map((q, inc) => {
        console.log(inc,' : ' ,q)

        return <AnsButton key={inc} answear={q.question} isCorrect={q.isCorrect} selected={false} handleClick={handleQuestionClick}/>
    })


  return (
    <div className='w-full p-10 mb-10 rounded-lg h-72 bg-slate-800'>
        <h3 className='text-xl font-semibold text-gray-100 '>{title}</h3>
        <hr />
        <div className='flex h-full justify-evenly'>
            {questionList}
        </div>
    </div>
  )
}

const AnsButton: React.FC<ansButtonData> = ({answear, isCorrect, selected, handleClick}) => {

    const [sel, setSel] = useState(false)
    const changeSelectedMode = (e:any ) => {
        selected = !selected
        console.log('Selected')
        console.log(selected)
        handleClick(e, isCorrect)
        setSel(prev => !prev)
    }

    console.log(selected)

    return (
        <button onClick={changeSelectedMode} name="a" value="a"
        className={`inline-block w-1/5 h-20 p-2 mt-auto mb-4 text-lg font-semibold text-center ${!sel ? ' bg-gray-200' :  'bg-green-800' } rounded-xl hover:bg-slate-300`}>
            {answear}
        </button>
    )
}

export default Question