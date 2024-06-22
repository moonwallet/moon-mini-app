import { ReactNode } from 'react'

import { TToken } from '../types'
import Token from '../kit/Token'

import notFound from '../assets/not-found.png'

const Tokens = ({ header, tokens, isNotFound, onClick }: {
  header?: ReactNode
  tokens: TToken[]
  isNotFound: boolean
  onClick: (token: TToken) => void
}) => {
  return (
    <div className="Tokens mt-10 flex flex-col gap-2">
      {!!tokens.length && header}

      {tokens.map(token => (
        <Token
          key={token.address}
          token={token}
          onClick={onClick}
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
