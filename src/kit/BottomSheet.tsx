import cx from 'classnames'
import { ReactNode } from 'react'

import { Limiter } from '../kit'

export const BottomSheet = ({ children, isOpen, setIsOpen }: {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (_: boolean) => void
}) => {

  return (
    <div
      onClick={() => { setIsOpen(false) }}
      className={cx(
        'BottomSheet-back fixed inset-0 bg-black bg-opacity-30 z-50 transition-all',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <div
        className={cx(
          'BottomSheet-inner fixed z-50 w-full transition-all',
          !isOpen ? 'invisible -bottom-[100%] opacity-0 pointer-events-none' : 'bottom-0 opacity-100',
        )}
      >
        <Limiter className="bg-[#EAEAEC] py-4 px-3 rounded-t-[24px]">
          <div
            style={{
              paddingBottom: 'env(safe-area-inset-bottom)'
            }}
          >
            {children}
          </div>
        </Limiter>
      </div>
    </div>
  )
}
