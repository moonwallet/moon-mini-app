import { useState } from 'react'

import Button from '../kit/Button'
import Dropdown from '../kit/Dropdown'

import { ReactComponent as SortIcon } from '../assets/sort.svg'

const TokensHeader = () => {
  const [isPeriodOpen, setIsPeriodOpen] = useState(false)

  const periods = ['1h', '3h', '6h', '12h', '24h']
  const [period , setPeriod] = useState(periods[0])

  return (
    <div className="TokensHeader flex items-center justify-between">
      <div className="text-[14px] leading-[19px] text-[#3C3C4399] font-nu">Market Cap / Liquidity</div>
      <div className="relative">
        <Button
          className="flex items-center gap-1 text-[14px] leading-[19px] text-[#3C3C4399] font-nu"
          onClick={() => { setIsPeriodOpen(true) }}
        >
          <span>Price / {period} change</span>
          <SortIcon className="w-[14px] h-[22px]" />
        </Button>
        <Dropdown
          right
          isOpen={isPeriodOpen}
          setIsOpen={setIsPeriodOpen}
          items={periods}
          activeItem={period}
          onSelect={setPeriod}
        />
      </div>
    </div>
  )
}

export default TokensHeader
