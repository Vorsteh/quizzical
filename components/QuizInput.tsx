import React from 'react';

interface QuizInputProps {
    text: string;
    type: any;
    value: any;
    name: string;
    onChange: any;
}
  

const QuizInput: React.FC<QuizInputProps> = ({text, value, name, onChange, type}) => {
    return (
        <div className='relative pb-5'>
            <p className='font-bold'>{text}</p>
            <input 
                type={type}
                placeholder="Amount of questions"
                onChange={onChange}
                name={name}
                value={value}
                className='w-full p-2 font-semibold bg-gray-400 rounded-md'
            />
        </div>
    )
}

export default QuizInput;