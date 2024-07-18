import cx from 'classnames'
import { useMemo} from 'react'

import { format } from '../utils'

type TTxType = 'received' | 'swapped' | 'sent'

const Transaction = ({ }: { }) => {
  const txTypes: TTxType[] = ['received', 'swapped', 'sent']
  const txType: TTxType = txTypes[Math.floor(Math.random() * 3)]

  const amount = useMemo(() => Math.random() * 100, [])
  const amount2 = useMemo(() => Math.random() * 100, [])
  return (
    <div
      className="Token flex items-center gap-2 bg-white py-[10px] px-[14px] rounded-[16px]"
    >
      <div className="w-[48px] h-[48px] bg-text/10 rounded-full" />
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
          {txType === 'sent' ? '−' : '+'}{format.amount(amount)} ABC
        </div>
        <div className={cx(
          'text-[14px] leading-[18px] text-[#3C3C4399]'
        )}>
          {txType === 'swapped' && `−${format.amount(amount2)} SOL`}
        </div>
      </div>
    </div>
  )
}

export default Transaction
