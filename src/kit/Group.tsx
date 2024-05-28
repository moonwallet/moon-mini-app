import cx from 'classnames'
import type { ReactNode } from 'react'

function Group({ className, children }: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cx(
      'Group bg-[#FFFFFF] rounded-[16px] overflow-hidden',
      className,
    )}>
      {children}
    </div>
  )
}

export default Group
