import cx from 'classnames'
import { useMemo } from 'react'

import { useGetTokens } from '../hooks'
import { TokenAvatar } from '../kit'
import { TToken } from '../types'
import { format } from '../utils'

type TTxType = 'received' | 'swapped' | 'sent'

export const Transaction = () => {
  const txTypes: TTxType[] = ['received', 'swapped', 'sent']
  const txType: TTxType = txTypes[Math.floor(Math.random() * 3)]

  const amount = useMemo(() => Math.random() * 100, [])
  const amount2 = useMemo(() => Math.random() * 100, [])

  const { data: tokens } = useGetTokens()
  const fromToken: TToken | undefined = tokens?.[0]
  const toToken: TToken | undefined = tokens?.[1]

  return (
    <div
      className="Token flex items-center gap-2 bg-white py-[10px] px-[14px] rounded-[16px]"
    >
      <div className="relative w-[48px] h-[48px]">
        {(txType === 'sent' || txType === 'received') &&
          <TokenAvatar
            size={48}
            token={fromToken}
          />
        }
        {txType === 'swapped' &&
          <>
            <TokenAvatar
              size={32}
              className="absolute top-0 left-0"
              token={fromToken}
            />
            <TokenAvatar
              size={32}
              className="absolute bottom-0 right-0"
              token={toToken}
            />
          </>
        }
      </div>
      <div className="flex-1">
        <div className="text-[18px] leading-[22px] font-medium capitalize">{txType}</div>
        <div className="text-[14px] leading-[18px] text-[#3C3C4399]">
          {txType === 'received' && `From ${format.address('00000000000000')}`}
          {txType === 'sent' && `To ${format.address('00000000000000')}`}
          {txType === 'swapped' && 'Moon Wallet'}
        </div>
      </div>
      <div className="text-right">
        <div className={cx(
          'text-[17px] leading-[22px]',
          txType === 'sent' ? 'text-[#3C3C4399]' : 'text-[#50AB19]'
        )}>
          {txType === 'sent' ? '−' : '+'}{format.amount(amount)} {fromToken?.ticker}
        </div>
        <div className={cx(
          'text-[14px] leading-[18px] text-[#3C3C4399]'
        )}>
          {txType === 'swapped' && `−${format.amount(amount2)} ${toToken?.ticker}`}
        </div>
      </div>
    </div>
  )
}
