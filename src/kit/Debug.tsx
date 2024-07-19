import cx from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import { useCopy, useStore } from '../hooks'

const OPEN_DEBUG_RIGHT_CLICKS = 5

export const Debug = () => {
  const { isDebug, setDebug } = useStore()
  const { copy } = useCopy()

  const [n, setN] = useState(0)

  const listener = useCallback((e: MouseEvent) => {
    if (e.which === 3) {
      const newN = n + 1
      setN(newN)
      if (newN % OPEN_DEBUG_RIGHT_CLICKS === 0) {
        setDebug(!isDebug)
      }
    }
  }, [n, setN])

  useEffect(() => {
    const handler = setTimeout(() => {
      setN(0)
    }, 800)

    return () => {
      clearTimeout(handler)
    }
  }, [n, setN])

  useEffect(() => {
    window.addEventListener('mousedown', listener)
    return () => {
      window.removeEventListener('mousedown', listener)
    }
  }, [listener])

  const out = (title: string, val: any, isOpen?: boolean) => {
    const string = typeof val === 'object' && val !== null
      ? JSON.stringify(val, null, 2)
      : String(val)

    return (
      <details open={isOpen}>
        <summary className="select-none font-semibold gap-2 cursor-pointer">
          <span>{title}</span>
          <span className="opacity-40 mx-[0.5em]">[show]</span>
          <button className="opacity-40" onClick={() => { copy(string) } }>[copy]</button>
        </summary>
        <pre className="p-[0.3em] mb-[1em] leading-[1.1em] whitespace-break-spaces bg-[#8883]">{string}</pre>
      </details>
    )
  }

  if (!isDebug) {
    return null
  }

  return (
    <div className={cx(!isDebug && 'h-0 overflow-hidden')}>
      <div className="mt-10 text-[12px] break-words opacity-70 overflow-x-auto [&>pre]:whitespace-pre-wrap">
        <h2 className="text-[18px] leading-[18px]">Debug</h2>
        <br />
        {out('window.Telegram?.WebApp', window.Telegram?.WebApp)}
        {out('location.href', location.href)}
      </div>
    </div>
  )
}
