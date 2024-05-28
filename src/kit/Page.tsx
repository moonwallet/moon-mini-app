import cx from 'classnames'
import { ReactNode } from 'react'

import { useInit } from '../hooks'

const Page = ({ className, children, bottom }: {
  className?: string
  children: ReactNode
  bottom?: ReactNode
}) => {
  useInit()

  return (
    <div
      className={cx('Page pt-3 px-3 min-h-[100vh] flex flex-col justify-between', className)}
    >
      <div>
        {children}
      </div>
      {bottom && (
        <div className="sticky bottom-0 mt-4 py-[6px] bg-bg">
          {bottom}
          <div className="absolute -top-2 w-full h-2 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  )
}

export default Page
