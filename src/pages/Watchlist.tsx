import { useState } from 'react'

import Page from '../kit/Page'
import Menu from '../kit/Menu'
import SearchInput from '../kit/SearchInput'
import Tokens from '../kit/Tokens'

import { useSearch, useMock } from '../hooks'

function Watchlist() {
  const [search, setSearch] = useState('')

  const { tokens } = useMock()

  const { tokensFiltered, isNotFound } = useSearch({ search, tokens: tokens.slice(0, 3) })

  return (
    <Page bottom={<Menu />}>
      <div className="py-[10px]">
        <SearchInput
          placeholder="Search ticker, name or address"
          value={search}
          onChange={setSearch}
        />
      </div>

      <Tokens tokens={tokensFiltered} isNotFound={isNotFound} />
    </Page>
  )
}

export default Watchlist
