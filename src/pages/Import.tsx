import React from 'react'
import { useState } from 'react'

function Import() {
  const [mnemonic, setMnemonic] = useState<string>('')

  return (
    <>
      Import
      <input
        type="text"
        value={mnemonic}
        onChange={(e) => { setMnemonic(e.target.value) }}
      />
    </>
  )
}

export default Import
