import cx from 'classnames'

export const Skeleton = ({ className, w, h }: {
  className?: string
  w: number
  h: number
}) => (
  <div
    className={cx('Skeleton rounded-full bg-[#EFEFF1] bg-gradient-to-r from-[#EFEFF1] to-[#DCDCDC] animate-skeleton', className)}
    style={{ width: w, height: h, backgroundSize: '200% 100%' }}
  />
)
