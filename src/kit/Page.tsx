import cx from 'classnames'
import { ReactNode } from 'react'

const Page = ({ className, children, bottom }: {
  className?: string
  children: ReactNode
  bottom?: ReactNode
}) => (
  <div
    className={cx('Page pt-3 px-3 min-h-[100vh] flex flex-col justify-between', className)}
  >
    <div>
      {children}
    </div>
    {bottom && (
      <div className="sticky bottom-0 mt-4 py-2 bg-bg">
        {bottom}
        <div className="absolute -top-2 w-full h-2 bg-gradient-to-t from-bg to-transparent" />
      </div>
    )}
  </div>
)

export default Page
