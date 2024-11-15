import cx from 'classnames'
import { useNavigate, useLocation } from 'react-router-dom'

import { useGetTokens, /* useGetCandles, */ useShareLink, useOpenLink, useCopy, usePlatform } from '../hooks'
import { Button, Page /*, TradingView */ } from '../kit'
import { format } from '../utils'

import { ReactComponent as TokenFavIcon } from '../assets/token-fav.svg'
import { ReactComponent as TokenShareIcon } from '../assets/token-share.svg'
import { ReactComponent as FlagIcon } from '../assets/flag.svg'

import { ReactComponent as SocialTelegramIcon } from '../assets/social-telegram.svg'
import { ReactComponent as SocialTwitterIcon } from '../assets/social-twitter.svg'
import { ReactComponent as SocialSiteIcon } from '../assets/social-site.svg'

import { ReactComponent as CreatedIcon } from '../assets/created.svg'
import { ReactComponent as CommunityIcon } from '../assets/community.svg'
import { ReactComponent as OutIcon } from '../assets/out.svg'

export const Asset = () => {
  const navigate = useNavigate()
  const routerLocation = useLocation()
  const queryParameters = new URLSearchParams(routerLocation.search)
  const address = queryParameters.get('address')

  const { data: tokens } = useGetTokens()
  // const { data: candles } = useGetCandles()
  // const { candles } = useCandles()
  const token = tokens?.find(token => token.address === address) || tokens?.[0] || null

  const { shareUrl, shareLink } = useShareLink({ address: address || '' })
  const { openLink } = useOpenLink()
  const { copy /*, isCopied */ } = useCopy()
  const { isTg } = usePlatform()

  const share = () => {
    try {
      openLink(shareLink)
      if (!isTg) {
        copy(shareUrl)
      }
    } catch {
      copy(shareUrl)
    }
  }

  if (!token) {
    return null
  }

  const deltaFormatted = format.percent(Math.abs(token?.delta))
  const isDeltaPositive = token?.delta >= 0

  const pool_address = 'EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx'

  return (
    <Page bottom={
      <div className="w-full flex items-center gap-2">
        <Button
          wrapperClassName="flex-grow basis-0"
          theme="big"
          onClick={() => { navigate(`/swap?from=SOL&to=${token.ticker !== 'SOL' ? token.ticker : ''}`) }}
        >
          BUY
        </Button>
        <Button
          wrapperClassName="flex-grow basis-0"
          theme="big-light"
          onClick={() => { navigate(`/swap?from=${token.ticker !== 'SOL' ? token.ticker : ''}&to=SOL`) }}
        >
          SELL
        </Button>
      </div>
    }>
      <div className="flex flex-col gap-5 pb-5">
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
              <div className="text-[24px] leading-[22px] font-semibold">{format.fiat$(token.price)}</div>
            </div>
          </div>
          <div className="flex">
            {false &&
            <Button
              className="flex items-center justify-center w-[48px] h-[48px] text-[#7474804D]"
              onClick={() => {}}
            >
              <TokenFavIcon className="w-[48px] h-[48px]" />
            </Button>
            }
            <Button
              className="flex items-center justify-center w-[48px] h-[48px] text-[#99A2AD]"
              onClick={share}
            >
              <TokenShareIcon className="w-[48px] h-[48px]" />
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

        <div className="flex flex-col items-center gap-2">
          <div className="w-full relative h-[350px] rounded-[20px] bg-white --p-2 --pt-[64px] overflow-hidden">
            <div className={cx(
              '!opacity-0 absolute top-3 right-3 px-3 py-[6px] rounded-[20px] text-[14px] leading-[18px] text-[#3C3C4399]',
              isDeltaPositive ? 'text-[#50AB19] bg-[#50AB19]/10' : 'text-minus bg-minus/10',
            )}>
              <span>{isDeltaPositive ? '+' : '−'}</span>
              <span>{deltaFormatted}</span>
              <span>%</span>
            </div>
            {/* {!!candles &&
              <TradingView candles={candles} />
            } */}
            <iframe
              id="dextools-widget"
              className="w-full h-[350px]"
              src={`https://www.dextools.io/widget-chart/en/solana/pe-light/${pool_address}?theme=light&chartType=1&chartResolution=5&drawingToolbars=false&chartInUsd=true&headerColor=ffffff`}
            />
          </div>

          <div className="flex w-full rounded-[20px] bg-white py-3">
            <div className="flex flex-grow basis-0 flex-col items-center gap-1 border-[#0000001A] border-r">
              <div className="text-[12px] leading-[18px] text-[#3C3C4399]">Market Cap</div>
              <div className="text-[18px] leading-[22px] font-medium">$1.2M</div>
            </div>
            <div className="flex flex-grow basis-0 flex-col items-center gap-1 border-[#0000001A] border-r">
              <div className="text-[12px] leading-[18px] text-[#3C3C4399]">Liquidity</div>
              <div className="text-[18px] leading-[22px] font-medium">$120k</div>
            </div>
            <div className="flex flex-grow basis-0 flex-col items-center gap-1 border-[#0000001A] border-r">
              <div className="text-[12px] leading-[18px] text-[#3C3C4399]">24h Volume</div>
              <div className="text-[18px] leading-[22px] font-medium">$150k</div>
            </div>
            <div className="flex flex-grow basis-0 flex-col items-center gap-1 border-[#0000001A] border-r">
              <div className="text-[12px] leading-[18px] text-[#3C3C4399]">Holders</div>
              <div className="text-[18px] leading-[22px] font-medium">4,320</div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="pt-5 px-1 pb-[6px] text-[12px] leading-[22px] text-[#00000066]">ABOUT</div>
          <div className="rounded-[20px] bg-white px-3">
            <div className="border-[#0000001A] border-b py-4 text-[17px] leading-[24px]">
              $duk - duk dev gone duk kill dev duk duk go kill all mfers duk make dev regret
            </div>
            <div className="flex items-center justify-between gap-[10px] border-[#0000001A] border-b py-4 text-[17px] leading-[24px]">
              <div className="flex items-center justify-between gap-[10px]">
                <CreatedIcon className="w-5 h-5" />
                <span className="text-[16px] leading-[22px] text-[#000000B2]">Pair created:</span>
              </div>
              <div className="text-[16px] leading-[22px] text-[#000000B2]">14 April, 2022</div>
            </div>
            <div className="flex items-center justify-between gap-[10px] border-[#0000001A] border-b py-4 text-[17px] leading-[24px]">
              <div className="flex items-center justify-between gap-[10px]">
                <CommunityIcon className="w-5 h-5" />
                <span className="text-[16px] leading-[22px] text-[#000000B2]">Community take over</span>
              </div>
              <div className="text-[16px] leading-[22px] text-[#000000B2]">14 April, 2022</div>
            </div>
            <a target="_blank" href={`https://solscan.io/`} className="flex items-center gap-[10px] py-4 text-main text-[17px] leading-[24px]">
              <div className="flex items-center justify-between gap-[10px]">
                <OutIcon className="w-5 h-5" />
                <span className="text-[16px] leading-[22px]">View on Solscan</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Page>
  )
}
