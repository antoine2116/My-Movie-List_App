import React, { ChangeEvent } from 'react';

interface AuthInputProps {
  label: string;
  type: string;
  placeholder?: string;
  icon: JSX.Element;
  onChange?: (...args: any) => void;
}

function AuthInput({
  label,
  type,
  placeholder,
  icon,
  onChange
}: AuthInputProps) {

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }

    return null;
  }

  return (
    <div>
      <div className="mb-1 text-sm">{label}</div>
      <div className="relative">
        <div className="absolute inset-0 left-0 flex items-center pl-4 pointer-events-none text-lg text-gray-500">
          {icon}
        </div>
        <input 
          className="w-full border border-gray-300 rounded-lg p-2 pl-11 text-sm outline-1 outline-orange-600" 
          type={type} 
          placeholder={placeholder}
          onChange={handleOnChange} />
      </div>
    </div>
  )
}

export default AuthInput;