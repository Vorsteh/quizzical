import React from 'react'

interface questionData {
    title: string,
    correct: string,
    wrong: string[],
}

interface ansButtonData {
    answear: string,
    isCorrect: boolean
}

const Question: React.FC<questionData> = ({title, correct, wrong}) => {
  return (
    <div className='w-full h-72 p-10 rounded-lg mb-10 bg-slate-800'>
        <h3 className=' text-gray-100 font-semibold text-xl'>{title}</h3>
        <hr />
        <div className='h-full flex justify-evenly'>
            <AnsButton answear={correct} isCorrect={true}/>
            <AnsButton answear={wrong[1]} isCorrect={false}/>
            <AnsButton answear={wrong[2]} isCorrect={false}/>
            <AnsButton answear={wrong[0]} isCorrect={false}/>
        </div>
    </div>
  )
}

const AnsButton: React.FC<ansButtonData> = ({answear, isCorrect}) => {
    return (
        <div className='bg-gray-200 p-2 w-1/5 inline-block rounded-xl text-center text-lg h-20 mt-auto mb-4 font-semibold hover:bg-slate-300'>
            {answear}
        </div>
    )
}

export default Question