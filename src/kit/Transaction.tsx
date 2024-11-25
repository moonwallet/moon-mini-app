import cx from 'classnames'
import { useMemo } from 'react'

import { useGetTokens } from '../hooks'
import { TokenAvatar } from '../kit'
import { TToken, TTx, TTxStatus, TTxType } from '../types'
import { format } from '../utils'

import { ReactComponent as TxWait } from '../assets/tx-wait.svg'
import { ReactComponent as TxFail } from '../assets/tx-fail.svg'
import { ReactComponent as TxSend } from '../assets/tx-send.svg'
import { ReactComponent as TxReceive } from '../assets/tx-receive.svg'
import { ReactComponent as TxSwap } from '../assets/tx-swap.svg'

export const Transaction = () => {
  const amount = useMemo(() => Math.random() * 100, [])
  const amount2 = useMemo(() => Math.random() * 100, [])

  const { data: tokens } = useGetTokens()
  const fromToken: TToken | undefined = tokens?.[0]
  const toToken: TToken | undefined = tokens?.[1]

  const tx: TTx = {
    type: (['received', 'swapped', 'sent'] as TTxType[])[Math.floor(Math.random() * 3)],
    status: (['wait', 'success', 'fail'] as TTxStatus[])[Math.floor(Math.random() * 3)],
  }

  return (
    <div
      className="Token flex items-center gap-2 bg-white py-[10px] px-[14px] rounded-[16px]"
    >
      <div className="relative w-[48px] h-[48px]">
        {(tx.type === 'sent' || tx.type === 'received') &&
          <TokenAvatar
            size={48}
            token={fromToken}
          />
        }
        {tx.type === 'swapped' &&
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
        <div className="absolute -bottom-1 -right-2 h-6 w-6 p-1 bg-white rounded-full">
          {tx.status === 'wait' && <TxWait className="w-4 h-4 animate-spin rounded-full text-main" /> ||
            tx.status === 'fail' && <TxFail className="w-4 h-4 text-warn" /> ||
            tx.type === 'sent' && <TxSend className="w-4 h-4 text-main" /> ||
            tx.type === 'received' && <TxReceive className="w-4 h-4 text-main" /> ||
            tx.type === 'swapped' && <TxSwap className="w-4 h-4 text-main" />
          }
        </div>
      </div>
      <div className="flex-1">
        <div className="text-[18px] leading-[22px] font-medium capitalize">{tx.type}</div>
        <div className="text-[14px] leading-[18px] text-[#3C3C4399]">
          {tx.type === 'received' && `From ${format.address('00000000000000')}`}
          {tx.type === 'sent' && `To ${format.address('00000000000000')}`}
          {tx.type === 'swapped' && 'Moon Wallet'}
        </div>
      </div>
      <div className="text-right">
        <div className={cx(
          'text-[17px] leading-[22px]',
          tx.type === 'sent' ? 'text-[#3C3C4399]' : 'text-[#50AB19]'
        )}>
          {tx.type === 'sent' ? '−' : '+'}{format.amount(amount)} {fromToken?.ticker}
        </div>
        <div className={cx(
          'text-[14px] leading-[18px] text-[#3C3C4399]'
        )}>
          {tx.type === 'swapped' && `−${format.amount(amount2)} ${toToken?.ticker}`}
        </div>
      </div>
    </div>
  )
}
