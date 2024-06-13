import { useState } from 'react'

import Page from '../kit/Page'
import Menu from '../kit/Menu'
import SearchInput from '../kit/SearchInput'
import Button from '../kit/Button'
import Tokens from '../kit/Tokens'

import { useSearch, useMock } from '../hooks'

import { ReactComponent as SortIcon } from '../assets/sort.svg'
import { ReactComponent as FilterIcon } from '../assets/filter.svg'

function Market() {
  const [search, setSearch] = useState('')

  const { tokens } = useMock()

  const { tokensFiltered, isNotFound } = useSearch({ search, tokens })

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

      <Tokens tokens={tokensFiltered} isNotFound={isNotFound} />
    </Page>
  )
}

export default Market
