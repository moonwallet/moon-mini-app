import * as bip39 from 'bip39'

import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePersistStore } from '../hooks'

import { Page, Button, ShowMnemonic, Word, Success } from '../kit'

export const Create = () => {
  const navigate = useNavigate()
  const { setMnemonic } = usePersistStore()

  const newMnemonic = useMemo<string>(() => bip39.generateMnemonic(), [])
  const words = newMnemonic.split(' ')

  const [step, setStep] = useState<'save' | 'check' | 'success'>('save')

  const [word1, setWord1] = useState('')
  const [word2, setWord2] = useState('')
  const [word3, setWord3] = useState('')

  const numbers = useMemo(() => {
    const numbers: number[] = []
    while (numbers.length < 3) {
      const number = Math.floor(Math.random() * 12)
      if (!numbers.includes(number)) {
        numbers.push(number)
      }
    }
    return numbers.sort((a, b) => a < b ? -1 : 1)
  }, [])

  const isNextEnabled =
    word1 === words[numbers[0]] &&
    word2 === words[numbers[1]] &&
    word3 === words[numbers[2]]

  // console.log(bip39.wordlists.english) // todo

  useEffect(() => {
    if (step === 'success') {
      setMnemonic(newMnemonic)
    }
  }, [step])

  return (
    <Page bottom={
      <>
        {step === 'save' && (
          <Button
            theme="big"
            onClick={() => { setStep('check') }}
          >
            I SAVED MY RECOVERY PHRASE
          </Button>
        )}
        {step === 'check' && (
          <Button
            disabled={!isNextEnabled}
            theme="big"
            onClick={() => { setStep('success') }}
          >
            NEXT
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
      {step === 'save' && (
        <ShowMnemonic mnemonic={newMnemonic} />
      )}

      {step === 'check' && (
        <>
          <h1 className="text-center">Let’s check you saved it correctly</h1>
          <div className="mt-10 flex flex-col gap-3">
            <Word
              key={numbers[0]}
              number={numbers[0] + 1}
              word={word1}
              onChange={setWord1}
            />
            <Word
              key={numbers[1]}
              number={numbers[1] + 1}
              word={word2}
              onChange={setWord2}
            />
            <Word
              key={numbers[2]}
              number={numbers[2] + 1}
              word={word3}
              onChange={setWord3}
            />
          </div>
        </>
      )}

      {step === 'success' && (
        <Success />
      )}
    </Page>
  )
}
