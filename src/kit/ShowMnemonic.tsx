import cx from 'classnames'

import { useCopy } from '../hooks'

import { Button, Word } from '../kit'

export const ShowMnemonic = ({ className, mnemonic }: {
  className?: string
  mnemonic: string
}) => {
  const words = mnemonic.split(' ')
  const { copy, isCopied } = useCopy()
  return (
    <>
      <div className={cx('flex flex-col items-center', className)}>
        <h1 className="text-center">Save your Secret Recovery&nbsp;Phrase</h1>
        <div className="mb-5 text-[16px] leading-[24px] text-text/[50%] text-center">Your Recovery Phrase is&nbsp;necessary for&nbsp;accessing your&nbsp;assets. Do&nbsp;not&nbsp;share&nbsp;it.</div>
        <Button
          theme="small-light"
          onClick={() => { copy(mnemonic) }}
        >
          <div className="relative">
            <span className={cx(
              'absolute w-full h-full text-center transition-all',
              isCopied ? 'opacity-100' : 'opacity-0',
            )}>Copied!</span>
            <span className={cx(
              'transition-all',
              isCopied ? 'opacity-0' : 'opacity-100',
            )}>Copy to clipboard</span>
          </div>
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-2 grid-rows-6 grid-flow-col gap-3">
        {words.map((word, i) => (
          <Word
            key={i}
            number={i + 1}
            word={word}
          />
        ))}
      </div>
    </>
  )
}
