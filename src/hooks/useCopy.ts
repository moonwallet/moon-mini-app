import { useEffect, useState } from 'react'

export const useCopy = () => {
  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
  }

  const [isCopied, setCopied] = useState(false)
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
  }, [isCopied])

  return { copy, isCopied }
}
