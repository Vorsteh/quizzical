import React from 'react'

interface questionData {
    title: string,
    quesitons: Array<any>,
    addAnswer: any
}

interface ansButtonData {
    answear: string,
    isCorrect: boolean,
    selected: boolean
}

const Question: React.FC<questionData> = ({title, quesitons}) => {

    const questionList = quesitons.sort(() => (Math.random() > .5) ? 1 : -1).map((q, inc) => {
        console.log(inc,' : ' ,q)

        return <AnsButton key={inc} answear={q.question} isCorrect={q.isCorrect} selected={false}/>
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

const AnsButton: React.FC<ansButtonData> = ({answear, isCorrect, selected}) => {
    return (
        <div className={`inline-block w-1/5 h-20 p-2 mt-auto mb-4 text-lg font-semibold text-center ${!selected ? ' bg-gray-200' :  'bg-green-200' } rounded-xl hover:bg-slate-300`}>
            {answear}
        </div>
    )
}

export default Question