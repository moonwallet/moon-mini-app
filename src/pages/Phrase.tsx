import { usePersistStore } from '../store'

import Page from '../kit/Page'
import ShowMnemonic from '../kit/ShowMnemonic'

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
