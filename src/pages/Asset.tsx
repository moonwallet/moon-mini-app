import cx from 'classnames'

import format from '../format'
import { useMock } from '../hooks'

import Button from '../kit/Button'
import Page from '../kit/Page'

import { ReactComponent as TokenFavIcon } from '../assets/token-fav.svg'
import { ReactComponent as TokenExplorerIcon } from '../assets/token-explorer.svg'
import { ReactComponent as FlagIcon } from '../assets/flag.svg'

import { ReactComponent as SocialTelegramIcon } from '../assets/social-telegram.svg'
import { ReactComponent as SocialTwitterIcon } from '../assets/social-twitter.svg'
import { ReactComponent as SocialSiteIcon } from '../assets/social-site.svg'

function Asset() {
  const { tokens } = useMock()
  const token = tokens[0]

  const deltaFormatted = format.percent(Math.abs(token.delta))
  const isDeltaPositive = token.delta >= 0

  return (
    <Page bottom={
      <div className="w-full">
        <Button
          theme="big"
          onClick={() => {}}
        >
          BUY
        </Button>
      </div>
    }>
      <div className="flex flex-col gap-5"> 
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-[10px]">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-gradient-to-b from-text/20 to-text/40 rounded-full">
              <span className="text-bg text-[18px] leading-[40px] font-bold">{`${token.ticker.slice(0,1)}${token.ticker.slice(-1)}`}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <div className="text-[18px] leading-[22px] font-medium">{token.title}</div>
                <FlagIcon className="w-5 h-5" />
              </div>
              <div className="text-[24px] leading-[22px] font-semibold">{format.fiat(token.price)}</div>
            </div>
          </div>
          <div className="flex">
            <Button
              className="flex items-center justify-center w-[48px] h-[48px] text-[#7474804D]"
              onClick={() => {}}
            >
              <TokenFavIcon className="w-[48px] h-[48px]" />
            </Button>
            <Button
              className="flex items-center justify-center w-[48px] h-[48px] text-[#99A2AD]"
              onClick={() => {}}
            >
              <TokenExplorerIcon className="w-[48px] h-[48px]" />
            </Button>
          </div>
        </div>

        <div className="flex items-center rounded-xl overflow-hidden">
          <Button
            wrapperClassName="flex-grow basis-0"
            className="w-full flex items-center justify-center gap-1 h-10 bg-main/10 text-main text-[14px]"
            onClick={() => {}}
          >
            <SocialTelegramIcon className="w-5 h-5" />
            <span>Telegram</span>
          </Button>
          <Button
            wrapperClassName="flex-grow basis-0 border-[#0000001A] border-l border-r"
            className="w-full flex items-center justify-center gap-1 h-10 bg-main/10 text-main text-[14px]"
            onClick={() => {}}
          >
            <SocialTwitterIcon className="w-5 h-5" />
            <span>Twitter</span>
          </Button>
          <Button
            wrapperClassName="flex-grow basis-0"
            className="w-full flex items-center justify-center gap-1 h-10 bg-main/10 text-main text-[14px]"
            onClick={() => {}}
          >
            <SocialSiteIcon className="w-5 h-5" />
            <span>Website</span>
          </Button>
        </div>

        <div className="relative h-[350px] rounded-[20px] bg-white p-3">
          <div className={cx(
            'absolute top-3 right-3 px-3 py-[6px] rounded-[20px] bg-[#50AB191A] text-[14px] leading-[18px] text-[#3C3C4399]',
            isDeltaPositive ? 'text-[#50AB19]' : 'text-minus',
          )}>
            <span>{isDeltaPositive ? '+' : '−'}</span>
            <span>{deltaFormatted}</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Asset
