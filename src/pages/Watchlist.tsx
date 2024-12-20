import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Page, Menu, SearchInput, Tokens, TokensHeader } from '../kit'

import { useSearch, useGetTokens } from '../hooks'

export const Watchlist = () => {
  const [search, setSearch] = useState('')

  const { data: tokens } = useGetTokens()

  const { tokensFiltered, isNotFound } = useSearch({ search, tokens: (tokens || []).slice(1, 4) })
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

      <Tokens
        header={<TokensHeader />}
        tokens={tokensFiltered}
        isNotFound={isNotFound}
        onClick={(token) => { navigate(`/asset?address=${token.address}`) }}
      />
    </Page>
  )
}
