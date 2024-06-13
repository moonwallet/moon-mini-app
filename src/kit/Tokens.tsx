import { useState } from 'react'

import Button from '../kit/Button'
import Dropdown from '../kit/Dropdown'
import Token from '../kit/Token'

import notFound from '../assets/not-found.png'
import { ReactComponent as SortIcon } from '../assets/sort.svg'

const Tokens = ({ tokens, isNotFound }: {
  tokens: TToken[]
  isNotFound: boolean
}) => {
  const [isPeriodOpen, setIsPeriodOpen] = useState(false)

  const periods = ['1h', '3h', '6h', '12h', '24h']
  const [period , setPeriod] = useState(periods[0])

  return (
    <div className="Tokens mt-10 flex flex-col gap-2">
      {!!tokens.length && (
        <div className="flex items-center justify-between">
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
      )}

      {tokens.map(token => (
        <Token
          key={token}
          title={token}
        />
      ))}

      {!tokens.length && isNotFound && (
        <div className="mt-[100px] flex flex-col items-center justify-center gap-3">
          <img src={notFound} className="w-[112px] h-[112px]" />
          <div className="font-nu text-[15px] leading-[21px] font-semibold text-[#3C3C4399] text-center">No search results.<br />Try something different.</div>
        </div>
      )}
    </div>
  )
}

export default Tokens
