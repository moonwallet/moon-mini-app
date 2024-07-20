import cx from 'classnames'

import { TToken } from '../types'
import { Skeleton } from './Skeleton'

export const TokenAvatar = ({ className, size, token }: {
  className?: string
  token?: TToken
  size?: number
}) => {
  const _size = size || 48
  return (
    <div
      className={cx(
        'TokenAvatar w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-b from-text/20 to-text/40 rounded-full',
        className,
      )}
      style={{ width: _size, height: _size }}
    >
      {!token
        ? <Skeleton w={_size} h={_size} />
        : <span className="text-bg text-[18px] leading-[40px] font-bold">{`${token.ticker.slice(0,1)}${token.ticker.slice(-1)}`}</span>
      }
    </div>
  )
}
