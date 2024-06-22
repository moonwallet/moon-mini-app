import { useEffect, useState } from 'react'

import { useSearch, useMock } from '../hooks'

import Button from '../kit/Button'
import Page from '../kit/Page'
import InputAmount from '../kit/InputAmount'
import SearchInput from '../kit/SearchInput'
import Tokens from '../kit/Tokens'

import { TToken } from '../types'

import { ReactComponent as AddIcon } from '../assets/add.svg'
import { ReactComponent as SwapIcon } from '../assets/swap.svg'
import TokenAvatar from '../kit/TokenAvatar'

function Swap() {
  const [step, setStep] = useState<'START' | 'SELECT_FROM' | 'SELECT_TO'>('START')

  const [fromToken, setFromToken] = useState<null | TToken>(null)
  const [toToken, setToToken] = useState<null | TToken>(null)

  const [amount, setAmount] = useState(0)

  const isButtonEnabled = amount > 0
  const buttonText = amount === 0
    ? 'ENTER AMOUNT'
    : 'REVIEW ORDER'

  const swapTokens = () => {
    const _fromToken = fromToken && { ...fromToken }
    setFromToken(toToken)
    setToToken(_fromToken)
  }

  const { tokens } = useMock()
  const [search, setSearch] = useState('')
  const { tokensFiltered, isNotFound } = useSearch({ search, tokens })

  useEffect(() => {
    if (step === 'START') {
      setSearch('')
    }
  }, [step])

  return (
    <Page>
      {step === 'START' && (
        <>
          <div className="flex flex-col gap-2">
            <div className="relative rounded-[20px] bg-white">
              <div className="relative">
                <Button
                  onClick={() => { setStep('SELECT_FROM') }}
                  className="p-[14px] text-left"
                >
                  {!fromToken && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-main/10">
                        <AddIcon className="w-6 h-6 text-main" />
                      </div>
                      <div className="text-[18px] leading-[22px] font-medium text-main">Swap from</div>
                    </div>
                  )}
                  {!!fromToken && (
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <TokenAvatar token={fromToken} />
                        <div>
                          <div className="text-[18px] leading-[22px] font-medium">{fromToken.title}</div>
                          <div className="text-[14px] leading-[22px] text-text/40">0 {fromToken.ticker}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </Button>
                {!!fromToken && (
                  <div className="absolute right-[14px] top-[50%] -translate-y-[50%]">
                    <Button
                      theme="small-light"
                      onClick={() => { }}
                    >
                      Use Max
                    </Button>
                  </div>
                )}
              </div>

              <div className="p-5 pb-8 border-black/[8%] border-t">
                <InputAmount
                  amount={amount}
                  onChange={setAmount}
                />
              </div>
              <div className="z-[1] absolute w-10 h-10 -bottom-[24px] left-[50%] -translate-x-[50%]">
                <Button
                  wrapperClassName=""
                  className="flex items-center justify-center w-10 h-10 bg-[#EAEAEC] rounded-full"
                  onClick={swapTokens}
                >
                  <SwapIcon className="w-10 h-10 text-[#808082]" />
                </Button>
              </div>
            </div>
            <div className="rounded-[20px] bg-white">
              <Button
                onClick={() => { setStep('SELECT_TO') }}
                className="p-[14px] text-left"
              >
                {!toToken && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-main/10">
                      <AddIcon className="w-6 h-6 text-main" />
                    </div>
                    <div className="text-[18px] leading-[22px] font-medium text-main">Swap to</div>
                  </div>
                )}
                {!!toToken && (
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <TokenAvatar token={toToken} />
                      <div>
                        <div className="text-[18px] leading-[22px] font-medium">{toToken.title}</div>
                        <div className="text-[14px] leading-[22px] text-text/40">Receive {toToken.ticker}</div>
                      </div>
                    </div>
                  </div>
                )}
              </Button>
            </div>
          </div>
          <div className="mt-7">
            <Button
              theme="big"
              disabled={!isButtonEnabled}
              onClick={() => {}}
            >
              {buttonText}
            </Button>
          </div>
        </>
      )}

      {(step === 'SELECT_FROM' || step === 'SELECT_TO') && (
        <>
          <div className="py-[10px]">
            <SearchInput
              placeholder="Search ticker, name or address"
              value={search}
              onChange={setSearch}
            />
          </div>

          <Tokens
            header={
              <div className="text-[14px] leading-[19px] text-[#3C3C4399] font-nu">
                {step === 'SELECT_FROM' && 'SWAP FROM'}
                {step === 'SELECT_TO' && 'SWAP TO'}
              </div>
            }
            tokens={tokensFiltered}
            isNotFound={isNotFound}
            onClick={(token) => {
              if (step === 'SELECT_FROM') {
                setFromToken(token)
                setStep('START')
              }
              if (step === 'SELECT_TO') {
                setToToken(token)
                setStep('START')
              }
            }}
          />
        </>
      )}


    </Page>
  )
}

export default Swap
