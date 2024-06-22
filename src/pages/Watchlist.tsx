import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Page from '../kit/Page'
import Menu from '../kit/Menu'
import SearchInput from '../kit/SearchInput'
import Tokens from '../kit/Tokens'
import TokensHeader from '../kit/TokensHeader'

import { useSearch, useMock } from '../hooks'

function Watchlist() {
  const [search, setSearch] = useState('')

  const { tokens } = useMock()

  const { tokensFiltered, isNotFound } = useSearch({ search, tokens: tokens.slice(0, 3) })
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

export default Watchlist
