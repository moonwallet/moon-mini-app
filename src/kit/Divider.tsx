import cx from 'classnames'

export const Divider = ({ className }: {
  className?: string
}) => {
  return (
    <div className={cx('Divider ml-2 h-[1px] bg-text/[10%]', className)} />
  )
}
