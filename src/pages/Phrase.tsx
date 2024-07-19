import { usePersistStore } from '../hooks'

import { Page, ShowMnemonic } from '../kit'

function Phrase() {
  const { mnemonic } = usePersistStore()

  if (!mnemonic) {
    return null
  }

  return (
    <Page>
      <ShowMnemonic mnemonic={mnemonic} />
    </Page>
  )
}

export default Phrase
