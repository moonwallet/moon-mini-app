import cx from 'classnames'
import { useState } from 'react'

import { ReactComponent as SearchIcon } from '../assets/search.svg'

const SearchInput = ({ placeholder, value, onChange }: {
  placeholder: string
  value: string
  onChange: (_: string) => void
}) => {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div className="SearchInput relative">
      <input
        className="h-[36px] w-full rounded-[10px] px-[14px] bg-[#7676801F] text-[17px]"
        type="text"
        value={value}
        onFocus={() => { setIsFocus(true) }}
        onBlur={() => { setIsFocus(false) }}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className={cx(
        'absolute left-0 top-0 w-full h-full flex items-center justify-center gap-2 text-[#3C3C4399] pointer-events-none transition-all',
        (isFocus || value) ? 'opacity-0' : 'opacity-100'
      )}>
        <SearchIcon />
        <div className="text-[17px]">{placeholder}</div>
      </div>
    </div>
  )
}

export default SearchInput
