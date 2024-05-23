import { useMemo, useState } from 'react'

import Page from '../kit/Page'
import Menu from '../kit/Menu'
import SearchInput from '../kit/SearchInput'
import Button from '../kit/Button'
import Token from '../kit/Token'

import { ReactComponent as SortIcon } from '../assets/sort.svg'
import { ReactComponent as FilterIcon } from '../assets/filter.svg'
import notFound from '../assets/not-found.png'

function Market() {
  const [search, setSearch] = useState('')
  type TPricePeriod = '1h' | '3h' | '6h' | '12h' | '24h'
  const [pricePeriod /*, setPricePeriod */] = useState<TPricePeriod>('1h')
  const [/*isPeriodOpen*/, setPeriodOpen] = useState(false)

  const tokens = useMemo(() => {
    const tokens = []
    const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')
    const getLetter = () => letters[Math.floor(Math.random() * letters.length)]
    while (tokens.length < 100) {
      tokens.push(`${getLetter()}${getLetter()}${getLetter()}`)
    }
    return tokens
  }, [])

  const tokensFiltered = useMemo(() => {
    return tokens.filter(token => token.toLowerCase().includes(search.trim().toLowerCase()))
  }, [tokens, search])

  return (
    <Page bottom={<Menu />}>
      <div className="py-[10px]">
        <SearchInput
          placeholder="Search ticker, name or address"
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="relative">
          <Button
            theme="small-light"
            className="flex items-center gap-[10px]"
            onClick={() => {}}
          >
            <span>Sort by Trending</span>
            <SortIcon className="w-[14px] h-[22px]" />
          </Button>
        </div>
        <div className="relative">
          <Button
            theme="small-light"
            className="flex items-center gap-[10px]"
            onClick={() => {}}
          >
            <span>Filters</span>
            <FilterIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2">
        {!!tokensFiltered.length && (
          <div className="flex items-center justify-between">
            <div className="text-[14px] leading-[19px] text-[#3C3C4399] font-nu">Market Cap / Liquidity</div>
            <Button
              className="flex items-center gap-1 text-[14px] leading-[19px] text-[#3C3C4399] font-nu"
              onClick={() => { setPeriodOpen(true) }}
            >
              <span>Price / {pricePeriod} change</span>
              <SortIcon className="w-[14px] h-[22px]" />
            </Button>
          </div>
        )}

        {tokensFiltered.map(token => (
          <Token
            key={token}
            title={token}
          />
        ))}

        {!!tokens.length && !tokensFiltered.length && (
          <div className="mt-[100px] flex flex-col items-center justify-center gap-3">
            <img src={notFound} className="w-[112px] h-[112px]" />
            <div className="font-nu text-[15px] leading-[21px] font-semibold text-[#3C3C4399] text-center">No search results.<br />Try something different.</div>
          </div>
        )}
      </div>
    </Page>
  )
}

export default Market
