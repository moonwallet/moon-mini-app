import { Keypair } from '@solana/web3.js'
import * as bip39 from 'bip39'
import { Buffer } from 'buffer'

import { usePersistStore } from './useStore'

// @ts-ignore
window.Buffer = Buffer

export const useWallet = () => {
  const { mnemonic } = usePersistStore()

  let address: string = ''

  if (mnemonic) {
    const seed = bip39.mnemonicToSeedSync(mnemonic, '') // mnemonic, password
    const keypair = Keypair.fromSeed(seed.slice(0, 32))
    address = keypair.publicKey.toBase58()
  }

  return { address }
}
