import cx from 'classnames'
import OutsideClickHandler from 'react-outside-click-handler'

import { Button } from '../kit'

import { ReactComponent as CheckIcon } from '../assets/check.svg'

export const Dropdown = ({ isOpen, setIsOpen, items, activeItem, right, onSelect }: {
  isOpen: boolean,
  setIsOpen: (_: boolean) => void
  items: any[]
  activeItem: any
  right: boolean
  onSelect: (_: any) => void
}) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false)
      }}
    >
      <div
        className={cx(
          'Dropdown absolute mt-2 bg-[#f2f2f2] rounded-[12px] origin-top transition-all',
          right ? 'right-0' : 'left-0',
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0',
        )}
        style={{ boxShadow: '0px 0px 32px 0px #00000033' }}
      >
        {items.map((_, i, arr) => (
          <>
            <Button
              className="relative min-w-[82px] h-[44px] pl-8 pr-4 text-[17px] leading-[22px] text-left"
              onClick={() => {
                onSelect(_)
                setIsOpen(false)
              }}
            >
              {_}
              <CheckIcon className={cx(
                'absolute top-[50%] -translate-y-[50%] left-[10px] w-4 h-4 transition-all',
                activeItem === _ ? 'opacity-100' : 'opacity-0',
              )} />
            </Button>
            {i < arr.length - 1 && (
              <div className="h-[0.5px] bg-[#11111140]" />
            )}
          </>
        ))}
      </div>
    </OutsideClickHandler>
  )
}
