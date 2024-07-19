import { useEffect, useState } from 'react'

import { useSearch, useMock } from '../hooks'

import { Button, Page, InputAmount, SearchInput, Tokens, Group, GroupItem, TokenAvatar, Divider } from '../kit'

import { TToken } from '../types'
import { format } from '../utils'

import { ReactComponent as AddIcon } from '../assets/add.svg'
import { ReactComponent as SwapIcon } from '../assets/swap.svg'
import { ReactComponent as AdjustIcon } from '../assets/adjust.svg'
import { ReactComponent as WarnIcon } from '../assets/warn.svg'

function Swap() {
  const [step, setStep] = useState<'START' | 'SELECT_FROM' | 'SELECT_TO' | 'CONFIRM' | 'PROGRESS'>('START')

  const [fromToken, setFromToken] = useState<null | TToken>(null)
  const [toToken, setToToken] = useState<null | TToken>(null)

  const [amount, setAmount] = useState(0)

  const rateUsd = 0.01234
  const amountUsd = amount * rateUsd

  const rate = 10
  const receiveAmount = amount * rate

  const balance = 10000
  const isLowBalance = amount > balance

  const [slippage /*, setSlippage */] = useState(0.003)
  const [isSlippageOpen, setIsSlippageOpen] = useState(false)
  const isLowSlippage = slippage < 0.005

  const isButtonEnabled = amount > 0 && !isLowBalance && !!fromToken && !!toToken
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

  const [isBusy, setIsBusy] = useState(false)
  const swap = () => {
    setIsBusy(true)
    // ...
    setTimeout(() => { setStep('PROGRESS') }, 1500)
  }

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
                          <div className="text-[14px] leading-[22px] text-text/40">{format.amount(balance)} {fromToken.ticker}</div>
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
                <div className="text-[14px] leading-[22px] text-[#BFC6CD] text-center">
                  {!fromToken && (<span>&nbsp;</span>)}
                  {!!fromToken && (isLowBalance ? (
                    <span className="text-warn">Not enough balance</span>
                  ) : (
                    <span>{format.fiat$(amountUsd)}</span>)
                  )}
                </div>
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
                    <div className="text-[18px] leading-[22px">
                      {receiveAmount > 0 ? (
                        <>
                          <span className="text-[#3C3C4399]">≈</span>
                          <span>{receiveAmount}</span>
                        </>
                      ) : (
                        <span className="text-[#BFC6CD]">0.00</span>
                      )}
                    </div>
                  </div>
                )}
              </Button>
            </div>
          </div>
          {!!fromToken && !!toToken && (
            <div className="mt-2 flex items-center justify-between">
              <div className="text-[14px] leading-[22px] text-[#00000066]">1 {fromToken.ticker} = {format.amount(rate)} {toToken.ticker}</div>
              <Button
                className="text-main flex items-center gap-1"
                onClick={() => { setIsSlippageOpen(true) }}
              >
                <span className="text-[15px] leading-[21px] font-semibold font-nu">Slippage: {format.percent(slippage)}</span>
                <AdjustIcon className="w-[14px] h-[22px]" />
              </Button>
            </div>
          )}
          <div className="mt-7">
            <Button
              theme="big"
              disabled={!isButtonEnabled}
              onClick={() => { setStep('CONFIRM') }}
            >
              {buttonText}
            </Button>
          </div>

          {isLowSlippage && (
            <div className="mt-2 flex items-center justify-center gap-1 text-warn">
              <WarnIcon className="w-5 h-5" />
              <span className="text-[14px] leading-[22px]">Transaction might be reverted due to low slippage</span>
            </div>
          )}

          {isSlippageOpen && (
            <></>
          )}
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

      {step === 'CONFIRM' && !!fromToken && !!toToken && (
        <>
          <div className="mt-5 flex items-center">
            <TokenAvatar token={fromToken} />
            <TokenAvatar token={toToken} className="relative -left-[10px]" />
          </div>
          <h2 className="mt-4 text-[28px] leading-[36px] font-bold">Confirm swap of <br />{fromToken.ticker} to {toToken.ticker}</h2>
          <Group className="mt-5">
            <GroupItem
              title={`Swap ${fromToken.title}:`}
              value={format.amount(amount)}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title={`Receive ${toToken.title}:`}
              value={format.amount(receiveAmount)}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title="Rate:"
              value={`1 ${fromToken.ticker} = ${format.amount(rate)} ${toToken.ticker}`}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title="Slippage:"
              value={format.percent(slippage)}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title="Transaction Fee:"
              value={format.percent(0.003)}
            />
          </Group>
          <Button
            theme="big"
            wrapperClassName="mt-7"
            onClick={swap}
            disabled={isBusy}
            isBusy={isBusy}
          >{!isBusy ? 'CONFIRM AND SWAP' : 'EXECUTING'}</Button>
        </>
      )}

      {step === 'PROGRESS' && !!fromToken && !!toToken && (
        <>
          <div className="mt-5 flex items-center">
            <TokenAvatar token={fromToken} />
            <TokenAvatar token={toToken} className="relative -left-[10px]" />
          </div>
          <div className="mt-4">
            <span className="text-[28px] leading-[36px] font-bold text-plus">+{format.amount(receiveAmount)}</span>&nbsp;
            <span className="text-[#3C3C4399] font-bold">{toToken.ticker}</span>
          </div>
          <div className="mt-1 text-[#3C3C4399]">-{format.amount(amount)} {fromToken.ticker}</div>
          <Group className="mt-5">
            <GroupItem
              title="Status:"
              value="In progress"
            />
            <Divider className="mx-3"/>
            <GroupItem
              title="Date:"
              value={`${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title="Rate:"
              value={`1 ${fromToken.ticker} = ${format.amount(rate)} ${toToken.ticker}`}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title="Transaction Fee:"
              value={format.percent(0.003)}
            />
          </Group>
          <Button
            theme="big-light"
            wrapperClassName="mt-7"
            onClick={() => {}}
          >VIEW ON SOLSCAN</Button>
        </>
      )}
    </Page>
  )
}

export default Swap
