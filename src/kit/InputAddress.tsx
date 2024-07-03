// import { useState, useEffect } from 'react'

const InputAddress = ({ placeholder, value, onChange }: {
  placeholder: string
  value: string
  onChange: (amount: string) => void
}) => {
  return (
    <input
      className="InputAddress h-[76px] w-full px-[14px] text-left text-[18px] leading-[22px] font-medium placeholder:text-[#0000004D]"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      placeholder={placeholder}
      value={value}
      onChange={(e) => { onChange(e.target.value) }}
    />
  )
}

export default InputAddress
