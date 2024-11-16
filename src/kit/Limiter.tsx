import cx from 'classnames'
import { ReactNode } from 'react'

export const Limiter = ({ className, children }: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cx('Limiter mx-auto w-full max-w-[800px]', className)}>
      {children}
    </div>
  )
}
