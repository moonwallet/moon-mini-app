import cx from 'classnames'

import Button from './Button'
import TokenAvatar from './TokenAvatar'

import format from '../format'
import { TToken } from '../types'

const Token = ({ token, onClick }: {
  token: TToken
  onClick: (token: TToken) => void
}) => {
  const deltaFormatted = format.percent(Math.abs(token.delta))
  const isDeltaPositive = token.delta >= 0

  return (
    <div className="Token">
      <Button
        className="text-left flex items-center gap-2 bg-white py-[10px] px-[14px] rounded-[16px]"
        onClick={() => { onClick(token) }}
      >
        <TokenAvatar token={token} />
        <div className="flex-1">
          <div className="text-[18px] leading-[22px] font-medium">{token.title}</div>
          <div className="text-[14px] leading-[18px] text-[#3C3C4399]">850.9k / 100.3k</div>
        </div>
        <div className="text-right">
          <div className="text-[18px] leading-[22px]">{format.fiat(token.price)}</div>
          <div className={cx(
            'text-[14px] leading-[18px] text-[#3C3C4399]',
            isDeltaPositive ? 'text-plus' : 'text-minus',
          )}>
            <span>{isDeltaPositive ? '+' : '−'}</span>
            <span>{deltaFormatted}</span>
            <span>%</span>
          </div>
        </div>
      </Button>
    </div>
  )
}

export default Token
