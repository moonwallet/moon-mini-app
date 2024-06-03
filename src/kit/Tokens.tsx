import { useState } from 'react'

import Button from '../kit/Button'
import Token from '../kit/Token'

import notFound from '../assets/not-found.png'
import { ReactComponent as SortIcon } from '../assets/sort.svg'

const Tokens = ({ tokens }: {
  tokens: TToken[]
}) => {
  const [/*isPeriodOpen*/, setPeriodOpen] = useState(false)
  const [pricePeriod /*, setPricePeriod */] = useState<TPricePeriod>('1h')
  return (
    <div className="mt-10 flex flex-col gap-2">
      {!!tokens.length && (
        <div className="flex items-center justify-between">
          <div className="text-[14px] leading-[19px] text-[#3C3C4399] font-nu">Market Cap / Liquidity</div>
          <Button
            className="flex items-center gap-1 text-[14px] leading-[19px] text-[#3C3C4399] font-nu"
            onClick={() => { setPeriodOpen(true) }}
          >
            <span>Price / {pricePeriod} change</span>
            <SortIcon className="w-[14px] h-[22px]" />
          </Button>
        </div>
      )}

      {tokens.map(token => (
        <Token
          key={token}
          title={token}
        />
      ))}

      {!!tokens.length && !tokens.length && (
        <div className="mt-[100px] flex flex-col items-center justify-center gap-3">
          <img src={notFound} className="w-[112px] h-[112px]" />
          <div className="font-nu text-[15px] leading-[21px] font-semibold text-[#3C3C4399] text-center">No search results.<br />Try something different.</div>
        </div>
      )}
    </div>
  )
}

export default Tokens
