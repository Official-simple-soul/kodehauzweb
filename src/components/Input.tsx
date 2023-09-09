import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
function Input({ type, label, placeholder, handleInputChange }: InputProps) {
  return (
    <div className='my-3'>
      <label htmlFor='' className='block mb-2'>
        {label}
      </label>
      {type === 'text-area' ? (
        <textarea
          name={label.split(' ').join('').toLowerCase()}
          id=''
          placeholder={placeholder}
          onChange={handleInputChange}
          className='w-full h-40 text-black px-2 placeholder:text-[12px] rounded-md border shadow-md'
        ></textarea>
      ) : (
        <input
          type={type}
          name={label.split(' ').join('').toLowerCase()}
          placeholder={placeholder}
          className='w-full h-10 text-black px-2 placeholder:text-[12px] rounded-md border shadow-md'
          onChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default Input;
