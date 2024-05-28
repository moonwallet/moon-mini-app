import cx from 'classnames'

function Divider({ className }: {
  className?: string
}) {
  return (
    <div className={cx('Divider ml-2 h-[1px] bg-text/[10%]', className)} />
  )
}

export default Divider
