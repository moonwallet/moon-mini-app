import { useState, useEffect } from 'react'

export const InputAmount = ({ amount, onChange }: {
  amount: number
  onChange: (amount: number) => void
}) => {
  const [valueString, setValueString] = useState<string>(amount === 0 ? '' : String(amount))

  const onInput = (val: string) => {
    let filteredVal = val.replace(/,/g, '.').replace(/[^0-9.]/g, '')
    if (!/^\d*\.?\d*$/.test(filteredVal)) {
      return
    }

    if (filteredVal.startsWith('0') && filteredVal.length > 1 && !filteredVal.includes('.')) {
      filteredVal = `0.${filteredVal.slice(1)}`
    }

    setValueString(filteredVal)
  }

  useEffect(() => {
    const newNumberValue = Number(valueString)
    onChange(isNaN(newNumberValue) ? 0 : newNumberValue)
  }, [onChange, valueString])

  return (
    <input
      className="InputAmount h-10 w-full text-center text-[40px] leading-[40px] font-semibold placeholder:text-[#BFC6CD]"
      placeholder="0.00"
      inputMode="decimal"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      value={valueString}
      onChange={(e) => { onInput(e.target.value) }}
    />
  )
}
