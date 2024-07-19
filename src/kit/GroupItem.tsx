import cx from 'classnames'
import type { ReactNode } from 'react'

export const GroupItem = ({ className, title, value, valueClassName }: {
  className?: string
  title: string
  value: ReactNode
  valueClassName?: string
}) => {
  return (
    <div className={cx(
      'GroupItem px-3 py-4 flex items-center justify-between gap-[10px] text-text/70 text-[16px] leading-[22px]',
      className,
    )}>
      <div className="">{title}</div>
      <div className={cx('', valueClassName)}>{value}</div>
    </div>
  )
}
