import { TToken } from '../types'

const TokenAvatar = ({ token }: {
  token: TToken
}) => {
  return (
    <div className="TokenAvatar w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-b from-text/20 to-text/40 rounded-full">
      <span className="text-bg text-[18px] leading-[40px] font-bold">{`${token.ticker.slice(0,1)}${token.ticker.slice(-1)}`}</span>
    </div>
  )
}

export default TokenAvatar
