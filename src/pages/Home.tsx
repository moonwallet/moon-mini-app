import cx from 'classnames'
import { useNavigate } from 'react-router-dom'

import { useGetSomething, useGetTokens, useWallet, useGetMe } from '../hooks'
import { Page, Button, Menu, Skeleton, Token } from '../kit'
import { format } from '../utils'

import { ReactComponent as SendIcon } from '../assets/action-send.svg'
import { ReactComponent as SwapIcon } from '../assets/action-swap.svg'
import { ReactComponent as ReceiveIcon } from '../assets/action-receive.svg'
import notFound from '../assets/not-found.png'
import point from '../assets/point.png'

export const Home = () => {
  const navigate = useNavigate()
  const { address } = useWallet()

  const { data: me, isLoading: isMeLoading } = useGetMe()

  const fiat = 0
  const fiatFormatted = format.fiat(fiat)
  const fiatParts = fiatFormatted.split('.')

  const delta = 0
  const deltaFormatted = format.fiat$(delta)
  const isDeltaPositive = delta >= 0

  const { data, isLoading } = useGetSomething()
  console.log(isLoading, data?.length)

  const { data: tokens } = useGetTokens()
  const tokens_ = (tokens || []).slice(0, 4)

  return (
    <Page bottom={<Menu />}>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <Button
            className="!bg-[#8888881A] text-text"
            theme="small-light"
            onClick={() => { navigate('/settings') }}
          >
            {format.address(address)}
          </Button>
          {isMeLoading ? (
            <Skeleton w={120} h={33} />
          ) : (
            <Button
              theme="small-light"
              onClick={() => { navigate('/points') }}
            >
              {me?.data.points} Moon Points
            </Button>
          )}
        </div>

        <div className="flex flex-col items-center gap-2">
          {isLoading ?
            <Skeleton w={90} h={38} />
          :
            <div className="text-[36px] leading-[34px] font-bold">
              <span className="text-[#3C3C4399]">$</span>
              <span>{fiatParts[0]}.</span>
              <span className="text-[24px] leading-[34px]">{fiatParts[1]}</span>
            </div>
          }
          {isLoading ?
            <Skeleton w={62} h={18} />
          :
            <div className={cx(
              'opacity-0 text-[18px] leading-[18px] font-semibold',
              isDeltaPositive ? 'text-plus' : 'text-minus',
            )}>
              <span>{isDeltaPositive ? '+' : '−'}</span>
              <span>{deltaFormatted}</span>
            </div>
          }
        </div>

        <div className="flex items-center justify-center">
          <Button
            wrapperClassName="w-[80px]"
            className="h-[64px] text-main"
            onClick={() => { navigate('/send') }}
          >
            <SendIcon className="mx-auto" />
            <div className="text-[15px] font-semibold">Send</div>
          </Button>
          <Button
            wrapperClassName="w-[80px]"
            className="h-[64px] text-main"
            onClick={() => { navigate('/swap') }}
          >
            <SwapIcon className="mx-auto" />
            <div className="text-[15px] font-semibold">Swap</div>
          </Button>
          <Button
            wrapperClassName="w-[80px]"
            className="h-[64px] text-main"
            onClick={() => { navigate('/receive') }}
          >
            <ReceiveIcon className="mx-auto" />
            <div className="text-[15px] font-semibold">Receive</div>
          </Button>
        </div>
      </div>

      <Button
        className="flex items-center justify-between gap-6 my-5 p-3 rounded-[16px] bg-[#48486F] text-white"
        onClick={() => { navigate('/points') }}
      >
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={point} />
          <div className="text-[18px] font-medium text-left">Complete&nbsp;tasks, earn&nbsp;points, get&nbsp;rewards</div>
        </div>
        <div className="flex items-center justify-center h-10 px-[18px] py-2 rounded-full bg-[#0000004D] text-[15px] font-semibold">Open</div>
      </Button>

      <div>
        {!(!isLoading && !data) &&
          <div className="mb-[10px]">
            <div className="w-full text-[#3C3C4399] flex items-center text-[14px] leading-[20px]">
              <div className="w-[40%]">Token</div>
              <div className="w-[30%] text-right">Price</div>
              <div className="w-[30%] text-right">Balance</div>
            </div>
            <div className="flex flex-col gap-2">
            </div>
          </div>
        }
        {isLoading &&
          <Token />
        }
        {!isLoading && !!data &&
          <div className="flex flex-col gap-2">
            {tokens_.map(token =>
              <Token
                key={token.address}
                token={token}
                onClick={() => { navigate(`/asset?address=${token.address}`) }}
              />
            )}
          </div>
        }
        {!isLoading && !data &&
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={notFound} className="w-[112px] h-[112px]" />
            <div className="font-nu text-[15px] leading-[21px] font-semibold text-center text-[#3C3C4399]">
              You don’t have any assets.<br />Transfer some SOL to your wallet
            </div>
            <Button
              className="!bg-[#8888881A] text-text"
              theme="small-light"
              onClick={() => { navigate('/receive') }}
            >
              Receive
            </Button>
          </div>
        }
      </div>
    </Page>
  )
}
