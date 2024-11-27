import { useState } from 'react'

import { Dropdown } from '../kit'

import { ReactComponent as SortIcon } from '../assets/sort.svg'

export const TokensHeader = () => {
  const periods = ['1h', '3h', '6h', '12h', '24h']
  const [period , setPeriod] = useState(periods[0])

  return (
    <div className="TokensHeader flex items-center justify-between">
      <div className="text-[14px] leading-[19px] text-[#3C3C4399] font-nu">Market Cap / Liquidity</div>
      <Dropdown
        right
        items={periods}
        activeItem={period}
        onSelect={setPeriod}
      >
        <div
          className="flex items-center gap-1 text-[14px] leading-[19px] text-[#3C3C4399] font-nu"
        >
          <span>Price / {period} change</span>
          <SortIcon className="w-[14px] h-[22px]" />
        </div>
      </Dropdown>
    </div>
  )
}
