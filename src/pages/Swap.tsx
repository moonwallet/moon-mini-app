import { useState } from 'react'

import { useSearch, useMock } from '../hooks'

import Button from '../kit/Button'
import Page from '../kit/Page'
import InputAmount from '../kit/InputAmount'
import SearchInput from '../kit/SearchInput'
import Tokens from '../kit/Tokens'

import { ReactComponent as AddIcon } from '../assets/add.svg'
import { ReactComponent as SwapIcon } from '../assets/swap.svg'

function Swap() {
  const [step, setStep] = useState<'START' | 'SELECT_FROM' | 'SELECT_TO'>('START')
  const [amount, setAmount] = useState(0)

  const isButtonEnabled = amount > 0
  const buttonText = amount === 0
    ? 'ENTER AMOUNT'
    : 'REVIEW ORDER'

  const onClickFrom = () => {
    setStep('SELECT_FROM')
  }

  const onClickTo = () => {
    setStep('SELECT_TO')
  }

  const swapTokens = () => {
  }

  const { tokens } = useMock()
  const [search, setSearch] = useState('')
  const { tokensFiltered, isNotFound } = useSearch({ search, tokens })

  return (
    <Page>
      {step === 'START' && (
        <>
          <div className="flex flex-col gap-2">
            <div className="relative rounded-[20px] bg-white">
              <Button
                onClick={onClickFrom}
                className="flex items-center gap-2 p-[14px]"
              >
                <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-main/10">
                  <AddIcon className="w-6 h-6 text-main" />
                </div>
                <div className="text-[18px] leading-[22px] font-medium text-main">Swap from</div>
              </Button>
              <div className="p-5 pb-8 border-black/[8%] border-t">
                <InputAmount
                  amount={amount}
                  onChange={setAmount}
                />
              </div>
              <div className="absolute w-10 h-10 -bottom-[24px] left-[50%] -translate-x-[50%]">
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
                onClick={onClickTo}
                className="flex items-center gap-2 p-[14px]"
              >
                <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-main/10">
                  <AddIcon className="w-6 h-6 text-main" />
                </div>
                <div className="text-[18px] leading-[22px] font-medium text-main">Swap to</div>
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
          />
        </>
      )}


    </Page>
  )
}

export default Swap
