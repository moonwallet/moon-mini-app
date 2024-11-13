import { useEffect, useState } from 'react'

import { useSearch, useGetTokens } from '../hooks'

import { Button, Page, InputAmount, SearchInput, Tokens, Group, GroupItem, TokenAvatar, Divider, InputAddress } from '../kit'

import { format } from '../utils'
import { TToken } from '../types'

import { ReactComponent as AddIcon } from '../assets/add.svg'
import { ReactComponent as SendIcon } from '../assets/send.svg'

export const Send = () => {
  const [step, setStep] = useState<'SELECT_FROM' | 'ENTER' | 'CONFIRM' | 'PROGRESS'>('SELECT_FROM')

  const [fromToken, setFromToken] = useState<null | TToken>(null)
  const [recipientAddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState(0)

  const rateUsd = 0.01234
  const amountUsd = amount * rateUsd

  const balance = 10000 // todo
  const isLowBalance = amount > balance

  const isButtonEnabled = amount > 0 && !isLowBalance && !!fromToken && !!recipientAddress

  const buttonText =
    !recipientAddress ? 'Enter recipient’s address' : // todo: check
    amount === 0 ? 'ENTER AMOUNT'
    : 'CONFIRM AND SEND'

  const { data: tokens } = useGetTokens()
  const [search, setSearch] = useState('')
  const { tokensFiltered, isNotFound } = useSearch({ search, tokens: tokens || [] })

  useEffect(() => {
    if (step === 'SELECT_FROM') {
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
      {(step === 'SELECT_FROM') && (
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
                {step === 'SELECT_FROM' && 'SEND'}
              </div>
            }
            tokens={tokensFiltered}
            isNotFound={isNotFound}
            onClick={(token) => {
              setFromToken(token)
              setStep('ENTER')
            }}
          />
        </>
      )}

      {step === 'ENTER' && (
        <>
          <div className="flex flex-col gap-2">
            <div className="relative h-[56] rounded-[20px] bg-white">
              <InputAddress
                placeholder='Enter recipient’s SOL address'
                value={recipientAddress}
                onChange={setRecipientAddress}
              />
            </div>
            <div className="relative rounded-[20px] bg-white">
              <div className="relative">
                <Button
                  onClick={() => { setStep('SELECT_FROM') }}
                  className="p-[14px] text-left"
                >
                  {!fromToken && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center h-[48px] w-[48px] rounded-full bg-main/10">
                        <AddIcon className="w-10 h-10 text-main" />
                      </div>
                      <div className="text-[18px] leading-[22px] font-medium text-main">Send</div>
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
            </div>
          </div>

          <div className="mt-7">
            <Button
              theme="big"
              disabled={!isButtonEnabled}
              onClick={() => { setStep('CONFIRM') }}
            >
              {buttonText}
            </Button>
          </div>
        </>
      )}

      {step === 'CONFIRM' && !!fromToken && (
        <>
          <div className="mt-5 flex items-center">
            <SendIcon className="w-[48px] h-[48px] text-main" />
            <TokenAvatar token={fromToken} className="relative -left-[10px]" />
          </div>
          <h2 className="mt-4 text-[28px] leading-[36px] font-bold">Confirm send of <br />{fromToken.ticker}</h2>
          <Group className="mt-5">
            <GroupItem
              title={`Recipient address:`}
              value={format.address(recipientAddress)}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title={`Send ${fromToken.title}:`}
              value={format.amount(amount)}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title="Fiat Equivalent:"
              value={format.fiat$(amountUsd)}
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

      {step === 'PROGRESS' && !!fromToken && (
        <>
          <div className="mt-5 flex items-center">
            <SendIcon className="w-[48px] h-[48px] text-main" />
            <TokenAvatar token={fromToken} className="relative -left-[10px]" />
          </div>
          <div className="mt-4 text-[#3C3C4399]">
            <span className="text-[28px] leading-[36px] font-bold">-{format.amount(amount)}</span>&nbsp;
            <span className="font-bold">{fromToken.ticker}</span>
          </div>
          <div className="mt-1 text-[#3C3C4399]">-{format.fiat$(amountUsd)}</div>
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
              title="Recipient address:"
              value={format.address(recipientAddress)}
            />
            <Divider className="mx-3"/>
            <GroupItem
              title="Transaction Fee:"
              value={format.percent(0.003) /* todo */ }
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
