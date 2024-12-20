import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Page, Menu, SearchInput, Button, Tokens, TokensHeader } from '../kit'

import { useSearch, useGetTokens } from '../hooks'

import { ReactComponent as SortIcon } from '../assets/sort.svg'
import { ReactComponent as FilterIcon } from '../assets/filter.svg'

export const Market = () => {
  const [search, setSearch] = useState('')

  const { data: tokens } = useGetTokens()

  const { tokensFiltered, isNotFound } = useSearch({ search, tokens: tokens || [] })
  const navigate = useNavigate()

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

      <Tokens
        header={<TokensHeader />}
        tokens={tokensFiltered}
        isNotFound={isNotFound}
        onClick={(token) => { navigate(`/asset?address=${token.address}`) }}
      />
    </Page>
  )
}
