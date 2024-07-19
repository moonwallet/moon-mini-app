import cx from 'classnames'

import { TToken } from '../types'

export const TokenAvatar = ({ className, token }: {
  token: TToken
  className?: string
}) => {
  return (
    <div className={cx(
      'TokenAvatar w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-b from-text/20 to-text/40 rounded-full',
      className,
    )}>
      <span className="text-bg text-[18px] leading-[40px] font-bold">{`${token.ticker.slice(0,1)}${token.ticker.slice(-1)}`}</span>
    </div>
  )
}
