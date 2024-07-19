import * as bip39 from 'bip39'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePersistStore } from '../hooks/useStore'

import { Page, Button, Word, Success } from '../kit'

function Import() {
  const navigate = useNavigate()
  const { setMnemonic } = usePersistStore()

  const [step, setStep] = useState<'import' | 'success'>('import')
  const [words, setWords] = useState(['', '', '', '', '', '', '', '', '', '', '', '',])

  const newMnemonic = words.join(' ')
  const isImportEnabled = words.every(word => bip39.wordlists.english.includes(word))

  useEffect(() => {
    if (step === 'success') {
      setMnemonic(newMnemonic)
    }
  }, [step])

  const paste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      const clipWords = text.trim().split(' ')
      const newWords = [...words]
      if (clipWords.length) {
        for (let i = 0; i < Math.min(clipWords.length, 12); i++) {
          newWords[i] = clipWords[i]
        }
        setWords(newWords)
      }
    } catch (error) {
      console.error('Failed to read clipboard')
    }
  }

  return (
    <Page bottom={
      <>
        {step === 'import' && (
          <Button
            theme="big"
            disabled={!isImportEnabled}
            onClick={() => { setStep('success') }}
          >
            IMPORT WALLET
          </Button>
        )}
        {step === 'success' && (
          <Button
            theme="big"
            onClick={() => { navigate('/') }}
          >
            VIEW MY WALLET
          </Button>
        )}
      </>
    }>
      {step === 'import' && (
        <>
          <div className="flex flex-col items-center">
            <h1 className="text-center">Enter Recovery Phrase</h1>
            <div className="mb-5 text-[16px] leading-[24px] text-text/[50%] text-center">Enter your Secret Recovery Phrase in it’s exact order</div>
            <Button
              theme="small-light"
              onClick={paste}
            >
              Paste from clipboard
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 grid-rows-6 grid-flow-col gap-3">
            {words.map((word, i) => (
              <Word
                key={i}
                number={i + 1}
                word={word}
                onChange={(val: string) => {
                  const newWords = [...words]
                  newWords[i] = val
                  setWords(newWords)
                }}
              />
            ))}
          </div>
        </>
      )}

      {step === 'success' && (
        <Success />
      )}
    </Page>
  )
}

export default Import
