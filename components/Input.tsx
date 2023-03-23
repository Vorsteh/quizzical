import React from 'react';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        className="block w-full px-6 pt-6 pb-1 font-semibold text-white bg-transparent border-b-2 outline-none appearance-none focus:border-2 focus:rounded-md focus:border-white text-md focus:ring-0 peer invalid:border-b-1"
        placeholder=" " 
      />
      <label 
        htmlFor={id} 
        className="
        absolute 
        text-md
      text-zinc-300
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      ">{label}</label>
    </div>
  )
}

export default Input;