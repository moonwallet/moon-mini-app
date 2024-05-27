import * as bip39 from 'bip39'
import cx from 'classnames'
import Lottie from 'lottie-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCopy } from '../hooks'
import { useStore } from '../store'

import Page from '../kit/Page'
import Button from '../kit/Button'
import Word from '../kit/Word'

import animationSuccess from '../assets/animation-success.json'

function Create() {
  const navigate = useNavigate()
  const { copy, isCopied } = useCopy()
  const { setMnemonic } = useStore()

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

  // console.log(bip39.wordlists.english)

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
            onClick={() => { navigate('/wallet') }}
          >
            VIEW MY WALLET
          </Button>
        )}
      </>
    }>
      {step === 'save' && (
        <>
          <div className="flex flex-col items-center">
            <h1 className="text-center">Save your Secret Recovery&nbsp;Phrase</h1>
            <div className="mb-5 text-[16px] leading-[24px] text-text/[50%] text-center">Your Recovery Phrase is&nbsp;necessary for&nbsp;accessing your&nbsp;assets. Do&nbsp;not&nbsp;share&nbsp;it.</div>
            <Button
              theme="small-light"
              onClick={() => { copy(newMnemonic) }}
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
        <div className="flex flex-col items-center gap-[50px]">
          <div className="mt-[150px] w-[112px] h-[112px]">
            <Lottie
              style={{ width: 112, height: 112 }}
              animationData={animationSuccess}
              loop={true}
            />
          </div>
          <h1 className="text-center">Your Wallet is ready</h1>
        </div>
      )}
    </Page>
  )
}

export default Create
