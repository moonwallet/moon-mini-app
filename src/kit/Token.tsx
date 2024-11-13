import cx from 'classnames'

import { Button, Skeleton, TokenAvatar } from './'

import { format } from '../utils'
import { TToken } from '../types'

export const Token = ({ token, onClick }: {
  token?: TToken
  onClick?: (token: TToken) => void
}) => {
  const deltaFormatted = !token ? '' : format.percent(Math.abs(token.delta))
  const isDeltaPositive = !token ? false : token.delta >= 0

  return (
    <div className="Token">
      <Button
        className="text-left flex items-center gap-2 bg-white py-[10px] px-[14px] rounded-[16px]"
        onClick={!(onClick && token) ? () => {} : () => { onClick(token) }}
      >
        <TokenAvatar token={token} />
        {!token && <Skeleton w={100} h={20} />}
        {!!token &&
          <>
            <div className="flex-1">
              <div className="text-[18px] leading-[22px] font-medium">{token.title}</div>
              <div className="text-[14px] leading-[18px] text-[#3C3C4399]">850.9k / 100.3k</div>
            </div>
            <div className="text-right">
              <div className="text-[18px] leading-[22px]">{format.fiat$(token.price)}</div>
              <div className={cx(
                'opacity-0 text-[14px] leading-[18px] text-[#3C3C4399]',
                isDeltaPositive ? 'text-plus' : 'text-minus',
              )}>
                <span>{isDeltaPositive ? '+' : '−'}</span>
                <span>{deltaFormatted}</span>
              </div>
            </div>
          </>
        }
      </Button>
    </div>
  )
}
