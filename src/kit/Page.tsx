import cx from 'classnames'
import { ReactNode } from 'react'

const Page = ({ className, children, bottom }: {
  className?: string
  children: ReactNode
  bottom?: ReactNode
}) => (
  <div
    className={cx('Page pt-5 px-4 min-h-[100vh] flex flex-col justify-between', className)}
  >
    <div>
      {children}
    </div>
    {bottom && (
      <div className="sticky bottom-0 py-2 bg-bg">
        {bottom}
      </div>
    )}
  </div>
)

export default Page
