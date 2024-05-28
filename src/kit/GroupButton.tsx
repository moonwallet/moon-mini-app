import cx from 'classnames'

import Button from './Button'

function GroupButton({ className, icon, text, onClick }: {
  className?: string
  icon: any
  text: string
  onClick: VoidFunction
}) {
  return (
    <Button
      className={cx('GroupButton ', className)}
      onClick={onClick}
    >
      <div className="flex items-center gap-[10px] px-3 py-4">
        <div className="w-[28px] h-[28px]">{icon}</div>
        <div className="text-[16px] leading-[22px] text-text/[70%]">{text}</div>
      </div>
    </Button>
  )
}

export default GroupButton
