import cx from 'classnames'

export const Word = ({ number, word, onChange }: {
  number: number
  word: string
  onChange?: (val: string) => void
}) => (
  <div className="Word relative">
    <input
      tabIndex={number}
      className={cx(
        'w-full bg-white rounded-[12px] p-3 pl-8',
        onChange ? 'focus:outline-main outline-1 focus:outline-1' : 'outline-none',
      )}
      type="text"
      readOnly={!onChange}
      value={word}
      onChange={(e) => { onChange?.(e.target.value) }}
    />
    <div className="absolute left-[12px] top-[50%] -translate-y-[50%] text-text/[30%] select-none pointer-events-none">{number}</div>
  </div>
)
