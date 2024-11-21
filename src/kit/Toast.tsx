import cx from 'classnames'
import { useEffect, useState } from 'react'

import { ReactComponent as WarnBig } from '../assets/warn-big.svg'
import { useStore } from '../hooks'

export const Toast = ({ className }: {
  className?: string
}) => {
  const { toasts } = useStore()

  const [closedToasts, setClosedToasts] = useState<number[]>([])

  const TIMEOUT = 2500

  useEffect(() => {
    const interval = setInterval(() => {
      const now: number = +Date.now()
      setClosedToasts([...new Set([
        ...closedToasts,
        ...toasts
          .filter(toast => toast.createdAt + TIMEOUT < now)
          .map(_ => _.createdAt),
      ])])
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [toasts, closedToasts, setClosedToasts])

  return (
    <div className="Toast-container fixed z-[100] top-0 left-0 w-full">
      {toasts.map(toast => (
        <div
          key={`Toast-${toast.createdAt}`}
          className={cx(
            'Toast-wrapper px-3 transition-all animate-appear',
            !closedToasts.includes(toast.createdAt)
              ? 'py-1 opacity-100 scale-1 h-auto'
              : 'py-0 opacity-0 scale-0 h-0 invisible',
          )}
        >
          <div
            className={cx(
              'Toast px-[14px] py-[10px] flex items-center gap-3 backdrop-blur-md bg-text/60 text-bg2 rounded-[14px] transition-all',
              className,
            )}
            onClick={() => {
              setClosedToasts([...closedToasts, toast.createdAt])
            }}
          >
            <WarnBig className="w-[28px] h-[28px]" />
            <div className="text-[14px] leading-[18px] font-semibold">{toast.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
