import cx from 'classnames'

import Page from '../kit/Page'
import Button from '../kit/Button'

import format from '../format'

import { ReactComponent as SendIcon } from '../assets/action-send.svg'
import { ReactComponent as SwapIcon } from '../assets/action-swap.svg'
import { ReactComponent as ReceiveIcon } from '../assets/action-receive.svg'

function Wallet() {
  const fiat = 0
  const fiatFormatted = format.fiat(fiat)
  const fiatParts = fiatFormatted.split('.')

  const delta = 0
  const deltaFormatted = format.fiat(delta)
  const isDeltaPositive = delta >= 0

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <Button
            className="!bg-[#8888881A] text-text"
            theme="small-light"
            onClick={() => {}}
          >
            {format.address('000000000000000')}
          </Button>
          <Button
            theme="small-light"
            onClick={() => {}}
          >
            Invite Friends
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-[36px] leading-[34px] font-bold">
            <span className="text-[#3C3C4399]">$</span>
            <span>{fiatParts[0]}.</span>
            <span className="text-[24px] leading-[34px]">{fiatParts[1]}</span>
          </div>
          <div className={cx(
            'text-[18px] leading-[18px] font-semibold',
            isDeltaPositive ? 'text-plus' : 'text-minus',
          )}>
            <span>{isDeltaPositive ? '+' : '−'}</span>
            <span>$</span>
            <span>{deltaFormatted}</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button
            className="w-[80px] h-[64px] text-main"
            onClick={() => {}}
          >
            <SendIcon className="mx-auto" />
            <div className="text-[15px] font-semibold">Send</div>
          </Button>
          <Button
            className="w-[80px] h-[64px] text-main"
            onClick={() => {}}
          >
            <SendIcon className="mx-auto" />
            <div className="text-[15px] font-semibold">Swap</div>
          </Button>
          <Button
            className="w-[80px] h-[64px] text-main"
            onClick={() => {}}
          >
            <SendIcon className="mx-auto" />
            <div className="text-[15px] font-semibold">Receive</div>
          </Button>
        </div>

        <div className="flex items-center gap-6 my-5 p-3 pl-[62px] rounded-[16px] bg-[#48486F] text-white text-[18px]">
          <div>Invite friends — earn 50% from&nbsp;Fees</div>
          <Button
            className="h-10 px-[18px] py-2 rounded-full bg-[#0000004D] text-[15px] font-semibold"
            onClick={() => {}}
          >
            Invite
          </Button>
        </div>
      </div>
    </Page>
  )
}

export default Wallet
