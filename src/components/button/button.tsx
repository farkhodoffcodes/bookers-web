
import { ButtonTypes } from '@/types/button/button';
import React from 'react';

const Button: React.FC<ButtonTypes> = ({ title, onClick, isDisabled = false, outlineStyle, icon }) => {
  return (
    <button onClick={onClick} disabled={isDisabled} className={`${outlineStyle ? 'bg-transparent text-[#9C0B35] border-[1px] border-[#9C0B35] rounded-3xl py-2 px-7 w-[100%] active:opacity-[.9]' : 'bg-[#9C0B35] text-white border-[1px] border-[#9C0B35] rounded-3xl py-2 px-7 w-[100%] active:opacity-[.9]'}`}>{title}</button>
  )
}

export default Button