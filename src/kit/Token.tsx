import cx from 'classnames'
import { useMemo} from 'react'

import format from '../format'

const Token = ({ title }: { title: string }) => {
  const delta = useMemo(() => 100 * Math.random() * (Math.random() > 0.5 ? 1 : -1), [])
  const deltaFormatted = format.percent(Math.abs(delta))
  const isDeltaPositive = delta >= 0
  const price = useMemo(() => Math.random() * 100, [])
  return (
    <div
      className="Token flex items-center gap-2 bg-white py-[10px] px-[14px] rounded-[16px]"
    >
      <div className="w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-b from-text/20 to-text/40 rounded-full">
        <span className="text-bg text-[18px] leading-[40px] font-bold">{`${title.slice(-1)}${title.slice(0,1)}`}</span>
      </div>
      <div className="flex-1">
        <div className="text-[18px] leading-[22px] font-medium">{title}</div>
        <div className="text-[14px] leading-[18px] text-[#3C3C4399]">850.9k / 100.3k</div>
      </div>
      <div className="text-right">
        <div className="text-[18px] leading-[22px]">${format.fiat(price)}</div>
        <div className={cx(
          'text-[14px] leading-[18px] text-[#3C3C4399]',
          isDeltaPositive ? 'text-plus' : 'text-minus',
        )}>
          <span>{isDeltaPositive ? '+' : '−'}</span>
          <span>{deltaFormatted}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  )
}

export default Token
