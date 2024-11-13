import { usePersistStore } from '../hooks'

import { Page, ShowMnemonic } from '../kit'

export const Phrase = () => {
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
