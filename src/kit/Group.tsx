import cx from 'classnames'
import type { ReactNode } from 'react'

export const Group = ({ className, children }: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cx(
      'Group bg-[#FFFFFF] rounded-[16px] overflow-hidden',
      className,
    )}>
      {children}
    </div>
  )
}
