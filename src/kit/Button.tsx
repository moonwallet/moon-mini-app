import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app'
import cx from 'classnames'
import { ReactNode } from 'react'

import Loader from './Loader'

type TButton = {
  theme?: 'default' | 'big' | 'big-light' | 'small' | 'small-light'
  className?: string
  disabled?: boolean
  isBusy?: boolean
  children: ReactNode,
  onClick: () => void
}

function Button({ theme = 'default', className, children, disabled, isBusy, onClick }: TButton) {
  const [impactOccurred] = useHapticFeedback()

  const onClickVibro = () => {
    impactOccurred(theme.includes('big') ? 'heavy' : 'light')
    onClick()
  }

  const big = 'min-h-[50px] rounded-[12px] font-sf font-semibold text-[17px] leading-[22px] uppercase'
  const small = 'rounded-full px-3 py-[6px] font-nu font-semibold text-[15px] leading-[21px]'

  const themeStyle = {
    'default': '',
    'big': `${big} bg-main text-white`,
    'big-light': `${big} bg-main/[10%] text-main`,
    'small': `${small} bg-main text-white`,
    'small-light': `${small} bg-main/[10%] text-main`,
  }[theme]

  return (
    <div className={cx(
      'ButtonWrapper relative',
      ['small', 'small-light'].includes(theme) && 'inline-block',
    )}>
      <button
        className={cx(
          'w-full enabled:hover:brightness-[1.15] enabled:active:brightness-[1.3] transition-all disabled:grayscale disabled:opacity-40 disabled:cursor-not-allowed',
          themeStyle,
          className,
        )}
        disabled={disabled || isBusy}
        onClick={onClickVibro}
      >
        {children}
      </button>
      {isBusy && <Loader size={24} />}
    </div>
  )
}

export default Button
