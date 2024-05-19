import { Buffer } from 'buffer'
import { useState } from 'react'

import { Keypair } from '@solana/web3.js'
import * as bip39 from 'bip39'

// @ts-ignore
window.Buffer = Buffer

function Import() {
  const [mnemonic, setMnemonic] = useState<string>('test')

  const seed = bip39.mnemonicToSeedSync(mnemonic, '') // mnemonic, password
  const keypair = Keypair.fromSeed(seed.slice(0, 32))
  const pubKey = keypair.publicKey.toBase58()

  return (
    <>
      <h2>Enter Recovery Phrase</h2>
      <textarea
        className="w-[300px] h-[100px] border border-black"
        value={mnemonic}
        onChange={(e) => { setMnemonic(e.target.value) }}
      />
      <br />
      <br />
      <div>publicKey: {pubKey}</div>

      <a href={`https://solscan.io/account/${pubKey}`}>Scaner</a>
    </>
  )
}

export default Import
